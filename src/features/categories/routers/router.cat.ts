import { Router } from "express";
import { ControllerCategorie } from "../controllers/controllers.cat";

const categorieRouter = Router()

categorieRouter.get("/", ControllerCategorie.read)


export default categorieRouter