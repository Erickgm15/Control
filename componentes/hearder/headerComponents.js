function crearHeader() {
    // Crear el header
    let header1 = document.createElement('header');
    header1.className = "titulo2";
    header1.innerText = "POLLO GARCIA";

    // Crear la imagen
    let img = document.createElement('img');
    img.src = "asesst/logoGIT.png";  
    img.className = "logo-img"; 

    
    header1.appendChild(img);

    return header1;
}

document.body.appendChild(crearHeader());

export {
    crearHeader
}
