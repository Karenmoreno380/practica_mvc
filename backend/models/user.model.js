import {Schema, model} from 'mongoose'


const esquema = new Schema({ //modelo
    name:{
        type: String
    }
 })
 

 export const Modelo = new model('usuarios', esquema)