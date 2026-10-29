import prisma from "../../../config/prisma";

export class ModelCommune {
  static async readList() {
    try {
      const Listcommune = await prisma.commune.findMany();
      return Listcommune
    } catch (error) {
        console.log("problemeListCommune", error)
    }
  }
}
