
const nombres = ["Ana", "Sergio", "Ana"];
const tlf = ["123456789", "987654321", "555555555"];

function buscarTelefonoPorNombre(nombre) {
    let tlFind = [];
    
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].toLowerCase() === nombre.toLowerCase()) {
            tlFind.push(tlf[i]);
        }
    }
    
    if (tlFind.length === 0) {
        console.log("No se encontró a la persona.");
    } else if (tlFind.length === 1) {
        console.log(`El teléfono de ${nombre} es: ${tlFind[0]}`);
    } else {
        console.log(`Se encontraron varias personas con el nombre ${nombre}. Los teléfonos son:`);
        tlFind.forEach((telefono, index) => {
            console.log(`Teléfono ${index + 1}: ${telefono}`);
        });
    }
}

let searchName = prompt("Introduce el nombre de la persona para buscar su teléfono:");

buscarTelefonoPorNombre(searchName);
