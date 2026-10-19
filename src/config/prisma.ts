// import {PrismaPg} from '@prisma/adapter-pg'
// import { PrismaClient } from '../../generated/prisma/client'




// const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL})


// const prisma = new PrismaClient({
//     adapter
// })


// export default prisma


// Assurez-vous d'importer dotenv en tout premier si ce n'est pas déjà fait !
import "dotenv/config"; 
import { Pool } from "pg"; // <-- ÉTAPE CLÉ : Importer Pool depuis le module 'pg'
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

// On instancie d'abord un Pool configuré avec votre DATABASE_URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// On passe l'instance de ce Pool à l'adaptateur Prisma
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;
