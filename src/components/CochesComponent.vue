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
import ServiceCoche from './services/ServiceCoche';
const service = new ServiceCoche();
export default {
    name: 'CochesComponent',
    data(){
        return {
            coches:[]
        }
    },
    mounted(){
        service.getCoches().then(result=>{
            this.coches = result;
        });
    }

}
</script>

<style>

</style>