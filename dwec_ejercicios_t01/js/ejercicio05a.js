let x1 = parseInt(prompt("Dime un primer entero: "));
let x2 = parseInt(prompt("Dime un segundo entero: "));
let x3 = parseInt(prompt("Dime un tercer entero: "));
let x4 = parseInt(prompt("Dime un cuarto entero: "));
let x5 = parseInt(prompt("Dime un quinto entero: "));
let total = x1 + x2 + x3 + x4 + x5;
let media = total / 5;

if (x1 > media) {
  alert("El numero " + x1 + " es mayor a la media");
}
if (x2 > media) {
  alert("El numero " + x2 + " es mayor a la media");
}
if (x3 > media) {
  alert("El numero " + x3 + " es mayor a la media");
}
if (x4 > media) {
  alert("El numero " + x4 + " es mayor a la media");
}
if (x5 > media) {
  alert("El numero " + x5 + " es mayor a la media");
} else {
  alert("Ningun numero es mayor que la media");
}
