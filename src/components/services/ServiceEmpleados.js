import axios from 'axios';

const urlEmpleados = "https://apiempleadosfullstack.azurewebsites.net/" 

export default class ServiceEmpleados {
  
  getEmpleados() {
    const request = "empleados";
    return axios.get(urlEmpleados + request).then(res => res.data);
  }

  findEmpleado(id) {
    const request = "empleados/" + id;
    return axios.get(urlEmpleados + request).then(res => res.data);
  }

  getOficios() {
    const request = "oficios";
    return axios.get(urlEmpleados + request).then(res => res.data);
  }

  getEmpleadosOficio(oficio) {
    const request = "empleados/oficio/" + oficio;
    return axios.get(urlEmpleados + request).then(res => res.data);
  }
}
