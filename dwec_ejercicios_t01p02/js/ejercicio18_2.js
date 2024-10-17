function obtenerFecha() {
const date = new Date();
const fecha = prompt(
    "Introduce una fecha (formato: DD-MM-YYYY, DD/MM/YYYY o DD MM YYYY):"
);
let sign = "";
let seguir = true;

if (fecha.includes("/")) {
    sign = "/";
} else if (fecha.includes("-")) {
    sign = "-";
} else if (fecha.includes(" ")) {
    sign = " ";
} else {
    alert("Fecha no valida debido al formato incorrecto");
    seguir = false;
}

if (seguir) {
    let fechaParts = fecha.split(sign);

    if (fechaParts.length !== 3) {
    alert("Formato de fecha inválido");
    } else {
    let day = parseInt(fechaParts[0]);
    let month = parseInt(fechaParts[1]);
    let year = parseInt(fechaParts[2]);
    date.setDate(day + "-" + month + "-" + year)

    let dias = [
        31,
        esBisiesto(year) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];
    
    }
}
}
