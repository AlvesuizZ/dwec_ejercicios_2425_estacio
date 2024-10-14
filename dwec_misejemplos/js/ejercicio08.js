
function mult2(num) {
    return num % 2 === 0;
}

function mult3(num) {
    return num % 3 === 0;
}

function mult5(num) {
    return num % 5 === 0;
}

function mostrarMenu() {
    let numero = parseInt(prompt("Ingresa un número:"));
    let opcion;

    do {
        opcion = parseInt(prompt(
            "Menú\n----\n" +
            "1. Calcular si es múltiplo de 2.\n" +
            "2. Calcular si es múltiplo de 3.\n" +
            "3. Calcular si es múltiplo de 5.\n" +
            "0. Salir\n" +
            "Elige una opción:"));

        switch(opcion) {
            case 1:
                if (mult2(numero)) {
                    console.log(`${numero} es múltiplo de 2.`);
                } else {
                    console.log(`${numero} no es múltiplo de 2.`);
                }
                break;
            case 2:
                if (mult3(numero)) {
                    console.log(`${numero} es múltiplo de 3.`);
                } else {
                    console.log(`${numero} no es múltiplo de 3.`);
                }
                break;
            case 3:
                if (mult5(numero)) {
                    console.log(`${numero} es múltiplo de 5.`);
                } else {
                    console.log(`${numero} no es múltiplo de 5.`);
                }
                break;
            case 0:
                console.log("Saliendo del programa.");
                break;
            default:
                console.log("Opción no valida inténtalo de nuevo.");
        }
    } while (opcion !== 0);
}

mostrarMenu();