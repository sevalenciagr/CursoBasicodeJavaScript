//Metodos para recorrer arreglos

//Lista de articulos con su precio

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

//Primer metodo FILTER

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// Segundo metodo MAP

var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre
});

// Tercer metodo FIND

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

// Cuarto metodo ForEach regresa los nombres de los articulos o cualquier propiedad del objeto

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Quinto metodo SOME regresa una validacion de verdadero o falso para articulos que cumplan

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700; //Existen articulos que su costo es menoro igual a 700?
})