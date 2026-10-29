import path from "path";

export const UPLOADS_DIR = path.resolve("uploads") //nom du dossier racine


export const TYPE_FILE: Record<string, string> = {
    "image/webp": ".webp",
    "image/png": ".png",
    "image/jpg": ".jpg",
    "image/jpeg": ".jpeg"
}



export const CheminFichier = async ( Chemin: string) =>{
    return  `/uploads/${path.relative(UPLOADS_DIR, Chemin).split(path.sep).join("/")}`
}

