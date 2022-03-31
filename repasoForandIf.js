const prompt = require("prompt-sync")({ sigint: true });

/*
function numero(){
    
    for(let i = 0  ; i <100 ; i++)
    console.log(i); 
}
numero();

*/


//ejercicio 3 integracion
/*
function ingresa (numero1,numero2){
  
  return numero1 + numero2;
}
let numero1 = parseInt(prompt("ingresa un numero bro: "));
let numero2 = parseInt(prompt("ingresa otro numero plis: "));

let resultado = ingresa(numero1,numero2);

//console.log(resultado);

*/

// Ejercicio 5 integracion 
/*
function numPares(){
    for(i = 0 ; i <=100 ; i+=2){
        console.log(i);
    }

}
numPares();
*/

// Ejercicio 6 integracion

/*
function names (){  
    const nombres = ["pedro","pablo","maria","juan","daiana"];
    for(i = 0 ;  i <= nombres.length - 1; i++){
        console.log(nombres[i]);
    }
}
names();
*/



// Ejercicio 7 integracion pseudocodigo

/*
function pseudocodigo (numero){
    if(numero >= 500){  
        return (numero * 18) / 100; 
      }
    }
    
console.log(pseudocodigo());
*/


// Ejercicio 4 año de nacimiento
/*
function edadXNacimiento(anio){
  
    let resultado = 2022 - anio;
    console.log("su edad es " + resultado);
}
let edad = prompt("ingrese su año de nacimiento: ");
let resultadoEdadVsAnio = edadXNacimiento(edad);
console.log(resultadoEdadVsAnio);

*/




//Ejercicio 9 Array 

/*
function elementos(arreglo){

if(arreglo.length > 3){
    return -1;
}
else{
    return arreglo[2];
}
}

let arreglitoo = ["rocio","lee",22,"hola"];
let elementoArreglo = elementos(arreglitoo);

console.log(elementoArreglo);
*/





//Ejercicio 11 promedio notas
/*
function notasPromedio (n1,n2,n3){
    let promedio = (n1 + n2 + n3)/3;
    return promedio;
}
let nota1 = parseInt(prompt("indica nota 1: "));
let nota2 = parseInt(prompt("indica nota 2: "));
let nota3 = parseInt(prompt("indica nota 3: "));

let notaFinal = notasPromedio(nota1,nota2,nota3);

console.log(notaFinal);
*/

/* ejericio 10 Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.*/

function ingresoNumero(numero){
    let suma = 0;
    if(numero < 10){
        suma = 10 - numero ;
        console.log( "te falta para llegar a dos cifras: " + suma);
        
    }
    else if(numero >= 10 && numero <=99){
        suma = 100 - numero;
        console.log("te falta para llegar a tres cifras: " + suma);
    }
    return suma;
}

let resultadoFinal = ingresoNumero(10);
console.log(resultadoFinal);