import { createWebHistory,createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CochesComponent from "./components/CochesComponent.vue";
import EmpleadosDetailsComponent from "./components/EmpleadosDetailsComponent.vue";
import CustomersComponent from "./components/CustomersComponent.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";
import DeleteComponent from "./components/DeleteComponent.vue";

const myRoutes=[
    {path:"/",component:HomeComponent},
    {path:"/coches",component:CochesComponent},
    {path:"/empleados",component:EmpleadosDetailsComponent},
    {path:"/customers",component:CustomersComponent},
    {path: "/EmpleadosOficios/:oficio", component: EmpleadosOficios},
    {path: "/delete", component: DeleteComponent}

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});

export default router;
