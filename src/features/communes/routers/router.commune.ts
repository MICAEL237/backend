import { Router } from "express";
import { controllersCommune } from "../controllers/controller.commune";

const commeRouter = Router()

commeRouter.get("/", controllersCommune.readList)

export default commeRouter