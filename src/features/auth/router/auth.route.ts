import { Router } from "express";
import { VerifySchema } from "../../middlewares/validate.middleware";
import { RegisterSchema } from "../schemas/register.schema";
import { AuthControllers } from "../controllers/auth.controller";
import { LoginSchema } from "../schemas/login.schema";

const AuthRoute = Router()


AuthRoute.post('/', VerifySchema(RegisterSchema ), AuthControllers.CreateUser)
AuthRoute.post('/login', VerifySchema(LoginSchema ), AuthControllers.Login)




export default AuthRoute