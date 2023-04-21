function CalcularPuntuaje(arr){
    let resultado = 0;
    let valores = "";
    arr.forEach((val) => {
        if(val % 2 === 0){
            resultado += 2;
        }
        else if(val === 5){
            resultado += 3;
        }
        else if(val !== 7){
            resultado += 1;
        }
        valores += val;
    })
    console.log(`Entrada: [${arr}]  👉  ${resultado}`);
    return resultado;
}



const arr1 = [1,2,3,4,5];
const arr2 = [17,19,21];
const arr3 = [5,5,5];
CalcularPuntuaje(arr1)
CalcularPuntuaje(arr2)
CalcularPuntuaje(arr3)
