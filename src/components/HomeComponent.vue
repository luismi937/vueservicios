<template>
    <div>
        <h1>Home Component</h1>
        <br/>
        <h2>{{ mensaje }}</h2>
    </div>
</template>

<script>
// Importar el servicio de ejemplo
import ServiceEjemplo from './services/ServiceEjemplo';
// Para poder usar el servicio necesitamos una instancia de la clase servicio
const service = new ServiceEjemplo();

export default {
    // Nombre del componente
    name: 'HomeComponent'
    ,data(){
        return{
            // Mensaje que se mostrará en la vista
            mensaje: ""
        }
    },
    // Hook del ciclo de vida que se ejecuta después de que el componente esté montado
    mounted(){
        this.mensaje = service.getSaludo(" Usuario desde mounted");
    }
}
</script>

<style>

</style>