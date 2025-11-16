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
// Importar axios para realizar peticiones HTTP
import axios from 'axios';  
// Importar la configuración global con las URLs de las APIs
import Global from './../Global';

export default {
    // Nombre del componente
    name: 'EmpleadosOficios',
    // Estado local del componente
    data() {
        return {
            // Array para almacenar los empleados filtrados por oficio
            empleados: []
        }
    }, 
    // Métodos del componente
    methods: {
        // Método para cargar empleados según el oficio de la ruta
        loadEmpleados() {
            // Obtener el parámetro 'oficio' de la ruta
            let oficio = this.$route.params.oficio;
            // Definir el endpoint de la API para obtener empleados por oficio
            let request = "api/empleados/empleadosoficio/" + oficio;
            let url = Global.urlEmpleados + request;
            // Realizar petición GET para obtener los empleados con el oficio seleccionado
            axios.get(url).then(response => {
                console.log("leyendo empleados oficio")
                // Asignar los datos obtenidos al array de empleados
                this.empleados = response.data;
            });
        }
    },
    // Hook del ciclo de vida que se ejecuta al montar el componente
    mounted() {
        this.loadEmpleados();
    },
    // Observador de cambios en los parámetros de la ruta
    watch: {
        // Observar cambios en el parámetro 'oficio' de la ruta
        '$route.params.oficio'(newOficio, oldOficio) {
            // Si el oficio cambió, cargar los empleados nuevamente
            if (newOficio !== oldOficio) {
                this.loadEmpleados();
            }
        }
    }
}

</script>
<style>

</style>