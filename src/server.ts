import dotenv, { config } from 'dotenv'
import prisma from './config/prisma'
import app from '../src/app'
dotenv.config()


const PORT = process.env.PORT || 3000



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




