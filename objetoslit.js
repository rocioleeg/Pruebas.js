/*let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadHoras){
       paraSumar = cantidadHoras * 2;
       this.experiencia = this.experiencia + paraSumar;
       paraResta = cantidadHoras * 5;
       this.energia = this.energia - paraResta;
       return this.energia;
       return this.experiencia;

    }
};
console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+ deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

*/



let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadHoras){
        return (cantidadHoras * 5) - this.energia;
        return (cantidadHoras * 2) + this.experiencia;

    }
};
console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);