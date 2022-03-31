const prompt = require("prompt-sync")({ sigint: true });

/*let edad= 50

if (edad > 0 && edad < 18) {
    console.log("No puede pasar al bar ")
}
else if (edad >= 18 && edad < 21){
    console.log("Puede pasar al bar pero no puede tomar alcohol")
}
else if(edad === 21) {
    console.log("felicitaciones llegaste a ser mayor de edad ahre") 
}
else {
    console.log("Puede pasar al bar y tomar")
}
*/

function totalAPagar(vehiculo, litrosConsumidos){  
 let precioPorLitro= 0;
 if(vehiculo="coche") {
    precioPorLitro=86; 
 }
 else if(vehiculo="moto"){
     precioPorLitro=70;
 }
 else if(vehiculo="autobus"){
     precioPorLitro=55;
 }
if(litrosConsumidos >0 && litrosConsumidos <= 25){
     precioPorLitro= precioPorLitro + 50;
 }
else if(litrosConsumidos >25){
     precioPorLitro= precioPorLitro + 25;
 }
 return precioPorLitro;
}
console.log(totalAPagar("coche", 50));