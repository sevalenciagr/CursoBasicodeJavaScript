//Condicional IF

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación");
} else if ( edad > 18) {
    console.log("Puedes votar de nuevo");
}else {
    console.log("Aun no puedes votar");
}

var numero = 2;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";