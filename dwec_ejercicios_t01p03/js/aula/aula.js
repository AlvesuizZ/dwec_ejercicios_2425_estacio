function Aula(_nAlumnos, id, descripcion) {
    this._nAlmunos = _nAlumnos;
    this._id = id;
    this._descripcion = descripcion;
    this._alumnos = [];

    this.pedirDatosAlumno = () => {
        let exit = false
        let nombre = prompt("Dime tu nombre: ")
        do {
            if (isNaN(nombre)) {
                exit = true;
            } else {
                console.log("El nombre no es valido porfavor introduzcalo otra vez")
                nombre = prompt("Dime tu nombre: ")
            }
        } while (!exit);

        exit = false;

        let dni = prompt("Dime tu dni: ").toUpperCase();

        do {
            if (this.validarDNI(dni) == false) {
                console.log("El dni pasado por consola no es valido")
                dni = prompt("Dime tu dni: ").toUpperCase();
            }else{
                exit = true;
            }
        } while (!exit);

        exit = false

        let nota1 = prompt("Dime tu nota de la primera evaluacion: ")
        //validacion de la nota 1

        do {
            if (!this.validarNota(nota1)) {
                console.log("La nota no es valido porfavor agregelo otra vez")
                nota1 = prompt("Dime tu nota de la primera evaluacion: ")
            } else {
                exit = true
            }
        } while (!exit);

        exit = false

        let nota2 = prompt("Dime tu nota de la segunda evaluacion: ")

        //validacion de la nota 2

        do {
            if (!this.validarNota(nota2)) {
                console.log("La nota no es valido porfavor agregelo otra vez")
                nota2 = prompt("Dime tu nota de la segunda evaluacion: ")
            } else {
                exit = true
            }
        } while (!exit);

        exit = false

        let nota3 = prompt("Dime tu nota de la tercera evaluacion: ")

        //validacion de la nota 3

        do {
            if (!this.validarNota(nota3)) {
                console.log("La nota no es valido porfavor agregelo otra vez")
                nota3 = prompt("Dime tu nota de la tercera evaluacion: ")
            } else {
                exit = true
            }
        } while (!exit);

        exit = false

        let sexo = prompt("Dime tu sexo: ").toUpperCase();

        do {
            if (!this.validarGenero(sexo)) {
                console.log("El genero introducido no es valido")
                sexo = prompt("Dime tu sexo: ").toUpperCase();
            } else {
                exit = true;
            }
        } while (!exit);

        exit = false;

        let fechaNacimiento = prompt("Dime tu fecha de nacimiento: ")

        do {
            if (!this.validarFecha(fechaNacimiento)) {
                console.log("la fecha no es valida por favor introducela de nuevo")
                fechaNacimiento = prompt("Dime tu fecha de nacimiento(DD/MM/YYYY  DD-MM-YYYY): ")
            } else {
                exit = true
            }
        } while (!exit);
        return new Alumno(dni, nombre,fechaNacimiento,nota1,nota2,nota3,sexo);
    }

    this.pedirDatos = () =>{
        for (let i = 0; i < _nAlumnos; i++) {
            this._alumnos.push(this.pedirDatosAlumno())
            
        }
    }

    this.mediasNotas = () => {
        let suma = 0;

        for (let i = 0; i < this._alumnos.length; i++) {
            suma += this._alumnos[i].notaFinal; 
        }

        const media = (_nAlumnos > 0) ? parseFloat(suma / _nAlumnos).toFixed(2) : 0;
        console.log("Media de las notas finales:", media);
        return media;
    }

    this.mejorNota = () => {
        let mejorAlumno = this._alumnos[0];
        for (let i = 1; i < this._alumnos.length; i++) {
            if (this._alumnos[i].notaFinal > mejorAlumno.notaFinal) {
                mejorAlumno = this._alumnos[i];
            }
        }
        console.log(mejorAlumno.mostrarInformacion())
        return mejorAlumno;
    }

    this.porcentajeSuspensos = () => {
        let suspensos = 0;
        for (let i = 0; i < this._alumnos.length; i++) {
            if (this._alumnos[i].notaFinal < 5) {
                suspensos++;
            }
        }
        console.log(((suspensos / this._alumnos.length) * 100).toFixed(2))
        return ((suspensos / this._alumnos.length) * 100).toFixed(2)
    }

    this.mostrarSuspensosAprobados = () => {
        const suspensos = this.porcentajeSuspensos();
        const aprobados = (100 - suspensos).toFixed(2);
        
        return `Porcentaje de Aprobados: ${aprobados}%, Porcentaje de Suspensos: ${suspensos}%`;
    }

    this.mostrarDatos = () => {
        for (let i= 0; i < this._alumnos.length; i++) {
            console.log(this._alumnos[i].mostrarInformacion());
        }
    }


    this.validarDNI = (dni) => {

        if (!/^\d{8}[A-Z]$/.test(dni)) {
            return false;
        }

        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const numeros = dni.slice(0, 8);
        const letra = dni[8];

        const letraCorrecta = letras[numeros % 23];

        if (letra === letraCorrecta) {
            return true
        } else {
            return false
        }
    }

    this.validarNota = (nota) => {

        if (isNaN(nota)) {
            console.log("La nota debera ser un numero")
            return false
        } else if (nota < 0) {
            console.log("La nota no puede ser negativa")
            return false
        } else if (nota > 10) {
            console.log("La nota no puede ser mayor de 10")
            return false
        } else {
            return true
        }
    }

    this.validarGenero = (sexo) => {
        if (sexo === "H" || sexo === "M" || sexo === "O") {
            return true
        } else {
            return false
        }
    }
    this.dateValidator = (date) => {
        const pattern = /^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/](\d{2}|\d{4})$/;
        return pattern.test(date)
    }
    this.esBisiesto = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    
    this.validarFecha = (date) => {
        let sign = "";
        if (this.dateValidator(date)) {
            if (date.includes(" ")) {
                return false;
            }
            if (date.includes("/")) {
                sign = "/";
            } else {
                sign = "-";
            }
            let fechaParts = date.split(sign);
            let day = parseInt(fechaParts[0]);
            let month = parseInt(fechaParts[1]);
            let year = parseInt(fechaParts[2]);
            const diasPorMes = [31, this.esBisiesto(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (day < 1 || day > diasPorMes[month - 1]) return false;
            return true;
        } else {
            console.log("La fecha no es valida");
            return false;
        }
    }

    Object.defineProperty(this, 'nAlumnos', {
        get: () => { return this._nAlmunos; },
        set: (value) => { this._nAlmunos = value; }
    });

    Object.defineProperty(this, 'id', {
        get: () => { return this._id; },
        set: (value) => { this._id = value; }
    });

    Object.defineProperty(this, 'descripcion', {
        get: () => { return this._descripcion; },
        set: (value) => { this._descripcion = value; }
    });
    
}



