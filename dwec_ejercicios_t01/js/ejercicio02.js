//TODO Cerrar con ;
//TODO español o inglés
const pedirYear = () => {
  let year = parseInt(prompt("Introduce el año para comprobar si es bisiesto"));
  
  // if (isNaN(year) || year < 0 || year > new Date().getFullYear()) {
  if(year < 0 || year > new Date().getFullYear()) {
    return null;
  }
  return year;
}

// ! espacios entre operadores
const comprobarBisiesto = (year) => {
  if( ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ){
    //alert("Bisiesto");
    return true;
  }else{
    //alert("No Bisiesto");
    return false;
  }
}

/*
const comprobarBisiesto = (year) => {
  return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
}
*/

let year = pedirYear();
// ! Parámetro de entrada --> comprobarBisiesto()

// TODO 
if(year !== null) {
  // ! Parámetro de entrada
  // ! Conflicto entre parámetros devueltos por la función.
  if(comprobarBisiesto(year)){
    alert("Bisiesto")
  }else{
    alert("No Bisiesto")
  }
} else {
  alert("El año introducido no es válido.");
}

/** TEST: 
 * 2000: SÍ (divisible por 100 y por 400)
 * 1900: NO
 * 2024: SÍ
*/