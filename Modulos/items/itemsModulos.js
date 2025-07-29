export function item(){
 let item=document.createElement('div');   
 
 let title = document.createElement('h1');
 title.className = "title";
 title.innerText = "Benji";
 item.appendChild(title);

 let img = document.createElement('img')
 img.className = "img1";
img.src ="./assest/benji.jpg"
 item.appendChild(img);

 let text = document.createElement('p');
 text.className = "text";
 text.innerText = "Benji Price es mucho más que un portero: es un símbolo de disciplina, talento y determinación. Desde su debut como rival de Oliver Atom, su arco narrativo lo lleva a crecer como deportista y persona, acompañando a su país en el camino hacia la élite del fútbol mundial.";
 item.appendChild(text);

 item.className="item"
 return item;

}