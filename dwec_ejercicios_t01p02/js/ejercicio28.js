
fecha = prompt(
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
    let hoy = new Date();
    let year2;
    let day = parseInt(fechaParts[0]);
    let month = parseInt(fechaParts[1]);
    let year = parseInt(fechaParts[2]);
    let cumple = new Date(year, (month-1), day);
    let edad = hoy.getFullYear() - year;
    if(hoy.getMonth() == cumple.getMonth() && hoy.getDate() == cumple.getDate() ){
        console.log("Felicidades hoy es tu cumpleaños, hoy cumples: " + edad)
    }
    if(hoy.getMonth() > cumple.getMonth()){
        year2 = hoy.getFullYear() + 1
        let fechaAyda = new Date(year2, (month-1), day)
        let calc;
        calc = (fechaAyda - hoy)
        let total = Math.round(calc/(1000*60*60*24))

    console.log(total)
    }else if(hoy.getMonth() < cumple.getMonth()){
        year2 = hoy.getFullYear()
        let fechaAyda = new Date(year2, (month-1), day)
        let calc;
        calc = (fechaAyda - hoy)
        let total = Math.round(calc/(1000*60*60*24))
        console.log(total)
    }
    if (hoy.getMonth() == cumple.getMonth()){
        if(hoy.getDate() < cumple.getDate()){
            year2 = hoy.getFullYear() 
            let fechaAyda = new Date(year2, (month-1), day)
            let calc;
            calc = (fechaAyda - hoy)
            let total = Math.round(calc/(1000*60*60*24))
            console.log(total)
        }else if(hoy.getDate() > cumple.getDate()){
            year2 = hoy.getFullYear() + 1
            let fechaAyda = new Date(year2, (month-1), day)
            let calc;
            calc = (fechaAyda - hoy)
            let total = Math.round(calc/(1000*60*60*24))
            console.log(total)
        }
    }
}


}