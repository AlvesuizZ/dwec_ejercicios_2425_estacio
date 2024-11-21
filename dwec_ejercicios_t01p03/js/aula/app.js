function funcionPrueba3(){
    let _nAlumnos;
    let opcion
    let nGrupos
    let grupos
    let grupo
    let exit = false;

    do {
        _nAlumnos = prompt("Dime cuantos alumnos va a ver en tu clase")
    } while (isNaN(_nAlumnos));
    const aula = new Aula(_nAlumnos, 1, "Descripcion")
    do {
        nGrupos = prompt("Dime cuantos grupos va a tener tu aula")
        for (let i = 0; i < nGrupos; i++) {
            aula.crearGrupo();
        }
    } while (nGrupos <= 0 && isNaN(nGrupos));
    aula.pedirDatos();
    aula.asignarGrupos()

    do {
        do {
            opcion = parseInt(prompt(`--------MENU--------
                1. Mostrar todos los alumnos
                2. Mostrar alumnos por grupo
                3. Cambiar alumno a un grupo
                4. Eliminar un grupo
                5. Mostrar resumen grupos
                6 Calcular media de un grupo
                7. Mejor alumno por grupo
                8. Calcular % suspensos por grupo
                0.salir`)) 
        } while (isNaN(opcion));
        switch (opcion) {
            case 1:
                aula.mostrarDatos2();
                break;
            case 2:
                grupo = aula.obtenerGrupoValido();
                aula.mostrarAlumnosPorGrupo(grupo);
                break;
            case 3:
                    aula.cambiarGrupo();
                break;
            case 4:
                grupo = aula.obtenerGrupoValido();
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