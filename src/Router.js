// Importar funciones necesarias de vue-router
import { createWebHistory,createRouter } from "vue-router";
// Importar todos los componentes
import HomeComponent from "./components/HomeComponent.vue";
import CochesComponent from "./components/CochesComponent.vue";
import EmpleadosDetailsComponent from "./components/EmpleadosDetailsComponent.vue";
import CustomersComponent from "./components/CustomersComponent.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";
import DeleteComponent from "./components/DeleteComponent.vue";

// Array de rutas de la aplicación
const myRoutes=[
    // Ruta principal
    {path:"/",component:HomeComponent},
    // Ruta para visualizar coches
    {path:"/coches",component:CochesComponent},
    // Ruta para detalles de empleados
    {path:"/empleados",component:EmpleadosDetailsComponent},
    // Ruta para clientes
    {path:"/customers",component:CustomersComponent},
    // Ruta para empleados por oficio (con parámetro dinámico)
    {path: "/EmpleadosOficios/:oficio", component: EmpleadosOficios},
    // Ruta para eliminar
    {path: "/delete", component: DeleteComponent}

]

// Crear el enrutador con el historial web
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});

export default router;
