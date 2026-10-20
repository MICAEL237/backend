import prisma from "../../../config/prisma";
import { RegisterType } from "../schemas/register.schema";

export class ModelAuth {
  static async createUser(data: RegisterType) {
    try {
      const create = await prisma.user.create({
        data: data,
      });

      return create;
    } catch (error) {
      console.log("Prisma createUser", error);
    }
  }

  static async list() {
    try {
      const List = await prisma.user.findMany();
      return List;
    } catch (error) {
      console.log(error);
    }
  }
  static async selctPasword(email: string) {
    try {
      const password = await prisma.user.findUnique({
        where: { email: email },
        select: { password: true },
      });
      return password;
    } catch (error) {
      console.log("password", error);
    }
  }

  static async User(id: string): Promise<any> {
    try {
      const User = await prisma.user.findFirst({
        where: { email: id },
        omit: { password: true },
      });
      return User;
    } catch (error) {
      console.log("user", error);
    }
  }
}
