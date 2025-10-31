<template>
    <div>
        <h1>Home Component</h1>
        <br/>
        <h2>{{ mensaje }}</h2>
    </div>
</template>

<script>
import ServiceEjemplo from './services/ServiceEjemplo';
//para poder usar el servicio necesitamos una instancia de la clase servicio
const service = new ServiceEjemplo();
export default {
    name: 'HomeComponent'
    ,data(){
        return{
            mensaje: ""
        }
    },
    mounted(){
        this.mensaje = service.getSaludo(" Usuario desde mounted");
    }
}
</script>

<style>

</style>