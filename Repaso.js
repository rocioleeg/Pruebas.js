const prompt = require("prompt-sync")({ sigint: true });

const alicia = [ 10, 80, 75 ];
const bob = [ 10, 80, 75];

function encontrarGanador (a, b){
    let totalPuntosAlicia = null;
    let totalPuntosBob = null;

for (let i = 0; i < a.length; i++) {
 
    if(a[i] > b[i]){
        totalPuntosAlicia = totalPuntosAlicia + 1;
    }
    else if( a[i] < b[i]){
        totalPuntosBob = totalPuntosBob + 1;
    }

}

    if(totalPuntosAlicia > totalPuntosBob){
        return 'Alicia ganó';
    }
    else if(totalPuntosBob > totalPuntosAlicia){
        return 'Bob ganó';
    }
    else{
        return 'que se realice un nuevo consurso';
    }

}

let ganador = encontrarGanador(alicia, bob);

console.log(ganador);