<template>
    <div>
        <!-- Lista principal centrada, rellena desde navItems -->

        <!-- Navbar inferior: usa la misma fuente navItems para estar sincronizado -->
        <nav class="navbar navbar-expand navbar-light bg-light">
            <ul class="nav navbar-nav">
                <li class="nav-item" v-for="item in navItems" :key="item.path + '-nav'">
                    <router-link
                        class="nav-link"
                        :to="item.path"
                        exact-active-class="active"
                    >
                        {{ item.name }}
                    </router-link>
                </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Oficios
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="oficio in oficios" :key="oficio">
                                <router-link class="dropdown-item" :to="{path: '/empleadosoficios/'+ oficio}">{{oficio}}</router-link>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        
    </div>
</template>

<script>
import axios from 'axios';  
import Global from './../Global';
export default {
    name: 'MenuComponent',
    data() {
        return {
            // Fuente única de elementos de navegación. Mantener en sync con Router si cambia.
            navItems: [
                { name: 'Home', path: '/' },
                { name: 'Coches', path: '/coches' },
                { name: 'Empleados', path: '/empleados' },
                { name: 'Customers', path: '/customers' }
            ],
            oficios:[

            ],
            
        }
    },mounted(){
                console.log("mounted");
                let request = "api/Empleados/Oficios";
                let url = Global.urlEmpleados +request;
                console.log(url);
                axios.get(url).then(response=>{
                    console.log("leyendo oficios");
                    this.oficios = response.data;
                    //console.log(response.data);
                })
    }
}
</script>

<style>

</style>