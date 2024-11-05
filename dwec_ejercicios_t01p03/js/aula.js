function Aula(nAlumnos, id, descripcion) {
    this._nAlmunos = nAlumnos;
    this._id = id;
    this._descripcion = descripcion;
    this.alumnos = [0];

    this.pedirDatosAlumno = () => {
        let exit = false
        let nombre = prompt("Dime tu nombre: ")
        let dni = prompt("Dime tu dni: ").toUpperCase();
        let fechaNacimiento = prompt("Dime tu fecha de nacimiento: ")
        let nota1 = prompt("Dime tu nota de la primera evaluacion: ")
        let nota2 = prompt("Dime tu nota de la segunda evaluacion: ")
        let nota3 = prompt("Dime tu nota de la tercera evaluacion: ")
        let sexo = prompt("Dime tu sexo: ").toUpperCase();

        do {
            if (isNaN(nombre)) {
                exit = true;
            } else {
                console.log("El nombre no es valido porfavor introduzcalo otra vez")
                nombre = prompt("Dime tu nombre: ")
            }
        } while (!exit);
        exit = false;
        do {
            if (this.validarDNI(dni) == false) {
                console.log("El dni pasado por consola no es valido")
                dni = prompt("Dime tu dni: ").toUpperCase();
            }else{
                exit = true;
            }
        } while (!exit);

        exit = false
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
        //validacion de la nota 2
        do {
            if (!this.validarNota(nota2)) {
                console.log("La nota no es valido porfavor agregelo otra vez")
                nota1 = prompt("Dime tu nota de la primera evaluacion: ")
            } else {
                exit = true
            }
        } while (!exit);

        exit = false
        //validacion de la nota 3
        do {
            if (!this.validarNota(nota3)) {
                console.log("La nota no es valido porfavor agregelo otra vez")
                nota1 = prompt("Dime tu nota de la primera evaluacion: ")
            } else {
                exit = true
            }
        } while (!exit);

        exit = false

        do {
            if (!this.validarGenero(sexo)) {
                console.log("El genero introducido no es valido")
                sexo = prompt("Dime tu sexo: ").toUpperCase();
            } else {
                exit = true;
            }
        } while (!exit);
        exit = false;
        do {
            if (!validarFecha(fechaNacimiento)) {
                console.log("la fecha no es valida por favor introducela de nuevo")
                fechaNacimiento = prompt("Dime tu fecha de nacimiento(DD/MM/YYYY  DD-MM-YYYY): ")
            } else {
                exit = true
            }
        } while (!exit);
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
        let fechaParts;
        if (dateValidator(date)) {
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
            if (esBisiesto(year) && month === 2 && day <= 29) {
                console.log("La fecha es valida");
                return true;
            } else if (month === 2 && day > 28) {
                console.log("La fecha no es valida");
                return false;
            } else {
                console.log("La fecha introducida es valida");
                return true;
            }
        } else {
            console.log("La fecha no es valida");
            return false;
        }
    }
    
}


