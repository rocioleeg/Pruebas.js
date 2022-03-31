const prompt = require("prompt-sync")({ sigint: true });
/*
function totalAPagar (vehiculo, litrosConsumidos) {
    
    if(vehiculo="coche" && litrosConsumidos <=25){
    let precioLitro = 86 * litrosConsumidos;
    
    return precioLitro + 50;
}
    else if(vehiculo="moto")
}
console.log(totalAPagar("coche", 26));
*/

//Ejercicio Pablo

//const prompt = require("prompt-sync")({ sigint: true });

function totalAPagar(vehiculo,litrosConsumidos){
    let totalPago=null;
    switch (vehiculo) {
        case "coche":
            totalPago=86;
            break;
        case "moto":
            totalPago=70;
            break;
        case "autobús":
            totalPago=55;
        default:
            break;
    }
    if (litrosConsumidos>0 && litrosConsumidos<=25){
        totalPago=(totalPago*litrosConsumidos)+50;
    }
    else if (litrosConsumidos>25){
        totalPago=(totalPago*litrosConsumidos)+25;
    }
return totalPago;
}
console.log(totalAPagar("coche",45));
