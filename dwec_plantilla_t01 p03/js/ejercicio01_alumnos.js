console.log("T0X - Ejercicio 01");

function Alumno(dni, nombre, fechaNacimiento, nota1, nota2, nota3, sexo) {
    this._dni = dni;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.nota1 = parseFloat(nota1.toFixed(2));
    this.nota2 = parseFloat(nota2.toFixed(2));
    this.nota3 = parseFloat(nota3.toFixed(2));
    this.sexo = sexo;
    this.edad = "";
    this.notaFinal;

    Object.defineProperty(this, 'dni',{
        get: () =>{return this._dni},
        set: (value) => {this._dni = value}
    })

    Object.defineProperty(this, 'nombre',{
        get: () =>{return this.nombre},
        set: (value) => {this.nombre = value}
    })

    Object.defineProperty(this, 'fechaNacimiento',{
        get: () =>{return this.fechaNacimiento},
        set: (value) => {this.fechaNacimiento = value}
    })

    Object.defineProperty(this, 'nota1',{
        get: () =>{return this.nota1},
        set: (value) => {this.nota1 = parseFloat(value.toFixed(2))}
    })

    Object.defineProperty(this, 'nota2',{
        get: () =>{return this.nota2},
        set: (value) => {this.nota2 = parseFloat(value.toFixed(2))}
    })
    Object.defineProperty(this, 'nota3',{
        get: () =>{return this.nota3},
        set: (value) => {this.nota3 = parseFloat(value.toFixed(2))}
    })

    Object.defineProperty(this, 'notaFinal',{
        get: () =>{return this.notaFinal},
    })

    this.cambiarNotas = function(newNota1, newNota2, newNota3) {
        this.nota1 = newNota1;
        this.nota2 = newNota2;
        this.nota3 = newNota3;
        this.calcNotaFinal();
    };

    this.estaAprobado = () => {
        if (this.notaFinal >= 5) {
            return true
        }else{
            return false
        }
    }

    this.comparar = (persona) => {
        if (this.notaFinal = persona.notaFinal) {
            return 0
        }else if (this.notaFinal < persona.notaFinal){
            return -1
        }else{
            return 1
        }
    }
    
    this.calcNotaFInal = () =>{
        this.notaFinal = parseFloat(((this.nota1 + this.nota2 + this.nota3) / 3)).toFixed(2)
    }
    
    this.calcularEdad = async () => {
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
        return `DNI: ${this._dni}, Nombre: ${this.nombre}, Edad: ${this.edad}, Fecha de Nacimiento: ${this.fechaNacimiento}, 
            Nota Final: ${this.notaFinal}, Notas: [${this.nota1}, ${this.nota2}, ${this.nota3}], Sexo: ${this.sexo}`;
    }
    this.calcularEdad();
    this.calcNotaFInal();
}