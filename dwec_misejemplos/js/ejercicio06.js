function pedirNumeros() {
    let num1, num2;

    do {
        alert("Ingresa numeros hasta que estos sean iguales o uno de ellos sea 0")
        num1 = parseInt(prompt("Ingresa el primer número:"));
        num2 = parseInt(prompt("Ingresa el segundo número:"));

        // Verificar si se deben detener las solicitudes
        if (num1 === num2 || num1 === 0 || num2 === 0) {
            console.log("Se detiene la ejecución.");
            break;
        } else {
            console.log(`Pareja ingresada: (${num1}, ${num2})`);
        }
    } while (true);
}

// Llamar a la función
pedirNumeros();