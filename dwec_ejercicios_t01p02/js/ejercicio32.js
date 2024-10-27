function dateValidator(date){
    const pattern = /^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/](\d{2}|\d{4})$/;
    return pattern.test(date)
}
function esBisiesto(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}


let date = prompt("Introduce una fecha: ")
let sign = ""
let fechaParts
if(dateValidator(date)){
    if (date.includes("/")) {
        sign = "/";
    }else{
        sign = "-";
    }
    let fechaParts = date.split(sign);
    let day = parseInt(fechaParts[0]);
    let month = parseInt(fechaParts[1]);
    let year = parseInt(fechaParts[2]);
    if(esBisiesto(year) && month === 2 && day <=29){
        console.log("La fecha es valida")
    }else if(month === 2 && day >28){
        console.log("La fecha no es valida")
    }else{
        console.log("La fecha introducida es valida")
    }
}else{
    console.log("La fecha no es valida")
}