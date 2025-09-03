import { crearHeader} from "./componentes/hearder/headerComponents.js"
import { seccion1 } from "./Components/Seccion/seccionComponents.js";
import { nav }  from "./Components/Nav/navComponent.js"


   let ListaDeCompras = localStorage.getItem("carrito");

function seccion (){

   let seccion = document.createElement('section');


   //LocalStorage
  
  
        if(!ListaDeCompras){
            ListaDeCompras =[];
            localStorage.setItem("carrito",JSON.stringify(ListaDeCompras));
        } 

         console.log(ListaDeCompras);


   // Header
   seccion.appendChild(crearHeader());

   // Seccion 1
   seccion.appendChild(seccion1());



return seccion;

}

   
document.body.appendChild(seccion());

export {ListaDeCompras};

