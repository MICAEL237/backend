import { Router } from "express";
import { VerifySchema } from "../../middlewares/validate.middleware";
import { RegisterSchema } from "../schemas/register.schema";
import { AuthControllers } from "../controllers/auth.controller";
import { LoginSchema } from "../schemas/login.schema";

const AuthRoute = Router()


AuthRoute.post('/', VerifySchema(RegisterSchema ), AuthControllers.CreateUser)
AuthRoute.get('/', AuthControllers.readUser)
AuthRoute.post('/login', VerifySchema(LoginSchema ), AuthControllers.Login)
AuthRoute.get('/me',  AuthControllers.Me)



export default AuthRoute