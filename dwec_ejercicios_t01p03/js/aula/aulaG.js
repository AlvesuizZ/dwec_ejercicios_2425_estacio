Aula.prototype.nombresGrupos = new Set();

Aula.prototype.crearGrupo = function () {
    let nombreGrupo;
    let exit = false;

    do {
        nombreGrupo = prompt("Introduce el nombre del grupo: ").trim();
        if (!nombreGrupo) {
            console.log("El nombre no puede estar vacío. Inténtalo de nuevo.");
        } else if (this.nombresGrupos.has(nombreGrupo)) {
            console.log(`El grupo "${nombreGrupo}" ya existe. Introduce un nombre diferente.`);
        } else {
            exit = true;
        }
    } while (!exit);

    this.nombresGrupos.add(nombreGrupo);
    this.grupos.set(nombreGrupo);
    console.log(`Grupo "${nombreGrupo}" añadido correctamente.`);
};