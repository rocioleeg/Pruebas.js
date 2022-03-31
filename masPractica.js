
/*Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades.
*/


let edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

let edadesMenores = [];
let edadesMayores = [];
let edadesIguales = [];

/*

function calculoEdades(array){
    for(let i = 0 ; i< array.length; i++){
        if(array[i] < 18){
         edadesMenores.push(array[i]);
        }
        
    }
    return edadesMenores;
}
console.log(calculoEdades(edades));

function calculoEdadesMenores(array){
    for(let i=0 ; i<array.length; i++){
        if(array[i] >= 18){
            edadesMayores.push(array[i])
        }
    }
    return edadesMayores;
}
console.log(calculoEdadesMenores(edades));

function calculoEdadesIguales(array){
    for(let i=0; i<array.length; i++){
        if(array[i] == 18){
            edadesIguales.push(array[i])
        }
    }
    return edadesIguales;
}
console.log(calculoEdadesIguales(edades));

*/

//Otra forma de resolverlo
/*
function calculoEdades(array){
    let resultado = 0;
    for(let i = 0 ; i< array.length; i++){
        if(array[i] < 18){
         resultado = edadesMenores.push(array[i]);
         
        }
        else if(array[i] > 18){
            resultado = edadesMayores.push(array[i]);
            
        }
        else if(array[i] === 18){
            resultado = edadesIguales.push(array[i]);
        }
    
        
    }
   
}
console.log(calculoEdades(edades));
console.log(edadesMayores);
console.log(edadesMenores);
console.log(edadesIguales);
*/





/*
Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
Obtener la cuenta con el titular de la misma más joven.
Obtener un nuevo array por cada tipo de cuenta.
Obtener un nuevo array con las cuentas habilitadas.
Obtener un nuevo array con las cuentas deshabilitadas.
Obtener la cuenta con el menor saldo.
Obtener la cuenta con el mayor saldo.
*/

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 1408.68,
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]






  function clientesMenores(array){
    let cuentasEdadesMenores= [];
   for(let i=0; i<array.length; i++){
       if(array[i].edadTitular < 30){
          cuentasEdadesMenores.push(array[i]);
       }

   }
      return cuentasEdadesMenores;
  }
 
  let resultadoClientesMenores = clientesMenores(arrayCuentas);
  //console.log(resultadoClientesMenores);


  function clientesMayoresOIgual(array){
    let cuentasMayorIgual = [];
      for(let i = 0; i<array.length; i++){
          if(array[i].edadTitular >= 30){
            cuentasMayorIgual.push(array[i]);
          }
      }
      return cuentasMayorIgual;
  }
  let resultaoClientesMayoresIguales = clientesMayoresOIgual(arrayCuentas);
  //console.log(resultaoClientesMayoresIguales);


  function clientesIgual(array){
    let cuentasIgual = [];
      for(let i = 0; i<array.length; i++){
          if(array[i].edadTitular == 30){
              cuentasIgual.push(array[i]);
          }
      }
      return cuentasIgual;
  }
  let resultadoClienteIgual = clientesIgual(arrayCuentas);
  //console.log(resultadoClienteIgual);




 function cuentaMenor(array){
     let resultado ={};
    let min = array[0].edadTitular;
     for(let i = 0; i<array.length; i++){
         if(array[i].edadTitular < min){
             resultado = array[i];
         }
                
     }
    return resultado;
     
 }
 //console.log(cuentaMenor(arrayCuentas));

 
 function cuentaMayor(array){
    let resultado ={};
   let may = array[0].edadTitular;
    for(let i = 0; i<array.length; i++){
        if(array[i].edadTitular > may){
            resultado2 = array[i];
        }
               
    }
   return resultado2;
    
}
//console.log(cuentaMayor(arrayCuentas));



function cuentasHabilitadas(array){
    let habilitadasLasCuentas = [];
    for(let i=0; i<array.length; i++){
        if(array[i].estaHabilitada == true){
            habilitadasLasCuentas.push(array[i]);
        }
    }
    return habilitadasLasCuentas;
        
}
//console.log(cuentasHabilitadas(arrayCuentas))



function menorSaldo(array){
    let resultado = {};
    let menorS= array[0].saldo;

    for(let i=0; i<array.length;i++){
        if(array[i].saldo < menorS){
            resultado = array[i];

        }
    }
    return resultado;
}
console.log(menorSaldo(arrayCuentas));