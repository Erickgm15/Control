import { obtenerProductos } from "../../../Control/miLocalStorage.js";

export function listaCarrito() {
    let seccion = document.createElement('section');
    seccion.className = "carrito";

    let recuperarProductos = obtenerProductos();

    recuperarProductos.forEach(element => {
        // div general para el producto
        let divProducto = document.createElement('div');
        divProducto.className = "producto";

        // div para la imagen
        let divImagen = document.createElement('div');
        divImagen.className = "producto-imagen";
        let img = document.createElement('img');
        img.src = element.imagen|| "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png";
        img.alt = element.titulo;
        divImagen.appendChild(img);

        // p para el nombre
        let nombre = document.createElement('p');
        nombre.className = "producto-nombre";
        nombre.textContent = element.titulo;

        // p para el precio
        let precio = document.createElement('p');
        precio.className = "producto-precio";
        precio.textContent = `$${element.price}`;

        // Añadir todo al div general
        divProducto.appendChild(divImagen);
        divProducto.appendChild(nombre);
        divProducto.appendChild(precio);

        // Añadir al section
        seccion.appendChild(divProducto);
    });

    return seccion;
}
