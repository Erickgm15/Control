import { crearHeader } from "../../componentes/hearder/headerComponents.js";
import { listaCarrito } from "../Seccion/seccionCarrito/listaCarrito.js";
import { nav} from "../../Components/Nav/navComponent.js"

let seccionCarrito= document.createElement('section');

// Header
seccionCarrito.appendChild(crearHeader());

// carga lista carrito
seccionCarrito.appendChild(listaCarrito());

// nav
seccionCarrito.appendChild(nav());

document.body.appendChild(seccionCarrito);

