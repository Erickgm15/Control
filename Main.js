import { crearHeader} from "./componentes/hearder/headerComponents.js"
import { seccion1 } from "./Components/Seccion/seccionComponents.js";


function seccion (){

   let seccion = document.createElement('section');


   // Header
   seccion.appendChild(crearHeader());

   // Seccion 1
   seccion.appendChild(seccion1());



return seccion;

}

   
document.body.appendChild(seccion());


