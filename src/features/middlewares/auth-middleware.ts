import { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";
import dotenv from 'dotenv'
import { success } from "zod";
dotenv.config()


export const VerrifyUser = (req: Request, res: Response, next: NextFunction) =>{


       try {
         const token = req.cookies["cookie_token"]
        const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT 


        if(!token){
            return res.status(401).json({success:false, message:"pas de token"})
        }

        const payload = jwt.verify(token,SECRET_KEY_JWT! )

        if(typeof payload === "string" || !payload){
            return
        }

       req.user = {id: payload.id, email: payload.email, role: payload.role} 

       next()
       } catch (error) {
        res.status(500).json({success:true, error})
        
       }
}


export const VerifyRoleadmin = (req: Request, res:Response, next: NextFunction) =>{
    const user  =   req.user

    if(!user){
        return res.status(401).json({success:false, message:"Non authentifier"})
    }

    const role = user.role

    if(!role || role != "admin"){
        return res.status(403).json({success:false, message:"desole espace reserve"})
    }

    next()

}




export const VerifyRoleA_m = (req: Request, res:Response, next: NextFunction) =>{
    const user  =   req.user

    if(!user){
        return res.status(401).json({success:false, message:"Non authentifier"})
    }

    const role = user.role

    if(!role || role != "agent_municipale" || role != "admin"){
        return res.status(403).json({success:false, message:"desole espace reserve"})
    }

    next()

}
