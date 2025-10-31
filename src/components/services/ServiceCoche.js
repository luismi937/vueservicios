import axios from 'axios';
import Global from '../../Global';
export default class ServiceCoche {
    getCoches (){
       return new Promise(function(resolve){
             let coches = [];
        let request = "webresources/coches";
        let url = Global.urlCoches +request
        axios.get(url).then((response) =>{
            console.log("leyendo coches")
            coches = response.data
            resolve(coches)
        })


    })
}

    }
