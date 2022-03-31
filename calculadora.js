const prompt = require("prompt-sync")({ sigint: true });

// Sumar
/*
function suma(num1, num2){
 num1 = parseInt(prompt("Ingrese un numero: "));
 num2 = parseInt(prompt("Ingrese otro numero: ")); 

let suma= num1 + num2;

return("la sumas es: " + suma);
}


console.log(calc());
*/



// Restar
function resta(num1, num2){
    num1 = parseInt(prompt("ingrese un numero a restar: "))
    num2 = parseInt(prompt("ingrese otr numero a restar: "))
    let resta = num1 - num2;

    return "la resta de los numeros es: " + resta;
}

console.log(resta());

// Multiplicacion

function multiplicacion(num1, num2){
    num1 = parseInt(prompt("ingrese un numero a multiplicar: "))
    num2 = parseInt(prompt("ingrese otr numero a multiplicar: "))
    let mult = num1 * num2;

    return "la multiplicar de los numeros es: " + mult;
}

console.log(multiplicacion());

// Numero al cuadrado
function cuadradoDeUnNum(num1){
    num1 = parseInt(prompt("ingrese un numero: "))
    let alCuadrado = num1 * 2;
    return "el cuadrado del numero es: " + alCuadrado;
}
let cuadrado = cuadradoDeUnNum;

console.log(cuadradoDeUnNum());