const prompt = require("prompt-sync")({ sigint: true });

let estudiantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: "Alexis",
        promedio : 3,
        curso : 'iOS',
      },
    ]
let alumnoDeBaja = estudiantes.shift();
console.log(estudiantes);
console.log(alumnoDeBaja);