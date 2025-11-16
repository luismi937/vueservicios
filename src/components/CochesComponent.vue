<template>
  <div> 
    <h1>Coches Component</h1>
    <div v-for="car in coches" :key="car">
        <h3 style="color: blue;">
            {{ car.marca }}  {{ car.modelo }}  
            
        </h3> 
        <p>Driver: {{ car.conductor }}</p>
         <img :src="car.imagen" alt="" style="width: 150px; height: 150px;"/>
    </div>
  </div>
</template>

<script>
// Importar el servicio de coches
import ServiceCoche from './services/ServiceCoche';
// Instancia del servicio
const service = new ServiceCoche();

export default {
    // Nombre del componente
    name: 'CochesComponent',
    data(){
        return {
            // Array para almacenar la lista de coches obtenida de la API
            coches:[]
        }
    },
    // Hook del ciclo de vida que se ejecuta al montar el componente
    mounted(){
        // Obtener la lista de coches del servicio
        service.getCoches().then(result=>{
            // Asignar los resultados al array de coches
            this.coches = result;
        });
    }

}
</script>

<style>

</style>