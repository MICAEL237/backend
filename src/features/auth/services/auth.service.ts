import { email } from "zod";
import { ModelAuth } from "../models/auth.model";
import { LoginType } from "../schemas/login.schema";
import { RegisterType } from "../schemas/register.schema";
import { ExistingUser } from "../utils/existing.user";
import bcrypt from "bcrypt";
import CreateToken from "../utils/auth.token";
import { fdatasync } from "node:fs";
import CreateRefreshToken from "../utils/auth.refresh.token";

export class ServiceAuth {
  static async create(data: RegisterType) {
    const user = await ExistingUser(data.email);
    // const usertoken = crypto.randomBytes(192).toString("hex")
    console.log(user);

    try {
      if (!user) {
        const Hashpassword = await bcrypt.hash(data.password, 12);

        const createData = {
          first_name: data.first_name,
          last_name: data.last_name,
          password: Hashpassword,
          email: data.email,
          tel: data.tel,
        };
        const create = await ModelAuth.createUser(createData);
        console.log(create);
      }
    } catch (error) {
      console.log("createUserService", error);
    }
    return user;
  }

  static async Login(data: LoginType) {
    try {
      const user = await ExistingUser(data.email);
      const password = await ModelAuth.selctPasword(data.email);
      if (!password?.password) return;

      if (user) {
        const VerifyPassword = await bcrypt.compare(
          data.password,
          password?.password,
        );
        if (VerifyPassword === true) {
          const token = await CreateToken(user);
          const Refreshtoken = await CreateRefreshToken(user)
          return {token, Refreshtoken};
        }

        console.log("login");
      }
    } catch (error) {
      console.log("login", error);
    }
  }

  static async UpdatePassword(data: LoginType) {
    const user = await ExistingUser(data.email);
    if (user) {
      try {
        const pasword = await bcrypt.hash(data.password, 12);
        const update = await ModelAuth.UpdatePassword(data.email, pasword);
        return update;
      } catch (error) {
        console.log("updatepassword", error);
      }
    }
  }
}
