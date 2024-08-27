let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let estatura = parseFloat(prompt("Ingrese su estatura (metros)"));
let peso = parseFloat(prompt("Ingrese su peso"));

let indice = peso/(estatura*estatura);
console.log(indice);


if(indice <= 18.5){
    console.log(nombre + " El IMC indica bajo peso.");
}
else if (indice <= 24.9){
    console.log(nombre + " El IMC indica peso normal c:");
}
else if (indice <= 29.9){
    console.log(nombre + " El IMC indica peso superior a lo normal.");
}
else{
    console.log(nombre + " El IMC indica obesidad, cuidese c:");
}