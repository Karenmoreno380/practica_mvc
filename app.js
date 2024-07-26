import mongoose from 'mongoose'; // conecta con mongo
import express from 'express'; // crea servidores locales
import cors from 'cors'; // le da seguridad al servidor
import dotenv from 'dotenv'; //  se utiliza para llamar a cualquier archivo dotenv
import {test} from './backend/controllers/user.controller.js';
import {test2} from './backend/controllers/admin.controller.js'
dotenv.config(); // activa el dotenv
mongoose.connect(process.env.urldb) //conecta la base de datos con mongo
.then (()=> {
    console.log("Si funciona la base de datos")
})
.catch((error)=>{
    console.log ("No funciona la base de datos")
})
const app =express(); // crea el servidor
app.use (cors());

app.listen(4001,()=>{ // escucha al servidor 
    console.log ('Funciona mi servidor')
})



 //conexiones de librerias y mi servidor
 test()
 test2()