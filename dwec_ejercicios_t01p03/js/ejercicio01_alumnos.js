function Alumno(dni, nombre, fechaNacimiento, nota1, nota2, nota3, sexo) {
    this._dni = dni;
    this._nombre = nombre;
    this._fechaNacimiento = fechaNacimiento;
    this._nota1 = parseFloat(nota1).toFixed(2);
    this._nota2 = parseFloat(nota2).toFixed(2);
    this._nota3 = parseFloat(nota3).toFixed(2);
    this.sexo = sexo;
    this.edad = "";
    this.notaFinal;

    Object.defineProperty(this, 'dni', {
        get: () => { return this._dni; },
        set: (value) => { this._dni = value; }
    });

    Object.defineProperty(this, 'nombre', {
        get: () => { return this._nombre; },
        set: (value) => { this._nombre = value; }
    });

    Object.defineProperty(this, 'fechaNacimiento', {
        get: () => { return this._fechaNacimiento; },
        set: (value) => { this._fechaNacimiento = value; }
    });

    Object.defineProperty(this, 'nota1', {
        get: () => { return this._nota1; },
        set: (value) => { this._nota1 = parseFloat(value.toFixed(2)); }
    });

    Object.defineProperty(this, 'nota2', {
        get: () => { return this._nota2; },
        set: (value) => { this._nota2 = parseFloat(value.toFixed(2)); }
    });

    Object.defineProperty(this, 'nota3', {
        get: () => { return this._nota3; },
        set: (value) => { this._nota3 = parseFloat(value.toFixed(2)); }
    });

    Object.defineProperty(this, 'notaFinal', {
        get: () => { return this._notaFinal; }
    });

    this.cambiarNotas = function(newNota1, newNota2, newNota3) {
        this.nota1 = newNota1;
        this.nota2 = newNota2;
        this.nota3 = newNota3;
        this.calcNotaFinal();
    };

    this.estaAprobado = () => {
        return this.notaFinal >= 5;
    };

    this.comparar = (persona) => {
        if (this.notaFinal === persona.notaFinal) {
            return 0;
        } else if (this.notaFinal < persona.notaFinal) {
            return -1;
        } else {
            return 1;
        }
    };
    
    this.calcNotaFinal = () => {
        this._notaFinal = parseFloat(((parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3)) / 3).toFixed(2));
    };
    
    this.calcularEdad = () => {
        const hoy = new Date();
        const nacimiento = new Date(this.fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        this.edad = edad;
    };

    this.mostrarInformacion = () => {
        return `DNI: ${this.dni}, Nombre: ${this.nombre}, Edad: ${this.edad}, Fecha de Nacimiento: ${this.fechaNacimiento}, 
            Nota Final: ${this.notaFinal}, Notas: [${this.nota1}, ${this.nota2}, ${this.nota3}], Sexo: ${this.sexo}`;
    };

    this.calcularEdad();
    this.calcNotaFinal();
}
