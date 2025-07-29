
import { item } from "../../Modulos/items/itemsModulos.js";
export function seccion1(){

    let seccion = document.createElement('section');
   seccion.className= "seccion-1";


    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());


    return seccion;


}