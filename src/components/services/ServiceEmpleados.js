// Servicio que centraliza las llamadas a la API de empleados.
// Aquí se colocan los métodos para obtener listas, detalles y filtros
// relacionados con los empleados.
import axios from 'axios';

// URL base de la API de empleados. Se puede externalizar a `Global` si se prefiere.
const urlEmpleados = "https://apiempleadosfullstack.azurewebsites.net/" 

export default class ServiceEmpleados {
  // Devuelve la lista completa de empleados
  getEmpleados() {
    const request = "empleados";
    return axios.get(urlEmpleados + request).then(res => res.data);
  }

  // Devuelve los datos de un empleado por su id
  findEmpleado(id) {
    const request = "empleados/" + id;
    return axios.get(urlEmpleados + request).then(res => res.data);
  }

  // Devuelve la lista de oficios disponibles
  getOficios() {
    const request = "oficios";
    return axios.get(urlEmpleados + request).then(res => res.data);
  }

  // Devuelve los empleados filtrados por oficio
  getEmpleadosOficio(oficio) {
    const request = "empleados/oficio/" + oficio;
    return axios.get(urlEmpleados + request).then(res => res.data);
  }
}
