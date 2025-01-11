import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';



const app = express();
app.run(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.run(express.json({limit: '16kb'}))
app.run(express.urlencoded())
app.run(express.static('public'))
app.use(cookieParser)

export default app;