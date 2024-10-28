console.log("T0X - Ejercicio 01");

function Alumno(dni, nombre, fechaNacimiento, nota1, nota2, nota3, sexo) {
    this.dni = dni;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.sexo = sexo;

    this.calcularEdad();
}

Alumno.prototype.calcularEdad = function() {
    const hoy = neDate();
    const nacimiento = new Date(this.fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    this.edad = edad;
};

Alumno.prototype.mostrarInformacion = function() {
    return `DNI: ${this.dni}, Nombre: ${this.nombre}, Edad: ${this.edad}, Fecha de Nacimiento: ${this.fechaNacimiento}, 
            Nota Final: ${this.notaFinal}, Notas: [${this.nota1}, ${this.nota2}, ${this.nota3}], Sexo: ${this.sexo}`;
};