import { ModelAuth } from "../models/auth.model";
import { RegisterType } from "../schemas/register.schema";
import { ExistingUser } from "../utils/existing.user";
import bcrypt from "bcrypt";

export class ServiceAuth {
  static async create(data: RegisterType) {
    const user = await ExistingUser(data.email);
    console.log(user)

    try {
      if (user === false) {
        const Hashpassword = await bcrypt.hash(data.password, 12);

        const createData = {
          first_name: data.first_name,
          last_name: data.last_name,
          password: Hashpassword,
          email: data.email,
          tel: data.tel,
        };
        const create = await ModelAuth.createUser(createData);
        console.log(create)
      }
    } catch (error) {
        console.log("createUserService", error)
    }
    return user;
  }
}
