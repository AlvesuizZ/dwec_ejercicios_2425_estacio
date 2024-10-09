x = parseInt(prompt("Dime un primer entero: "))
x2 = parseInt(prompt("Dime un segundo entero: "))
x3 = parseInt(prompt("Dime un tercer entero: "))
x4 = parseInt(prompt("Dime un cuarto entero: "))
x5 = parseInt(prompt("Dime un quinto entero: "))
const total = (x + x2 + x3 + x4 + x5)
const media = total / 5;

if(x > media){
    alert('El numero ' + x + " es mayor a la media")
}else if(x2 > media){
    alert('El numero ' + x2 + " es mayor a la media")
}else if(x3 > media){
    alert('El numero ' + x3 + " es mayor a la media")
}else if(x4 > media){
    alert('El numero ' + x4 + " es mayor a la media")
}else if(x5 > media){
    alert('El numero ' + x5 + " es mayor a la media")
    
}else{
    alert("Ningun numero es mayor que la media")
}