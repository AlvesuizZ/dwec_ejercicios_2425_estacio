const comprobarFilasColumnas = (matriz1, matriz2) => {
    if(matriz1.length != matriz2.length) throw new Error("No tienen las mismas filas");

    matriz1.forEach((element, index) => {
        if(matriz2[index].length != matriz1[index].length) throw new Error("No tienen las mismas columnas");
    });
};

const sumarMatrizes = (matriz1, matriz2) => {
    
    comprobarFilasColumnas(matriz1, matriz2);

    let matrizSuma = [];

    for (let filas = 0; filas < matriz1.length; filas++) {

        const filaMatriz1 = matriz1[filas];
        const filaMatriz2 = matriz2[filas];
        
        //SUMAMOS UNA FILA
        matrizSuma.push([]);
        
        //HACER SUMA
        filaMatriz1.forEach((elementoColumna1, index) => {
            const elementoColumna2 = filaMatriz2[index];
            matrizSuma[matrizSuma.length - 1].push(elementoColumna1 + elementoColumna2);
        });

    };

    return matrizSuma;
    
};

const sumarMatrizesTradicional = (matriz1, matriz2) => {
    comprobarFilasColumnas(matriz1, matriz2);  // Intentar la verificación de filas y columnas
    let matrizSuma = [];
    for (let f = 0; f < matriz1.length; f++) {
        matrizSuma[f] = []; // Inicializar una fila vacía en matrizSuma

        for (let c = 0; c < matriz1[f].length; c++) {
            matrizSuma[f][c] = matriz1[f][c] + matriz2[f][c]; // Sumar elementos directamente
        }
    }
    return matrizSuma;
};

let matriz1 = [
    [2,0,1],
    [3,0,0],
    [5,1,1]
];

let matriz2 = [
    [1,0,1],
    [1,2,1],
    [1,1,0]
];

let matriz3 = [
    [1,2,3],
    [1,2,3],
    [1,2,3]
];

try {
    const matrizFinal = sumarMatrizes(matriz1, matriz3);
    console.log(matrizFinal)
} catch (error) {
    console.log(error.message)
};