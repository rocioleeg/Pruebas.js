const prompt = require("prompt-sync")({ sigint: true });

let temperatura = prompt("ingrese la temperatura actual: ");
console.log("la temperatura actual es de " + temperatura);
let estaLloviendo = true;
console.log("esta lloviendo? " + estaLloviendo);
let pisoAsensor = prompt("ingrese el piso en que el que se encuentra: ");
console.log("piso en que el que se encuentra " + pisoAsensor);
let horaActual = prompt("ingrese la hora actual ");
console.log("hora actual " + horaActual);
let horaDeApertura = 17;
console.log("el local abre a las " + horaDeApertura);
let horaDeCierre = 21;
console.log("el local cierra a las " + horaDeCierre);
let cantidadDeQueso = prompt("cuanta cantidad de queso queres? ");
console.log("cantidad de queso deseada: " + cantidadDeQueso);
let precioPorGramo = prompt("ingrese el precio por gramo ")
console.log("precio por gramo es " + precioPorGramo);
let deudaMonica;
