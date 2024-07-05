import cors from 'cors';
import express from 'express'
import dotenv from "dotenv"
import * as indexRouter from './src/index.router.js'


dotenv.config({path:'./config/.env'})

const app = express()
const port = 5002
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

const baseurl=process.env.BASEURL
app.use(`${baseurl}`,indexRouter.feedbackRouter)
app.use(`${baseurl}`,indexRouter.contactRouter)



app.listen(port, () => console.log(` app listening on port ${port}!`))