import path from "node:path";
import fs from 'fs'
import { TYPE_FILE, UPLOADS_DIR } from "./multer.config";
import multer from "multer";



const SIGN_UPLOAD = path.join(UPLOADS_DIR, "/signalement")

const SIGN_Max_TAILLE = 1024 * 1024 * 5

fs.mkdirSync(SIGN_UPLOAD, {recursive: true})

export const SIGN_MULTER = multer({
    storage: multer.diskStorage({
        destination: SIGN_UPLOAD,
        filename: (req, file, cb) =>{
            cb(null,
                `signa-${crypto.randomUUID()}${TYPE_FILE[file.mimetype]}`
            )

        }

    
    }),
    limits: {fileSize: SIGN_Max_TAILLE, fields: 1},
    fileFilter: (req, file, cb) =>{
            if(!TYPE_FILE[file.mimetype]){
                cb(new Error("ce type de fichier n'est pas pris en compte"))

            }

            cb(null, true)
    }
})