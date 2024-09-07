// require('dotenv').config
// import { env } from 'process';
import dotenv from "dotenv"

import connectDB from './db/db.js'
import { error } from "console"

dotenv.config({
    path:` ./env`
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port: ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("Mongodb Connection fail !!!",err);
    
})