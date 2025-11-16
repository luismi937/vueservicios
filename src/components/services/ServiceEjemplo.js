// Servicio de ejemplo simple usado por `HomeComponent`.
// Proporciona utilidades pequeñas para demostración o pruebas.
export default class ServiceEjemplo {
    // Devuelve un saludo personalizado. Recibe el nombre o texto a concatenar.
    getSaludo(nombre) {
        // Nota: aquí sólo se concatena texto; si se necesitara localización
        // o formato más complejo, se podría reemplazar por una librería.
        return "Bienvenido a tu viernes" + nombre;
    }
}