console.log("T0X - Ejercicio 01");

function funcionPrueba1() {
    const alumno1 = new Alumno('12345678A', 'Juan Perez', '2000-01-15', 6.5, 7.0, 8.5, 'h');
    const alumno2 = new Alumno('87654321B', 'Maria Lopez', '1999-05-20', 5.0, 6.0, 4.5, 'm');

    console.log(alumno1.mostrarInformacion());
    console.log(alumno2.mostrarInformacion());
}