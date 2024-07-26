import {modeloadm } from '../models/admin.model.js'

export const test2 = ()=>{
    console.log ('Funciona el controlador de admin')
}
modeloadm .create({
    name:"juanito"
})