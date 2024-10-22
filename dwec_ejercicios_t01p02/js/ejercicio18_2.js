function obtenerdate() {
let day = 30
let month = 2
let year = 2004
let date = new Date(year, month-1, day);
if( date.getFullYear() == year && date.getMonth() == month-1 && date.getDate() == day ) {
    return console.log("true");
} else {
    return console.log("false");
}
    }

obtenerdate();