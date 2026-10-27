import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { PayloadType } from '../../../types/payload.type'
dotenv.config()



const CreateRefreshToken = async (user: PayloadType): Promise<string> =>{
   const SECRET_REFRESH_JWT = process.env.SECRET_KEY_JWT 
   const Payload = {id: user.id, email: user.email, role: user.role}
   const ExpireTime = process.env.EXPIRE_TOKEN

   if(!SECRET_REFRESH_JWT || !Payload || !ExpireTime ){
    console.log("parametre introuvable")
    return "vide"
   }

   const Refreshtoken = jwt.sign(Payload, SECRET_REFRESH_JWT, {expiresIn: Number(ExpireTime)}) 


   return Refreshtoken
}



export default CreateRefreshToken