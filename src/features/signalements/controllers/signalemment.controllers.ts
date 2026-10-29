import { Request, Response } from "express";
import { ModelSignalemment } from "../models/models.signalement";
import { CheminFichier } from "../../../config/multers/multer.config";

export class signalementControlleur {
  static async create(req: Request, res: Response) {
    const body = req.body;
    const idUser = req.user?.id as any;
    if (!body) {
      return res
        .status(400)
        .json({ success: false, message: "pas de donnee envoyer" });
    }

    if (!idUser) {
      return res
        .status(401)
        .json({ success: false, message: "utilisateur non connecter" });
    }
     const chemin = await CheminFichier(String(req.file))
    console.log(idUser)
    const data = {
      description: body.description,
      categorie: body.categorie,
      image: chemin,
      status: body.status,
      user: idUser,
      commune: body.commune,
      latitude: body.latitude,
      longitude: body.longitude,
    };

    console.log(data)

    try {
      const create = await ModelSignalemment.create(data);
      return res
        .status(201)
        .json({ success: true, message: "creer avec succes" });
    } catch (error) {
      console.log("ServiceSignalemment", error);
      res.status(500).json({ success: false, message: error });
    }
  }
}
