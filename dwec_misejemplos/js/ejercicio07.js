function calcular_menor(num1, num2) {
    return (num1 < num2) ? num1 : num2;
}

// Función principal
function mostrarNumerosEntre() {
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));

    let menor = calcular_menor(num1, num2);
    let mayor = (num1 === menor) ? num2 : num1;

    let numerosEntre = [];
    for (let i = menor + 1; i < mayor; i++) {
        numerosEntre.push(i);
    }

    console.log(`El menor número es: ${menor}`);
    console.log(`Los números entre ${menor} y ${mayor} son: ${numerosEntre.join(", ")}`);
    console.log(`Hay ${numerosEntre.length} números entre ${menor} y ${mayor}.`);
}

// Llamar a la función principal
mostrarNumerosEntre();