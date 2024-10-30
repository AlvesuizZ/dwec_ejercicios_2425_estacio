console.log("T0X - Ejercicio 01");

function funcionPrueba1() {
    let alumno1 = new Alumno('12345678', 'Sergio Estacio', '2008-12-15', 7.8, 6.5, 8.3, 'H');
    console.log(alumno1.mostrarInformacion());  

    alumno1.cambiarNotas(9.1, 7.4, 8.6);  
    console.log(alumno1.mostrarInformacion());  

    console.log(alumno1.estaAprobado());  

    let alumno2 = new Alumno('87654321', 'Alvaro Estacio', '2004-03-10', 8.5, 7.9, 9.2, 'H');
    console.log(alumno1.comparar(alumno2)); 
}
funcionPrueba1();


  