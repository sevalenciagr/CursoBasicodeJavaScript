var jp;
var cpu;
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function juego (jp, cpu) {
    switch (true) {
        case jp == cpu:
            console.log("Empate");
            break;
        case jp == piedra && cpu == tijera ||  jp == papel && cpu == piedra || jp == tijera && cpu == papel:
            console.log("Gana JP");
            break;
        case jp == piedra && cpu == papel || jp == papel && cpu == tijera || jp == tijera && cpu == piedra:
            console.log("Pierde JP");
            break;
        default:
            console.log("Ingresa un valor valido");
    }
}