import express from 'express'
import AuthRoute from './src/features/auth/router/auth.route'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const origin_port = process.env.CORS_ORIGIN
console.log(origin_port)

const app = express() 

app.use(express.json())
app.use(cors({
    origin: origin_port
}))


app.use()

app.use('/api/v1/users', AuthRoute)


export default app