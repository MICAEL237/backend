import { Router } from "express";
import { signalementControlleur } from "../controllers/signalemment.controllers";
import { VerifySchema } from "../../middlewares/validate.middleware";
import { SchemaSigna } from "../schemas/schema.signalemment";
import { SIGN_MULTER } from "../../../config/multers/multer.sign";

const signRouter = Router()

signRouter.post("/",SIGN_MULTER.single("image") ,VerifySchema(SchemaSigna), signalementControlleur.create)
signRouter.get("/", signalementControlleur.ReadSign)


export default signRouter