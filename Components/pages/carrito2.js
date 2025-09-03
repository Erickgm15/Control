import { crearHeader } from "../../componentes/hearder/headerComponents.js";
import { listaCarrito } from "../Seccion/seccionCarrito/listaCarrito.js";

let seccionCarrito= document.createElement('section');

// Header
seccionCarrito.appendChild(crearHeader());

// carga lista carrito
seccionCarrito.appendChild(listaCarrito());
document.body.appendChild(seccionCarrito);