function crearHeader() {
    
    // Crear el header
    let header1 = document.createElement('header');
    header1.className = "header1";
    header1.className = "titulo2";
    header1.innerText = "POLLO GARCIA";
    

    // Crear la imagen
    let img = document.createElement('img');
    img.src = "assets/logoGIT.png";  
    img.className = "logo-img"; 




    
    header1.appendChild(img);

    return header1;
}



export {
    crearHeader
}
