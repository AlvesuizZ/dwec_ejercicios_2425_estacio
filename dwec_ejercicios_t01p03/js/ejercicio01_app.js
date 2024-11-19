console.log("T0X - Ejercicio 01");

function funcionPrueba1() {
    // let alumno1 = new Alumno('12345678', 'Sergio Estacio', '2008-12-15', 7.8, 6.5, 8.3, 'H');
    // console.log(alumno1.mostrarInformacion());  

    // alumno1.cambiarNotas(9.1, 7.4, 8.6);  
    // console.log(alumno1.mostrarInformacion());  

    // console.log(alumno1.estaAprobado());  

    // let alumno2 = new Alumno('87654321', 'Alvaro Estacio', '2004-03-10', 8.5, 7.9, 9.2, 'H');
    // console.log(alumno1.comparar(alumno2)); 

    const aula = new Aula(2, 1, "Descripcion");
    aula.pedirDatos();
    aula.mostrarDatos();
    aula.mediasNotas();
    aula.mejorNota();
    aula.porcentajeSuspensos();
    aula.mostrarSuspensosAprobados();
}
// funcionPrueba1();


function funcionPrueba2(){
    let nalumnos;
    let opcion
    let exit = false;

    do {
        nalumnos = prompt("Dime cuantos alumnos va a ver en tu clase")
    } while (isNaN(nalumnos));
    const aula = new Aula(nalumnos, 1, "Descripcion")
    aula.pedirDatos();

    do {
        do {
            opcion = parseInt(prompt(`--------MENU--------
                1. Mostrar datos
                2.Media de notas
                3.Alumno con mejor nota
                4.% de suspensos
                5.Balance de suspensos y aprobados
                6.salir`)) 
        } while (isNaN(opcion));

        switch (opcion) {
            case 1:
                aula.mostrarDatos();
                break;
            case 2:
                aula.mediasNotas();
                break;
            case 3:
                aula.mejorNota();
                break;
            case 4:
                aula.porcentajeSuspensos();
                break;
            case 5:
                console.log(aula.mostrarSuspensosAprobados());
                break;
            case 6:
                exit = true;
                break;
            default:
                console.log("A")
                break;
        }
        
    } while (!exit);
}
// funcionPrueba2();

function funcionPrueba3(){
    let _nAlumnos;
    let opcion
    let grupo
    let exit = false;

    do {
        _nAlumnos = prompt("Dime cuantos alumnos va a ver en tu clase")
    } while (isNaN(_nAlumnos));
    const aula = new Aula(_nAlumnos, 1, "Descripcion")
    aula.pedirDatos();

    do {
        do {
            opcion = parseInt(prompt(`--------MENU--------
                1. Mostrar todos los alumnos
                2. Mostrar alumnos por grupo
                3. Agragar alumno a un grupo
                4. Eliminar un grupo
                5. Mostrar resumen grupos
                6 Calcular media de un grupo
                7. Mejor alumno por grupo
                8. Calcular % suspensos por grupo
                0.salir`)) 
        } while (isNaN(opcion));
        switch (opcion) {
            case 1:
                aula.mostrarDatos();
                break;
            case 2:
                do{
                    grupo = prompt("Dime que grupo quieres eliminar (A o B)").toUpperCase();
                } while (grupo !== "A" && grupo !== "B");
                aula.mostrarGrupo(grupo);
                break;
            case 3:
                    aula.cambiarGrupo();
                break;
            case 4:
                do {
                    grupo = prompt("Dime que grupo quieres eliminar (A o B)").toUpperCase();
                } while (grupo !== "A" && grupo !== "B");
                aula.eliminarGrupo(grupo);
                break;
            case 5:
                aula.mostrarTodosAlumnoGrupo();
                break;
            case 6:
                do {
                    grupo = prompt("De cual grupo quieres saber la media (A o B)").toUpperCase();
                } while (grupo !== "A" && grupo !== "B");
                aula.mediaDeGrupo(grupo);
                break;
            case 7:
                do {
                    grupo = prompt("De cual grupo quieres saber el mejor alumno").toUpperCase();
                } while (grupo !== "A" && grupo !== "B");
                aula.mejorNotaGrupo(grupo)
                break;
            case 8:
                aula.FailedPerGroup();
                break;
            case 0:
                exit = true;
            default:
                break;
        }
    } while (!exit);
}

funcionPrueba3();

