function Alumno(dni, nombre, fechaNacimiento, nota1, nota2, nota3, sexo) {
    this._dni = dni;
    this._nombre = nombre;
    this._fechaNacimiento = fechaNacimiento;
    this._nota1 = parseFloat(nota1).toFixed(2);
    this._nota2 = parseFloat(nota2).toFixed(2);
    this._nota3 = parseFloat(nota3).toFixed(2);
    this._sexo = sexo;
    this._edad = 0;
    this._notaFinal = 0.0;
    Alumno.prototype._grupo = ""


    this.agregarAGrupo = (grupo) => {
        this._grupo = grupo
    }

    this.cambiarNotas = function(newNota1, newNota2, newNota3) {
        this._nota1 = parseFloat(newNota1).toFixed(2);
        this._nota2 = parseFloat(newNota2).toFixed(2);
        this._nota3 = parseFloat(newNota3).toFixed(2);
        this.calcNotaFinal();
    };

    this.estaAprobado = () => {
        return this._notaFinal >= 5;
    };

    this.comparar = (persona) => {
        if (this._notaFinal === persona.notaFinal) {
            return 0;
        } else if (this._notaFinal < persona.notaFinal) {
            return -1;
        } else {
            return 1;
        }
    };
    
    this.calcNotaFinal = () => {
        this._notaFinal = parseFloat(((parseFloat(this._nota1) + parseFloat(this._nota2) + parseFloat(this._nota3)) / 3).toFixed(2));
    };
    
    this.calcularEdad = () => {
        const hoy = new Date();
        const nacimiento = new Date(this._fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        this._edad = edad;
    };

    this.mostrarInformacion = () => {
        return `DNI: ${this._dni}, Nombre: ${this._nombre}, Edad: ${this._edad}, Fecha de Nacimiento: ${this._fechaNacimiento}, 
            Nota Final: ${this._notaFinal}, Notas: [${this._nota1}, ${this._nota2}, ${this._nota3}], _Sexo: ${this._sexo}, grupo: ${this._grupo}`;
    };

    this.calcularEdad();
    this.calcNotaFinal();
    
    
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

    Object.defineProperty(this, 'grupo', {
        get: () => { return this._grupo; },
        set: (value) => {this._grupo = value}
    });
}
