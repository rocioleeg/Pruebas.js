const prompt = require("prompt-sync")({ sigint: true });

function localSandwich(sandwichBase,tipoDePan,queso,tomate,lechuga,cebolla,mayonesa,mostaza){
    let precio = null;
    switch (sandwichBase) {
        case "pollo":
            precio = 150;
            break;
        case "carne":
            precio = 200;
            break;
        case "veggie":
            precio = 100;
            break;
         
    }

    switch (tipoDePan){
        case "blanco":
            precio = precio + 50;
            break;
        case "negro":
            precio = precio + 60;
            break;
        case "s/gluten":
            precio = precio + 75;
            break;

    }

    if (queso) precio = precio + 20;
    if (tomate) precio = precio + 15;
    if (lechuga) precio = precio + 10;
    if (cebolla) precio = precio + 15;
    if (mayonesa) precio = precio + 5;
    if (mostaza) precio = precio + 5;

    return precio;
    

}

console.log(localSandwich("pollo", "blanco",true,true,true,true,true,true));