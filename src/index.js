// require('dotenv').config
// import { env } from 'process';
import dotenv from "dotenv"

import connectDB from './db/db.js'

dotenv.config({
    path:` ./env`
})
connectDB();