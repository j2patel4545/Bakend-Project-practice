import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));  // for url 
app.use(express.static("public"));   // temporary file storehogi server pe  public foldeer me

app.use(cookieparser());




export {app}