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

    console.log("Cambio de grupos completado.");
};

Aula.prototype.eliminarGrupo = function (grupo) {
    let alumnoPorGrupo = 0;
    if (this._grupos.has(grupo)) {
        for (let i = 0; i < this._nAlmunos; i++) {
            if(this._alumnos[i].grupo === grupo){
                alumnoPorGrupo++;
                this._alumnos[i].grupo = null;
            }
        }
        if(alumnoPorGrupo = 0){
            this._grupos.delete(grupo);
            console.log(`Grupo ${grupo} eliminado.`);
        }
    } else {
        console.log("El grupo no existe o contiene alumnos, no se puede eliminar.");
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
