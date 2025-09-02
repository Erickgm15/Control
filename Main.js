import { crearHeader} from "./componentes/hearder/headerComponents.js"
import { seccion1 } from "./Components/Seccion/seccionComponents.js";
import { nav }  from "./Components/Nav/navComponent.js"


function seccion (){

   let seccion = document.createElement('section');


   //LocalStorage
   let ListaDeCompras = localStorage.getItem("carrito");

        if(!ListaDeCompras){
            ListaDeCompras =[];
            localStorage.setItem("carrito",JSON.stringify(ListaDeCompras));
        } else{
            ListaDeCompras = JSON.parse(ListaDeCompras);
        }

         console.log(ListaDeCompras);


   // Header
   seccion.appendChild(crearHeader());

   // Seccion 1
   seccion.appendChild(seccion1());



return seccion;

}

   
document.body.appendChild(seccion());


