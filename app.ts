import express from 'express'
import AuthRoute from './src/features/auth/router/auth.route'


const app = express() 

app.use(express.json())



app.use('/api/v1/users', AuthRoute)


export default app