<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";

const service = new ServiceEmpleados();

export default {
  name: "ListaEmpleados",
  data() {
    return {
      empleados: [],
      oficios: [],
      oficioSeleccionado: ""
    };
  },
  mounted() {
    this.cargarOficios();
    this.cargarEmpleados();
  },
  methods: {
    async cargarEmpleados() {
      this.empleados = await service.getEmpleados();
    },
    async cargarOficios() {
      this.oficios = await service.getOficios();
    },
    async cargarEmpleadosOficio() {
      if (this.oficioSeleccionado) {
        this.empleados = await service.getEmpleadosOficio(this.oficioSeleccionado);
      } else {
        this.cargarEmpleados();
      }
    }
  }
};
</script>
