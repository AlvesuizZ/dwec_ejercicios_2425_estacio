console.log("T0X - Ejercicio 01");

function funcionPrueba1() {
    const alumno1 = new Alumno('12345678A', 'Alvaro Estacio', '2000-03-10', 6.5, 7.0, 8.5, 'h');
    const alumno2 = new Alumno('87654321B', 'Sergio Estacio', '2000-12-15', 5.0, 6.0, 4.5, 'h');

    console.log(alumno1.mostrarInformacion());
    console.log(alumno2.mostrarInformacion());
    console.log(alumno1.comparar(alumno2));
    console.log(alumno2.comparar(alumno1))
}
funcionPrueba1();