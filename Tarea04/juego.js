// USUARIO TIENE QUE ADIVINAR
// TIENES 5 VIDAS.

//Math.random() * (max - min) + min;

let vidas = 5;
let adivinanza;
let numeroMaquina;

while(vidas > 0){
    mensaje("VIDAS: " + vidas);

    adivinanza = parseInt(prompt("Adivina un número del 1 al 10."));
    numeroMaquina = generarNumero();
    //console.log(adivinanza);
    
    if(iguales(adivinanza,numeroMaquina)){
        mensaje("Adivinaste!!");
        break;
    }else{
        mensaje("Fallaste :(, el número era: " + numeroMaquina);
        vidas--;
    }

}

mensaje("Fin del juego");

function generarNumero(){
    return Math.floor(Math.random() * (10 - 1) + 1);
}

function iguales(adivinanza,numeroMaquina){
    return adivinanza == numeroMaquina;
}

function mensaje(texto){
    console.log("\n. " + texto + " .\n");
}