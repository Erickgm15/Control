import{ guardarProducto, obtenerProductos } from '../../Control/miLocalStorage.js'

export function nav() {
  let menu = document.createElement('div');
  menu.className = "menu";

  // Home
  let homeDiv = document.createElement('div');
  homeDiv.className = "menu-item";
  let homeImg = document.createElement('img');
  homeImg.src = "assets/home.png"; 
  homeImg.alt = "home";
  homeDiv.appendChild(homeImg);
  menu.appendChild(homeDiv);

  // Products
  let productsDiv = document.createElement('div');
  productsDiv.className = "menu-item";
  let productsImg = document.createElement('img');
  productsImg.src = "assets/box.png";
  productsImg.alt = "products";
  productsDiv.appendChild(productsImg);
  menu.appendChild(productsDiv);

  // Help
  let helpDiv = document.createElement('div');
  helpDiv.className = "menu-item";
  let helpImg = document.createElement('img');
  helpImg.src = "assets/help.png";
  helpImg.alt = "help";
  helpDiv.appendChild(helpImg);
  menu.appendChild(helpDiv); 

  // Cart
  let cartDiv = document.createElement('a');
  cartDiv.className = "menu-item";
  cartDiv.href = "Components/pages/carrito.html"
  let cartImg = document.createElement('img');
  cartImg.src = "assets/cart.png";
  cartImg.alt = "cart";
  cartDiv.appendChild(cartImg);

  let divItem = document.createElement('div');

  // cuanos elemtos ha en el carrito de compras
  let totalCarrito = obtenerProductos();

  divItem.textContent = totalCarrito.length;

  divItem.className = "item-count";

 
  
  if(obtenerProductos()!=""){
    cartDiv.appendChild(divItem);

  }

  menu.appendChild(cartDiv);

  return menu; 
}
