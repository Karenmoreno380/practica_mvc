import {Modelo} from '../models/user.model.js'
export const test =() =>{
    console.log('Si funcina la conexion entre el controlador y el proyecto')
}
Modelo.create({ //controlador
    name: "Jesus"
 })
