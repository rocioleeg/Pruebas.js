

//Loop de pares

//Deberás crear una función llamada loopDePares que reciba como parámetro un número
// y haga un loop de 0 a 100 mostrando en la consola cada número del loop.
// En caso de que el número de la iteración sumado con el número pasado por parámetro sea par,
// mostrará en la consola: “El número X es par”.

function loopDePares(num) {

    let resultado = 0;

    for (let i = 0; i <= 100; i++) {

    
        resultado = i + num;
        //console.log(i);
        console.log(resultado);

        if (resultado % 2 == 0) {
            console.log("El numero " + resultado + " es par.");
        }
        else{
            console.log("el numero es impar");
        }


    }
}

//console.log(loopDePares(2));


/*
Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, 
y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

*/

function loopDeImpares(numero,palabra){
    let sumatoria = null;

    for(let i=0 ; i <=20 ; i++){
        sumatoria = numero + i;
        console.log(sumatoria);

        if (sumatoria % 2 != 0){
         console.log(palabra);
        }
        else {
            console.log("es par");
        }
    }

}
//console.log(loopDeImpares(3,"holi"));


/*Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
sumatoria(3) debe retornar 6 porque hace (1+2+3)
*/

function sumatoria (numero){
    let suma = null;

    for(let i=0; i<=numero; i++){
        suma = suma + i;
        
    }
    return suma;
}
//console.log(sumatoria(8));

/*Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro
 y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
*/

function nuevoArreglo(numero){
    let array = []
    let resultado = 0;
    for(let i=1; i<=numero; i++){

         array.push(i);
         
         resultado = array;
    }

    return resultado;

    }

let resultado = nuevoArreglo(5);
//console.log(resultado);



// ejemplo de como agregar objetos al array
/*
let perro = {
    nombre: 'ceviche',
    edad: "canina",
    año: 3,
}
    let array = [];
    
    array.push(perro);
    console.log(array);

*/


/*

Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. 
Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split()
*/


function split (string){
    let array = [];

    for( let i = 0 ; i <string.length ; i++){
       array.push(string[i]);
    }
    return array;
}

console.log(split("holaaaaaaaa"));





