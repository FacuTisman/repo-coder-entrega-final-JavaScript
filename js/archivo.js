let arrayBurgas = [];

arrayBurgas.push({
    nombre: "La Bestia",
    precio: 10000
});

arrayBurgas.push({
    nombre: "Fuego Ahumado",
    precio: 19000
});

arrayBurgas.push({
    nombre: "La Criolla",
    precio: 18000
});

arrayBurgas.push({
    nombre: "Big Melt",
    precio: 17000
});

arrayBurgas.push({
    nombre: "la Big Picante",
    precio: 16000
});

arrayBurgas.push({
    nombre: "La Titan",
    precio: 15000
});

arrayBurgas.push({
    nombre: "Inferno Smash",
    precio: 14000
});

arrayBurgas.push({
    nombre: "La Granjera",
    precio: 13000
});

arrayBurgas.push({
    nombre: "El Queso Loco",
    precio: 12000
});

arrayBurgas.push({
    nombre: "La Montañesa",
    precio: 11000
});

// for(let i = 0; i < arrayBurgas.length; i++){
//     console.log(arrayBurgas[i]);
// }

let seek;
let indice;
let input = document.getElementById('elegirHamburguesa');
let boton = document.getElementById('guardarHamburguesa');
let nuevoDiv = document.createElement('div');

function pedirBurga(){

    seek = input.value;

}

function encontrarBurga(){
    indice = arrayBurgas.findIndex(burga => burga.nombre.toLocaleLowerCase() === seek.toLocaleLowerCase());
}

function mostrarPrecio(){
    if(indice != -1){
        nuevoDiv.innerHTML = `<p class = "msjCreado"> Gracias por comprar ${seek} el total a abonar es:  ${arrayBurgas[indice].precio} <p/>`
        document.body.appendChild(nuevoDiv);
    }
    else{
        alert('Esa hamburguesa no exixtse, elija otra.');
    }
}


boton.addEventListener("click",()=>{
pedirBurga();
encontrarBurga();
mostrarPrecio();
})






// console.log(indice);
// switch(seek){
//     case "La Bestia": confirm('El total de su compra es: ')
// }