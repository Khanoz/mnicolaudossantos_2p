let texto = "este es un ejemplo para el examen como veran este examen no es complicad oun examen no debera ser complicado a menos que el complicado sea el profesor que haya hecho un examen muy complicado";
const palabras = texto.split(" ");
let frecuencia = {};
let max = -1;
palabras.forEach((palabra) => {
    if(frecuencia[palabra] >= 1){
        frecuencia[palabra] += 1;
    }
    else
    {
        frecuencia[palabra] = 1;
    }
    if(max === -1){
        max = palabra;
    }
    else if(frecuencia[max] < frecuencia[palabra]){
        max = palabra;
    }
});
console.log(max);