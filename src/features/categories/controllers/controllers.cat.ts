import { Request, Response } from "express";
import { ModelCategorie } from "../models/models.cat";

export class ControllerCategorie {
  static async read(req: Request, res: Response) {
    const read = await ModelCategorie.read();
    const page = Number(req.query.page);
    const Limit = 20;

    if (!read) {
      return res
        .status(404)
        .json({ success: false, message: "pas de categorie trouver" });
    }

    const Offset = (page - 1) * Limit;

    const data = read.slice(Offset, Limit);
    return res.status(200).json({success:true, data: data})
  }
}
