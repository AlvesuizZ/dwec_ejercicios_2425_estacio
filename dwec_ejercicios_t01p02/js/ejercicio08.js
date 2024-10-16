let matriz1 = [[1,2,3],[1,2,3],[1,2,3]]
let matriz2 = [[1,2,3],[1,2,3],[1,2,3]]

function comprobar(matriz1, matriz2){
    if(matriz1.length !== matriz2.length) {
        return false;
    }

    for(let i = 0; i < matriz1.length; i++){
        if (matriz1[i].length !== matriz2[i].length){
            return false;
        }
    }

    return true;
}


function sumar(matriz1, matriz2){
    if(!comprobar(matriz1, matriz2)){
        console.log("NO son sumables")
        return null;
    }

    let sumTotal = [];
    let fila = [];
    for (let i=0; i<matriz1.length; i++){
        for(let y=0; y<matriz1[i].length; y++){
            fila.push(matriz1[i][y] + matriz2[i][y]);
        }

        sumTotal.push(fila)
    }

    return sumTotal
}

function app(matriz1, matriz2){

    if (comprobar(matriz1, matriz2)){
        let suma = sumar(matriz1, matriz2)
        console.log(`La suma de las matrices es de: ${suma}`)
    }else{
        console.log("Las matrices no se pueden sumar")
    }
}

app(matriz1, matriz2);