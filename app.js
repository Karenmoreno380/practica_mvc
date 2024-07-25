import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {test} from './backend/controllers/user.controller.js'

dotenv.config();
mongoose.connect(process.env.urldb)
.then (()=> {
    console.log("Si funciona la base de datos")
})
.catch((error)=>{
    console.log ("No funciona la base de datos")
})
const app =express();
app.use (cors());

app.listen(4000,()=>{
    console.log ('Funciona mi servidor')
})



 //conexiones de librerias y mi servidor
 test()