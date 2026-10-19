import { Request, Response } from "express";
import { ServiceAuth } from "../services/auth.service";
import { success } from "zod";
import { ModelAuth } from "../models/auth.model";

export class AuthControllers{
    static async CreateUser(req: Request, res: Response){
        const body =  req.body
        try {
            const user = await ServiceAuth.create(body)

            if(user == true){
                return res.status(409).json({success:false, message:"Cet email existe deja "})
            }

        } catch (error) {
            console.log(error)
            
        }

        return res.status(201).json({success:true, Message: "utilisateur creer avec succes"})


    }

    static async readUser(req:Request, res:Response){
        const List = await ModelAuth.list()
        if(List){
            return res.status(200).json({List})
        }

        return res.status(404).json({success:false, message:"Aucun utilisateur"})
    }
}