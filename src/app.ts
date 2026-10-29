import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookiParser from 'cookie-parser'
import AuthRoute from './features/auth/router/auth.route'
import commeRouter from './features/communes/routers/router.commune'
import { VerrifyUser } from './features/middlewares/auth-middleware'
import UserRoute from './features/auth/router/user.route'
import signRouter from './features/signalements/routers/router.signalement'
import { UPLOADS_DIR } from './config/multers/multer.config'

dotenv.config()

const origin_port = process.env.CORS_ORIGIN
console.log(origin_port)



const app = express() 

app.use(express.json())
app.use(cors({
    origin: origin_port,
    credentials:true
}))

app.use("/uploads", express.static(UPLOADS_DIR));

app.use(cookiParser())


app.use('/api/v1/commune', commeRouter)

app.use('/api/v1/auth', AuthRoute)

app.use(VerrifyUser)
app.use('/api/v1/users', UserRoute)
app.use('/api/v1/sign', signRouter)





export default app