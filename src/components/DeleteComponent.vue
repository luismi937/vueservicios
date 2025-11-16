<template>
  <div>
    <h1>Delete</h1>
  </div>
</template>

<script>
// Importar el servicio de departamentos
import ServiceDepartamentos from "@/services/ServiceDepartamentos";

// Instancia del servicio
const service = new ServiceDepartamentos();

export default {
  // Nombre del componente
  name: "DeleteDepartamento",

  // Hook del ciclo de vida que se ejecuta al montar el componente
  mounted() {
    // Obtener el ID del parámetro de la ruta
    let id = this.$route.params.id;

    // Llamar al servicio para eliminar el departamento con el ID especificado
    service.deleteDepartamento(id).then(() => {
      // Una vez eliminado, redireccionar a la página de inicio
      this.$router.push("/");
    });
  },
};
</script>
