// let foto1btn = document.getElementById("primerob");
// let foto2btn = document.getElementById("segundob");
// let foto3btn = document.getElementById("tercerob");
// let imgchange = document.getElementById("imgchange");
// let bandera = true;

// function cambio1() {
//     imgchange.scr = "../imagenes/principal.png";
// }

// foto2btn.onclick = function() {
//     imgchange.scr = "../imagenes/2.jpg";
// }

// foto3btn.onclick = function() {
//     imgchange.scr = "../imagenes/3.png";
// }

// foto1btn.addEventListener("click",cambio1);

// function cambio1() {
//     document.getElementById("fotito").src="../imagenes/alaacarta/1.png";
// }

// function cambio2() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/2.png";
// }


// function cambio3() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/3.png";
// }

// function cambio4() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/4.png";
// }

// function cambio5() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/5.png";
// }

// function cambio6() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/6.png";
// }

// function cambio7() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/7.png";
// }

// function cambio8() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/8.png";
// }

// function cambio9() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/9.png";
// }

// function cambio10() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/tenegro.png";
// }

// function cambio11() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/teverde.png";
// }

// function cambio12() {
//     document.getElementById("fotito").src="/imagenes/alaacarta/malteada.png";
// }


let idNumber = 1;
let items = 0;
let precio = 0;
let precioFinal = 0;
let carrito = [];
const productos = [
	{
		nombre: "Sushi",
		precio: 3500
	},
	{
		nombre: "pan con relleno de frijol",
		precio: 2500
	},
	{
		nombre: "Croquetas de pescado",
		precio: 520
	},
	{
		nombre: "Ceviche",
		precio: 1400
	},
	{
		nombre: "Arroz Mixto",
		precio: 5000
	},
	{
		nombre: "Camarones Al Ajillo",
		precio: 8000
	},
	{
		nombre: "Mochiss",
		precio: 3000
	},
	{
		nombre: "Pastel de Luna",
		precio: 2500
	},
	{
		nombre: "Macarrones",
		precio: 6000
	},
	{
		nombre: "Té Negro",
		precio: 2500
	},
	{
		nombre: "Té Verde",
		precio: 2800
	},
	{
		nombre: "Malteada de Galletas",
		precio: 3000
	},
	
];


function addItem(e){
	if (!(e.target.classList.contains (`locked`))){
		carrito.push(productos[e.target.value].precio);
		precio += productos[e.target.value].precio;
		lockItem(e);
		addToCart(e);
		addPrecio(e);
		removeAlert();
		idNumber += 1;
	}
}	


function lockItem(e){
	e.target.innerText = "added";
	e.target.classList.toggle(`locked`);
}


function addToCart(e){
	var item = document.createElement("li");
	item.setAttribute("id", `item-${idNumber}`);
	item.setAttribute("onclick", "deleteItem(this.id)");
	var img = document.createElement("img");
	img.setAttribute("src", `https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png`);
	img.setAttribute("class", `x`);
	item.appendChild(img);
	var contenido = document.createTextNode(productos[e.target.value].nombre);
	item.appendChild(contenido);
	document.getElementById(`cart-items`).appendChild(item);
	var price = document.createElement("li");
	price.setAttribute("id", `item-${idNumber}-price`);
	var number = document.createTextNode(`¢${productos[e.target.value].precio}`);
	price.appendChild(number);
	document.getElementById(`cart-prices`).appendChild(price);
}


function addPrecio(e){
	document.getElementById(`total`).innerText = `TOTAL: ¢${precio}`;
}


function removeAlert(){
	if (items == 0){
		document.getElementById(`alert`).innerText = "";
	}
}


function deleteItem(clickedId){
	const itemToDeleteA = document.getElementById(`${clickedId}`);
	const itemToDeleteB = document.getElementById(`${clickedId}-price`);
    const fatherA = document.getElementById('cart-items');
    const fatherB = document.getElementById('cart-prices');
    fatherA.removeChild(itemToDeleteA);
    fatherB.removeChild(itemToDeleteB);
}


function preschino(){
	if(precio > 0){
		document.getElementById(`precio-final`).classList.remove(`hidden`);
		document.getElementById(`cart`).classList.add(`hidden`);
		calculoPrecio();
	}
}


function calculoPrecio(){
	for(i=0; i< carrito.length; i++){
		precioFinal = precioFinal + carrito[i];
	}
	mostrarPrecioFinal();
}


function mostrarPrecioFinal(){
	var finalPrecio = document.createElement("p");
	var finalNumber = document.createTextNode(`¢${precioFinal}`);
	finalPrecio.appendChild(finalNumber);
	document.getElementById(`precio-final`).appendChild(finalPrecio);
}





