import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import mongoose from "mongoose"
import productRoutes from './routes/product.route.js'
import userRoutes from './routes/user.route.js'
import cors from 'cors'

const app = express();

app.use(cors())
dotenv.config();

mongoose.connect(process.env.MONGO_URL)

app.use(bodyParser.json())
app.use("/api/product",productRoutes)
app.use("/api/v1/auth",userRoutes)

mongoose.connection.on("connected",()=>{
     console.log("Database connected")
})

app.listen(process.env.PORT,()=>{
console.log(`Server is running at port ${process.env.PORT}`)
})
