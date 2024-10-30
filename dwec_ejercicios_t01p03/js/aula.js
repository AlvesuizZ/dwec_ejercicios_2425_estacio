function Aula(nAlumnos, id, descripcion){
    this._nAlmunos = nAlumnos;
    this._id = id;
    this._descripcion = descripcion;
    this.alumnos = [0];

    this.pedirDatosAlumno = (dni, nombre, fechaNacimiento, nota1, nota2, nota3, sexo) =>{
        let exit = false
        let nombre = prompt("Dime tu nombre: ")
        let  dni = prompt("Dime tu dni: ").toUpperCase();
        let fechaNacimiento = prompt("Dime tu fecha de nacimiento: ")
        let nota1 = prompt("Dime tu nota de la primera evaluacion: ")
        let nota2 = prompt("Dime tu nota de la segunda evaluacion: ")
        let nota3 = prompt("Dime tu nota de la tercera evaluacion: ")
        let sexo = prompt("Dime tu sexo: ")
        
        do {
            if (this.validarDNI(dni) == false) {
                console.log("El dni pasado por consola no es valido")
                dni = prompt("Dime tu dni: ").toUpperCase();
                break;
            }

        } while (!exit);
    }

    this.validarDNI = (dni) => {

        if (!/^\d{8}[A-Z]$/.test(dni)) {
            resultado.textContent = "Formato de DNI no válido.";
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
}