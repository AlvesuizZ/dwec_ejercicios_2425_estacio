function calcularFactorialNoRecuersivo(n) {
    if (n < 0) {
        return "Solo se puede calcular en número positivos.";
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

function calcularFactorialRecursivo(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    } else if (n === 0 || n === 1) {
        // ! === Si queremos asegurar que no hay conversiones automáticas. 1 === "1"; False
        // ! == Si queremos asegurar que no hay conversiones automáticas.  1 == "1"; False
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}

// Ejemplo de uso:
let numero = parseInt(prompt("Introduce un número para calcular su factorial:"));
let resultado = calcularFactorialNoRecuersivo(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);
