import express from 'express'
import AuthRoute from './src/features/auth/router/auth.route'
import cors from 'cors'
import dotenv from 'dotenv'
import { VerrifyUser } from './src/features/middlewares/auth-middleware'
import cookiParser from 'cookie-parser'
import UserRoute from './src/features/auth/router/user.route'

dotenv.config()

const origin_port = process.env.CORS_ORIGIN
console.log(origin_port)

const app = express() 

app.use(express.json())
app.use(cors({
    origin: origin_port,
    credentials:true
}))

app.use(cookiParser())



app.use('/api/v1/auth', AuthRoute)
app.use(VerrifyUser)
app.use('/api/v1/users', UserRoute)




export default app