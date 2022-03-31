const prompt = require("prompt-sync")({ sigint: true });


/*Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario
ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”.
*/

/*function anioNacimiento(anio){
    let edad = 2022 - anio;
    return edad;
}

let anio = parseInt(prompt("Ingrese su año de nacimiento: "));
console.log(anioNacimiento(anio));*/


/*Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.
*/

function numeroNatural (num){
    let minimo= null;
    if (num < 10){
       let minimo= 10 - num;
    }
    else if( num < 99){
        let minimo= 99 - num;
    }

    else {
        return 'Se ingresó un numero invalido'
    }
    return minimo

}

