import { Request, Response } from "express";
import { ModelCommune } from "../models/model.commune";

export class controllersCommune {
  static async readList(req: Request, res: Response) {
    try {
      const Listcommune = await ModelCommune.readList();
      if (!Listcommune) {
        res
          .status(404)
          .json({ success: false, message: "ressource inexistante" });
      }

      return res
        .status(200)
        .json({ success: true, message: "reussi", data: Listcommune });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }
}
