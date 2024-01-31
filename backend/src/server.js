import express from "express";
import {db_connect} from "./database/index.js"
import dotenv from "dotenv"

const app = express()

dotenv.config({
    path : ".env"
})


app.listen(process.env.PORT||5000 , ()=>{
    console.log("server is running at the port : " , process.env.PORT||5000);
})
db_connect()
