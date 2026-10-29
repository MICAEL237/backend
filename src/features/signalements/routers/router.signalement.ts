import { Router } from "express";
import { signalementControlleur } from "../controllers/signalemment.controllers";
import { VerifySchema } from "../../middlewares/validate.middleware";
import { SchemaSigna } from "../schemas/schema.signalemment";

const signRouter = Router()

signRouter.post("/", VerifySchema(SchemaSigna), signalementControlleur.create)

export default signRouter