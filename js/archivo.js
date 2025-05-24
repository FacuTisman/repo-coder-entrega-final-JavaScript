let arrayBurgas = [];

fetch('./burgas.json')
.then(response => response.json())
.then(data => {
    arrayBurgas = data;
})
.catch(error => console.error('Error al cargar los datos:', error));


let seek;
let indice;
let input = document.getElementById('elegirHamburguesa');
let botonPedir = document.getElementById('guardarHamburguesa');
let nuevoDiv = document.createElement('div');
let botonCarrito = document.getElementById("carrito");
let nuevaListaCarrito = document.createElement('ul');

let carrito = JSON.parse(localStorage.getItem('carrito')) ||[];

function pedirBurga(){
    seek = input.value;
}

function encontrarBurga(){
    indice = arrayBurgas.findIndex(burga => burga.nombre.toLocaleLowerCase() === seek.toLocaleLowerCase());
}

function mostrarHamburguesa(){
    if(indice != -1){
        nuevoDiv.innerHTML = `<p class = "msjCreado"> Gracias por agregar ${seek} a su carrito <p/>`
        document.body.appendChild(nuevoDiv);
    }
    else{

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Esa hamburguesa no existe!"   
        });


    }
}

let precioTotal = 0;

function guardarCarrito(){

    carrito.push({
        nombre: seek,
        precio: arrayBurgas[indice].precio
        })
    
    precioTotal += arrayBurgas[indice].precio;
    localStorage.setItem('carrito',JSON.stringify(carrito))
    
    }

function verCarrito(){
    
    nuevaListaCarrito.innerHTML = 'Carrito: ';
    document.body.appendChild(nuevaListaCarrito);

    for(let i = 0; i< carrito.length;i++){
        let nuevoLiCarrito = document.createElement('li');
        nuevoLiCarrito.innerHTML = `${carrito[i].nombre}`;
        nuevaListaCarrito.appendChild(nuevoLiCarrito); 
    }

    nuevoDiv.innerHTML = `El total a abonar es: ${precioTotal}`;   
    document.body.appendChild(nuevoDiv);

    localStorage.removeItem('carrito');
    carrito = [];
    precioTotal = 0;

    setTimeout(() => {
        nuevaListaCarrito.remove();
        nuevoDiv.remove();
        nuevoLiCarrito.remove();
    }, 3000 )

}

botonPedir.addEventListener("click",()=>{
    pedirBurga();
    encontrarBurga();
    mostrarHamburguesa();
    guardarCarrito();
    input.value = ""; 
    })

botonCarrito.addEventListener("click",()=>{
    verCarrito();
})

