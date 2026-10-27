import dotenv from 'dotenv'
import { RegisterType } from '../schemas/register.schema'
import jwt from 'jsonwebtoken'
import { role } from '../../../../generated/prisma'
import { PayloadType } from '../../../types/payload.type'
dotenv.config()



const CreateToken = async (user: PayloadType): Promise<any> =>{
   const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT 
   const Payload = {id: user.id, email: user.email, role: user.role}
   const ExpireTime = process.env.EXPIRE_TOKEN

   if(!SECRET_KEY_JWT || !Payload || !ExpireTime ){
    console.log("parametre introuvable")
    return
   }

   const token = jwt.sign(Payload, SECRET_KEY_JWT, {expiresIn: Number(ExpireTime)}) 


   return token
}



export default CreateToken