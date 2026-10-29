import prisma from "../../../config/prisma";
import { TypeSigna } from "../schemas/schema.signalemment";

export class ModelSignalemment {
  static async create(data: TypeSigna) {
    try {
      const create = await prisma.signalemment.create({
        data: {
          description: data.description,
          image: data.image!,
          status: data.status,
          latitude: data.latitude,
          longitude: data.longitude,

          communeid: {
            connect: {
                id: data.commune 
            }
          },

          UderId: {
            connect:{
                id: data.user
            }
          },

          categorieId:{
            connect:{
                id: data.categorie
            }

          }
        },
      });
      return create;
    } catch (error) {
      console.log("createSignalemment", error);
    }
  }
}
