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
    } while (isNaN(nGrupos) || nGrupos <= 0);
    for (let i = 0; i < nGrupos; i++) {
        aula.crearGrupo();
    }
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
                aula.resumenGrupos();
                break;
            case 6:
                grupo = aula.obtenerGrupoValido();
                aula.mediaGrupo(grupo);
                break;
            case 7:
                grupo = aula.obtenerGrupoValido();
                aula.mejorAlumnoDeGrupo(grupo);
                break;
            case 8:
                aula.porcentajeSuspensosPorGrupos();
                break;
            case 0:
                exit = true;
            default:
                console.log("Por favor pon una opcion valida")
                break;
        }
    } while (!exit);
}

funcionPrueba3();