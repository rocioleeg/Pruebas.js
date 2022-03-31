const prompt = require("prompt-sync")({ sigint: true });



// 1 Ejercicio de Pulgadas a Centimetros:

function conversionPulgadas(pulgadas){
    let centimetros = 2.54;
    return (pulgadas * centimetros);
}
let pulgadas = prompt("ingrese el num de pulgadas: ");
console.log(conversionPulgadas(pulgadas));




// 2 Ejercicio para indicar qué nombre quiero de URL:

function url(string){
    let conversionUrl = "hhtp://www.";
    let com = ".com";

    return (conversionUrl + string + com);
}

let indiqueNameDeUrl = prompt("Indique el nombre a poner en la URL: ");
console.log(url(indiqueNameDeUrl));



// 3 Ejercicio devolver string con !!

function signoAdmiracion(string){
   let admiracion = "!!!!!";
   return string + admiracion;
}
let mensaje = prompt("indique un mensaje: ");
console.log(signoAdmiracion(mensaje));




// 4 Ejercicio Calular Edad de tu Perro:

function calculoEdadPerros(edad){
    let edadHumana = 7;
    return (edadHumana * edad);
}
let edadPerro = prompt("ingrese edad de su perro: ");
console.log(calculoEdadPerros(edadPerro));


// 5 Ejercicio Calcula sueldo por hora

function calculoSueldoXHora(sueldo){
    let hora = 40;
    return sueldo / hora;
}


let ingreseSueldo = prompt("ingrese su sueldo neto: ");
console.log(calculoSueldoXHora(ingreseSueldo));