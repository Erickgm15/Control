
import { item } from "../../Modulos/items/itemsModulos.js";

import { products } from "../../database/productos.js"

export function seccion1(){

    let seccion = document.createElement('section');
   seccion.className= "seccion-1";


 

  products.forEach(element => {
    seccion.appendChild(item(element.title,element.price,element.description,element.category,element.image));
 });


    return seccion;


}