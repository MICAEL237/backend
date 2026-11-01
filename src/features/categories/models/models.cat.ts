import prisma from "../../../config/prisma";

export  class ModelCategorie{
    static async read (){
        const read = await prisma.categorie.findMany({
            orderBy: {nom: "asc"}
        })
        return read
    }
}