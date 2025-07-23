function crearHeader() {

    // Titulo del header

    let header1 = document.createElement('header');
    header1.className = "titulo2";
    header1.innerText = "POLLO GARCIA";

    // Div para el logo
    
    let div = document.createElement('div');
    div.className = "divc";

    header1.appendChild(div); 

    return header1;
}

document.body.appendChild(crearHeader());

export {
    crearHeader
}
