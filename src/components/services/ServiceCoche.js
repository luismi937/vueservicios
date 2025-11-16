// Servicio para operaciones relacionadas con "coches".
// Contiene métodos que llaman a la API remota definida en `Global.urlCoches`.
import axios from 'axios';
import Global from '../../Global';

export default class ServiceCoche {
    // Devuelve una promesa que resuelve con la lista de coches obtenida desde la API
    getCoches (){
       return new Promise(function(resolve){
             let coches = [];
            // Endpoint relativo para obtener coches (según API del backend)
            let request = "webresources/coches";
            // URL completa combinando la base en Global con el endpoint
            let url = Global.urlCoches +request
            // Petición GET a la API
            axios.get(url).then((response) =>{
                console.log("leyendo coches")
                // La API responde con los datos de coches en response.data
                coches = response.data
                // Resolver la promesa con la lista de coches
                resolve(coches)
            })



    })
}

    // Otros métodos relacionados con coches se pueden añadir aquí
    }
