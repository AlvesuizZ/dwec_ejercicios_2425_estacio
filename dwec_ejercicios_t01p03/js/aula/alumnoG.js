Alumno.prototype._grupo = null;

Object.defineProperty(Alumno.prototype, 'grupo', {
    get: function () {
        return this._grupo || null;
    },
    set: function (value) {
        this._grupo = value;
    }
});


Alumno.prototype.mostrarInformacionConGrupo = function () {
    return `${this.mostrarInformacion()}, grupo: ${this.grupo}`;
};
