import { Router } from "express";
import { VerifySchema } from "../../middlewares/auth.middleware";
import { RegisterSchema } from "../schemas/register.schema";
import { AuthControllers } from "../controllers/auth.controller";

const AuthRoute = Router()


AuthRoute.post('/', VerifySchema(RegisterSchema ), AuthControllers.CreateUser)
AuthRoute.get('/', AuthControllers.readUser)


export default AuthRoute