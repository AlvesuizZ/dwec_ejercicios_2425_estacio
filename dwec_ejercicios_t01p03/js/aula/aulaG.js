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
            grupo = prompt(`A qué grupo deseas asignar a ${alumno.nombre}`).trim();
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
