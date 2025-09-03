import { guardarProducto, obtenerProductos } from '../../Control/miLocalStorage.js'
import { ListaDeCompras } from '../../Main.js'
export function item(id ,titulo, price, description, category, urImg) {

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
        let carritoLocalStorage = obtenerProductos();
        console.log("carrito" , carritoLocalStorage);

        carritoLocalStorage.push({titulo, price, description, category,imagen: urImg});
        guardarProducto(carritoLocalStorage);
        console.log("Producto en Local Storage" );
        location.reload();

    });


       
    return item;
}
