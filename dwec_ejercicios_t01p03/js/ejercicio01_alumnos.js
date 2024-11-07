function Alumno(dni, nombre, fechaNacimiento, nota1, nota2, nota3, _sexo) {
    this._dni = dni;
    this._nombre = nombre;
    this._fechaNacimiento = fechaNacimiento;
    this._nota1 = parseFloat(nota1).toFixed(2);
    this._nota2 = parseFloat(nota2).toFixed(2);
    this._nota3 = parseFloat(nota3).toFixed(2);
    this._sexo = _sexo;
    this._edad = 0;
    this._notaFinal = 0.0;
    Alumno.prototype.grupo = ""




    this.cambiarNotas = function(newNota1, newNota2, newNota3) {
        this.nota1 = parseFloat(newNota1).toFixed(2);
        this.nota2 = parseFloat(newNota2).toFixed(2);
        this.nota3 = parseFloat(newNota3).toFixed(2);
        this.calc_NotaFinal();
    };

    this.estaAprobado = () => {
        return this._notaFinal >= 5;
    };

    this.comparar = (persona) => {
        if (this._notaFinal === persona._notaFinal) {
            return 0;
        } else if (this._notaFinal < persona._notaFinal) {
            return -1;
        } else {
            return 1;
        }
    };
    
    this.calc_NotaFinal = () => {
        this.__notaFinal = parseFloat(((parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3)) / 3).toFixed(2));
    };
    
    this.calcular_Edad = () => {
        const hoy = new Date();
        const nacimiento = new Date(this.fechaNacimiento);
        let _edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        this._edad = edad;
    };

    this.mostrarInformacion = () => {
        return `DNI: ${this.dni}, Nombre: ${this.nombre}, Edad: ${this.edad}, Fecha de Nacimiento: ${this.fechaNacimiento}, 
            Nota Final: ${this._notaFinal}, Notas: [${this.nota1}, ${this.nota2}, ${this.nota3}], _Sexo: ${this._sexo}`;
    };

    this.calcularEdad();
    this.calc_NotaFinal();
    
    
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

    Object.defineProperty(this, '_notaFinal', {
        get: () => { return this.__notaFinal; }
    });
}
