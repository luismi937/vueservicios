<template>
  <div>
    <h1>Detalles Empleados Component</h1>
    <form>
        <label >Seleccione un empleado</label>
      <select  v-model="idEmpleado" class="w-25 p-2 border border-gray-300 rounded-md ">
        <option 
          v-for="empleado in empleados"
          :value="empleado.idEmpleado"
          :key="empleado"
        >
          {{ empleado.apellido }}
        </option>
      </select>
      <button v-on:click.prevent="onEmpleadoChange()">Ver detalles</button>
    </form>
  </div>
  <div>
    <h2 v-if="selectedEmpleado">Detalles del Empleado Seleccionado:</h2>
    <div v-if="selectedEmpleado">
      <p>
        <strong>ID Empleado:</strong>
        {{
          selectedEmpleado.idEmpleado
        }}
      </p>
      <p>
        <strong>Apellido:</strong>
        {{ selectedEmpleado.apellido }}
      </p>
      <p>
        <strong>Departamento:</strong>
        {{ selectedEmpleado.departamento }}
      </p>
    </div>
  </div>
</template>

<script>
// Importar axios para realizar peticiones HTTP
import axios from "axios";
// Importar la configuración global con las URLs de las APIs
import Global from "../Global.js";

// Obtener la URL de la API de empleados desde la configuración global
var urlApi = Global.urlEmpleados;

export default {
  // Nombre del componente
  name: "EmpleadosDetailsComponent",
  // Estado local del componente
  data() {
    return {
      // Array para almacenar la lista de empleados
      empleados: [],
      // Variable para almacenar el ID del empleado seleccionado
      idEmpleado: 0,
      // Variable para almacenar los detalles del empleado seleccionado
      selectedEmpleado: null,
    };
  },
  // Hook del ciclo de vida que se ejecuta al montar el componente
  mounted() {
    // Definir el endpoint de la API
    let request = "api/Empleados";
    // Realizar petición GET para obtener todos los empleados
    axios.get(urlApi + request).then((response) => {
      console.log("Leyendo datos empleados");
      // Asignar los datos obtenidos al array de empleados
      this.empleados = response.data;
    });
  },
  // Métodos del componente
  methods:{
    // Método que se ejecuta cuando cambia el empleado seleccionado
    onEmpleadoChange(){
        console.log("Empleado cambiado a: " + this.idEmpleado);
        // Definir el endpoint con el ID del empleado seleccionado
        let request="api/Empleados/" + this.idEmpleado;
        // Realizar petición GET para obtener los detalles del empleado
        axios.get(urlApi + request).then((response) => {
          console.log("Leyendo datos empleado");
          // Asignar los datos del empleado al objeto selectedEmpleado
          this.selectedEmpleado = response.data;
        });
    }
  }
};
</script>

<style></style>
