import prisma from "../../../config/prisma";
import { RegisterType } from "../schemas/register.schema";

export class ModelAuth {
    static async createUser(data: RegisterType){

        try {
             const create = await prisma.user.create({
            data: data
        })

        return create
        } catch (error) {
            console.log("Prisma createUser",error)
            
        }
       
    }


    static async list(){
        try {
            const List = await prisma.user.findMany()
            return List
        } catch (error) {
            console.log(error)
            
        }
    }
}