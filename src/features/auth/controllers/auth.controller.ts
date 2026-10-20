import { Request, Response } from "express";
import { ServiceAuth } from "../services/auth.service";
import { success } from "zod";
import { ModelAuth } from "../models/auth.model";

export class AuthControllers {
  static async CreateUser(req: Request, res: Response) {
    const body = req.body;
    try {
      const user = await ServiceAuth.create(body);

      if (user) {
        return res
          .status(409)
          .json({ success: false, message: "Cet email existe deja " });
      }
    } catch (error) {
      console.log(error);
    }

    return res
      .status(201)
      .json({ success: true, Message: "utilisateur creer avec succes" });
  }

  static async readUser(req: Request, res: Response) {
    const List = await ModelAuth.list();
    if (List) {
      return res.status(200).json({ List });
    }

    return res
      .status(404)
      .json({ success: false, message: "Aucun utilisateur" });
  }

  static async Login(req: Request, res: Response) {
    let token;
    try {
      const body = req.body;
      token = await ServiceAuth.Login(body);

      if (!token) {
        return res
          .status(404)
          .json({ success: false, message: "identifiants incorrects" });
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }

    const Cookie = res.cookie("cookie_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res
      .status(200)
      .json({ success: true, token: token.token, user: token.user });
  }

  static async Me(req: Request, res: Response) {
    const currentId = req.user?.id;

    try {
      if (!currentId) {
        return res
          .status(401)
          .json({ success: false, message: "utilisateur non connecter" });
      }

      const user = await ModelAuth.User(currentId);
      return res.status(200).json({ success: true, user: user });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
}
