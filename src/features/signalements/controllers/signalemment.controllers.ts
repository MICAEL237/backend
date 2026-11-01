import { Request, Response } from "express";
import { ModelSignalemment } from "../models/models.signalement";
import { CheminFichier } from "../../../config/multers/multer.config";
import { success } from "zod";
import { tr } from "zod/v4/locales";

export class signalementControlleur {
  static async create(req: Request, res: Response) {
    const body = req.body;
    console.log(body)
    const idUser = req.user?.id as any;
    console.log(idUser)
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
     console.log("ici...")

    // if(!req.file){
    //   return res.status(400).json({success:false, message:"fichie absent"})
    // }
     const chemin = await CheminFichier(req.file?.path!)
     console.log("ici", chemin)
    console.log(idUser)
    const data = {
      description: body.description,
      categorie: body.categorie,
      image: chemin,
      status: body.status,
      user: idUser,
      commune: body.commune,
      latitude: Number(body.latitude),
      longitude: Number(body.longitude),
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

  static async ReadSign(req: Request, res: Response){
    const resuslt = await ModelSignalemment.ReadSign()
    if(!resuslt){
      return res.status(404).json({success:true, message: "pas de signalemment trouver"})
    }


    return res.status(200).json({success: true, data: resuslt})
  }
}
