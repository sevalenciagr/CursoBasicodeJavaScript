var jp;
var cpu;
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";


// Este codigo se puede mejorar organizando los casos en los que gana JP en los que empata y en los que gana CPU, juntos por cada else.
function juego (jp, cpu) {
    if ( jp === piedra && cpu === piedra ) {
        console.log("Empate en piedra");
    }else if ( jp === piedra && cpu === papel) {
        console.log("Gana CPU con papel");
    }else if ( jp === piedra && cpu === tijera) {
        console.log("Gana JP con piedra");
    }else if ( jp === papel && cpu === piedra) {
        console.log("Gana JP con papel");
    }else if ( jp === papel && cpu === papel) {
        console.log("Empate con papel");
    }else if ( jp === papel && cpu === tijera) {
        console.log("Gana CPU con piedra");
    }else if ( jp === tijera && cpu === piedra) {
        console.log("Gana CPU con papel");
    }else if ( jp === tijera && cpu === papel) {
        console.log("Empate JP con tijera");
    }else if ( jp === tijera && cpu === tijera) {
        console.log("Empate con tijera");
    }
}