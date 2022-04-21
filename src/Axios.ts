import axios from "axios"
let rutaApi = "http://localhost/carlos_andres/repositorio/public/api/"
// let rutaApi = "https://pokeapi.co/api/v2/berry/"

export default (ruta:"")=>{
    return axios.create({
        baseURL:rutaApi,
    })
}