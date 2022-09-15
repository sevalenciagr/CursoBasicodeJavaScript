//Crear una lista de 30 carros con una funcion constructura y loops

//Inicializo variables

let autos = [];
let cantidadAutos = 0;
let cantidadRegistrados = 0;

//Creo la funcion constructora
function auto (marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// Solicito al usuario cuantos autos va a registrar
cantidadAutos = prompt("Cuantos autos desea registrar");

//Ejecuto un ciclo hasta que cantidadRegistrados sea igual a cantidadAutos

while (cantidadRegistrados < cantidadAutos){
    //Defino variables del scope local
    let marca = prompt("Marca: ");
    let modelo = prompt("Modelo: ");
    let annio = prompt("Año: ")


//Paso las variables de scope local a la funcion constructora

var autoNuevo = new auto(marca, modelo, annio);

//Agrego el auto a mi arreglo de autos
autos.unshift(autoNuevo);

//Incremento la cantidad de autos registrados en 1 
cantidadRegistrados++;
}

//Retorno por consola el arreglo con todos los autos registrados por el usuario
console.log(autos);