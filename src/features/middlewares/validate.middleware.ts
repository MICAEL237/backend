import { NextFunction, Request, Response } from "express"
import z, {ZodType } from "zod"

export const VerifySchema = (schema: ZodType) =>{
    const middleware = (req: Request, res: Response, next: NextFunction) => {
        const datas = req.body
        const resultat =  schema.safeParse(datas)

        if(!resultat.success || !resultat){
            return res.status(400).json({success: false, message: "inofrmation non valide ...", error: resultat.error})
        }

        next()
    }

    return middleware


}




