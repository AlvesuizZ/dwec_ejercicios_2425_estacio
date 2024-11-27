Aula.prototype._grupos = new Set();

Aula.prototype.crearGrupo = function () {
    let nombreGrupo;
    let exit = false;

    do {
        nombreGrupo = prompt("Introduce el nombre del grupo: ").trim();
        if (!nombreGrupo) {
            console.log("El nombre no puede estar vacío. Inténtalo de nuevo.");
        } else if (this._grupos.has(nombreGrupo)) {
            console.log(`El grupo "${nombreGrupo}" ya existe. Introduce un nombre diferente.`);
        } else {
            exit = true;
        }
    } while (!exit);

    this._grupos.add(nombreGrupo);
    console.log(`Grupo "${nombreGrupo}" añadido correctamente.`);
};

Aula.prototype.asignarGrupos = function () {
    if (this._alumnos.length === 0) {
        console.log("No hay alumnos en el aula para asignar a grupos.");
        return;
    }

    if (this._grupos.size === 0) {
        console.log("No hay grupos disponibles. Por favor, crea grupos primero.");
        return;
    }

    console.log("Grupos disponibles:");
    for (const grupo of this._grupos) {
        console.log(`-> ${grupo}`);
    }

    this._alumnos.forEach((alumno) => {
        let exit = false;
        let grupo;

        console.log(`Asignando grupo para: ${alumno.nombre})`);
        
        do {
            grupo = prompt(`A qué grupo quieres asignar a ${alumno.nombre}`).trim();
            if (this._grupos.has(grupo)) {
                exit = true;
            } else {
                console.log("El grupo no existe. Por favor introduce uno valido");
            }
        } while (!exit);
        alumno.grupo = grupo;
    });

    console.log("Asignación de grupos completada.");
};

Aula.prototype.cambiarGrupo = function () {
    if (this._alumnos.length === 0) {
        console.log("No hay alumnos en el aula para cambiar de grupo.");
        return;
    }

    if (this._grupos.size === 0) {
        console.log("No hay grupos disponibles. Por favor, crea grupos primero.");
        return;
    }

    this._alumnos.forEach((alumno) => {
            let exit = false;
            let nuevoGrupo;

            console.log(`Cambiando grupo para: ${alumno.nombre}`);
            console.log(`Grupo actual: ${alumno.grupo}`);


            const quiereCambiar = confirm(`¿quieres cambiar a ${alumno.nombre} del grupo "${alumno.grupo}"?`);

            if (!quiereCambiar) {
                console.log(`El alumno ${alumno.nombre} no fue cambiado de grupo.`);
                return;
            }

            do {
                nuevoGrupo = prompt(`A qué grupo quieres mover a ${alumno.nombre}`).trim();

                if (this._grupos.has(nuevoGrupo)) {
                    if (alumno.grupo !== nuevoGrupo) {
                        const alumnosEnGrupo = this._alumnos.filter(a => a.grupo === alumno.grupo);

                        if (alumnosEnGrupo.length === 1) {
                            const confirmacion = confirm(
                                `El grupo "${alumno.grupo}" quedará sin alumnos. ¿quieres continuar? (Aceptar para continuar, Cancelar para elegir otro grupo)`
                            );

                            if (!confirmacion) {
                                console.log("Operación cancelada. El alumno no fue cambiado de grupo.");
                                continue;
                            }
                        }

                        alumno.grupo = nuevoGrupo;
                        console.log(`El alumno ${alumno.nombre} ha sido movido al grupo: ${nuevoGrupo}`);
                        exit = true;
                    } else {
                        console.log(`El alumno ya pertenece al grupo: ${nuevoGrupo}`);
                        exit = true;
                    }
                } else {
                    console.log("El grupo no existe. Por favor, introduce uno válido.");
                }
            } while (!exit);
    });
};

Aula.prototype.eliminarGrupo = function (grupo) {
    let alumnoPorGrupo = 0;
    if (this._grupos.has(grupo)) {
        for (let i = 0; i < this._nAlmunos; i++) {
            if(this._alumnos[i].grupo === grupo){
                alumnoPorGrupo++;
            }
        }
        if(alumnoPorGrupo === 0){
            this._grupos.delete(grupo);
            console.log(`Grupo ${grupo} eliminado.`);
        }
    } else {
        console.log("El grupo no existe o contiene alumnos, no se puede eliminar.");
    }
};

Aula.prototype.resumenGrupos = function () {

        if (this._grupos.size === 0) {
            console.log("No hay grupos creados.");
            return;
        }
    
        console.log("Resumen de los grupos:");
        this._grupos.forEach((grupo) => {
            const alumnosEnGrupo = this._alumnos.filter(alumno => alumno.grupo === grupo);
    
            if (alumnosEnGrupo.length === 0) {
                console.log(`${grupo}: vacio`);
            } else {
                console.log(`${grupo}: ${alumnosEnGrupo.length} alumnos`);
                alumnosEnGrupo.forEach(alumno => {
                    console.log(alumno.mostrarInformacionConGrupo());
                });
            }
        });
};

Aula.prototype.mediaGrupo = function (grupo) {
    if (this._grupos.size === 0) {
        console.log("No hay grupos creados.");
        return;
    }
    const alumnosEnGrupo = this._alumnos.filter(alumno => alumno.grupo === grupo);
    if (alumnosEnGrupo.length === 0) {
        console.log(`El grupo ${grupo} no tiene alumnos.`);
        return;
    }
    let sumaNotas = 0;
    for (const alumno of alumnosEnGrupo) {
        sumaNotas += alumno.notaFinal;
    }
    const media = (sumaNotas / alumnosEnGrupo.length).toFixed(2);
    console.log(`La media del grupo ${grupo} es: ${media}`);
};

Aula.prototype.mejorAlumnoDeGrupo = function (grupo) {
    if (this._grupos.size === 0) {
        console.log("No hay grupos creados.");
        return;
    }

    if (!this._grupos.has(grupo)) {
        console.log(`El grupo ${grupo} no existe.`);
        return;
    }

    const alumnosDelGrupo = this._alumnos.filter((alumno) => alumno.grupo === grupo);

    if (alumnosDelGrupo.length === 0) {
        console.log(`El grupo ${grupo} no tiene alumnos.`);
        return;
    }

    let notaMaxima = 0;
    for (const alumno of alumnosDelGrupo) {
        if (alumno.notaFinal > notaMaxima) {
            notaMaxima = alumno.notaFinal;
        }
    }

    const mejoresAlumnos = [];
    for (const alumno of alumnosDelGrupo) {
        if (alumno.notaFinal === notaMaxima) {
            mejoresAlumnos.push(alumno);
        }
    }

    console.log(`La nota más alta del grupo "${grupo}" es ${notaMaxima}.`);
    console.log("Los mejores alumnos del grupo son:");
    for (const alumno of mejoresAlumnos) {
        console.log(alumno.mostrarInformacion());
    }
};

Aula.prototype.porcentajeSuspensosPorGrupos = function () {
    if (this._grupos.size === 0) {
        console.log("No hay grupos creados.");
        return;
    }

    for (const grupo of this._grupos) {
        const alumnosDelGrupo = this._alumnos.filter((alumno) => alumno.grupo === grupo);

        if (alumnosDelGrupo.length === 0) {
            console.log(`El grupo ${grupo} no tiene alumnos.`);
            continue;
        }

        let totalAlumnos = alumnosDelGrupo.length;
        let suspensos = 0;


        for (const alumno of alumnosDelGrupo) {
            if (alumno.notaFinal < 5) {
                suspensos++;
            }
        }

        let porcentajeSuspensos = (suspensos / totalAlumnos) * 100;

        console.log(`El porcentaje de suspensos en el grupo ${grupo} es: ${porcentajeSuspensos.toFixed(2)}%`);
    }
};



Aula.prototype.mostrarAlumnosPorGrupo = function (grupo) {
    if (this._grupos.has(grupo)) {
        console.log(`Alumnos en el ${grupo}:`);
        for (let i = 0; i < this.nAlumnos; i++) {
            if(this._alumnos[i].grupo === grupo){
                console.log(this._alumnos[i].mostrarInformacionConGrupo());
            };
            
        }
    } else {
        console.log(`El grupo ${grupo} no existe.`);
    }
};


Aula.prototype.mostrarDatos2 = function () {

        for (let i= 0; i < this._nAlmunos; i++) {
            console.log(this._alumnos[i].mostrarInformacionConGrupo());
        }

}


Aula.prototype.obtenerGrupoValido = function () {
    let grupo = null;

    do {

        console.log("Grupos disponibles:");
        for (const grupo of this._grupos) {
            console.log(`-> ${grupo}`);
        }

        grupo = prompt("Introduce el nombre de un grupo existente:").trim();

        if (this._grupos.has(grupo)) {
            console.log(`El grupo "${grupo}" es válido.`);
            return grupo;
        } else {
            console.log(`El grupo "${grupo}" no existe. Por favor, inténtalo de nuevo.`);
        }
        
    } while (true);
}
