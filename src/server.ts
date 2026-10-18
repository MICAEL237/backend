import express, {Request, Response} from 'express'
import dotenv, { config } from 'dotenv'
import prisma from './config/prisma'

dotenv.config()


const PORT = process.env.PORT || 3000
const app = express()



const start =  async () =>{
try {
        await prisma.$connect()
    console.log('BD connecter')

    app.listen(PORT, () => {
    console.log(`application demarrer sur http://localhost:${PORT}`)
})
} catch (error) {
    console.log('erreur de connexion')
    console.log(error)
    
}

}

start()




