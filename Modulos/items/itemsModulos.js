import { guardarProducto } from '../../Control/miLocalStorage.js'
export function item(titulo, price, description, category, urImg) {

    let item = document.createElement('div');
    item.className = "item";

    
    let tituloEl = document.createElement("h2");
    tituloEl.textContent = titulo;
    item.appendChild(tituloEl);

    
    let imagen = document.createElement('img');
    imagen.src = urImg;
    imagen.alt = titulo;
    item.appendChild(imagen);

    
    let descripcionEl = document.createElement("p");
    descripcionEl.className = "Descripcion"
    descripcionEl.textContent = description;
    item.appendChild(descripcionEl);


    let categoriaEl = document.createElement("span");
    categoriaEl.className = "Categoria"
    categoriaEl.textContent = category;
    item.appendChild(categoriaEl);

    
let precioEl = document.createElement("p");
precioEl.className = "item-precio";
precioEl.textContent = price;
item.appendChild(precioEl);

    
    item.addEventListener('click', () => {

        guardarProducto("HOLA MUNDO ")
        console.log("Producto en Local Storage" );
        location.reload();

    });


       
    return item;
}
