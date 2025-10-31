<template>
    <div>
        <h2>Empleados por Oficio</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emp in empleados" :key="emp.id">
                    <td>{{ emp.apellido }}</td>
                    <td>{{ emp.oficio }}</td>
                    <td>{{ emp.salario }}</td>
                    <td>{{ emp.departamento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>
<script>
import axios from 'axios';  
import Global from './../Global';
export default {
    name: 'EmpleadosOficios',
    data() {
        return {
            empleados: []
        }
}, 
 methods: {
    loadEmpleados() {
            let oficio = this.$route.params.oficio;
            // Aquí puedes hacer una llamada a la API para obtener los empleados con el oficio seleccionado
            let request = "api/empleados/empleadosoficio/" + oficio;
            let url = Global.urlEmpleados + request;
            axios.get(url).then(response => {
                console.log("leyndo empleados oficio")
                this.empleados = response.data;
            });
    }
        // Lógica para cargar empleados según el oficio seleccionado
 },
 mounted() {
    this.loadEmpleados();
 },
    watch: {
        '$route.params.oficio'(newOficio, oldOficio) {
            if (newOficio !== oldOficio) {
                this.loadEmpleados();
                
            }

        }

    }
}

</script>
<style>

</style>