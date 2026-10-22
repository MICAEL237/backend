import { Router } from "express";
import { VerifySchema } from "../../middlewares/validate.middleware";
import { RegisterSchema } from "../schemas/register.schema";
import { AuthControllers } from "../controllers/auth.controller";
import { LoginSchema } from "../schemas/login.schema";
import { VerifyRoleA_m, VerifyRoleadmin } from "../../middlewares/auth-middleware";

const UserRoute = Router()


UserRoute.get('/', AuthControllers.readUser)
UserRoute.patch('/updatepassword',VerifyRoleA_m,  VerifySchema(LoginSchema ), AuthControllers.UpdatePassword)
UserRoute.get('/me',  AuthControllers.Me)




export default UserRoute