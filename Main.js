import { crearHeader} from "./componentes/hearder/headerComponents.js"

function seccion (){

   let seccion = document.createElement('section');

   seccion.appendChild(header1());

   
   let h1 = document.createElement('h1')
    h1.className = "titulo";
   h1.innerText = "HOLA MUNDO ";
   seccion.appendChild(h1);


   let p = document.createElement('p')
   p.className = "parrafo";
   p.innerText = " Introduccion a JavaScript";
   seccion.appendChild(p);

return seccion;

}

document.body.appendChild(seccion());

