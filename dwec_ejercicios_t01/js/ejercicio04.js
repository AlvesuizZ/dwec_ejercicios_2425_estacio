const calcularSalirioBruto = (nHoras, turno) => {
  if (!nHoras || !turno || nHoras <= 0) return -1;

  let salarioBruto = 0;

  switch (turno.toUpperCase()) {
    case "MAÑANA":
      salarioBruto = nHoras * 45;
      break;

    case "TARDE":
      salarioBruto = nHoras * 47;
      break;

    case "NOCHE":
      salarioBruto = nHoras * 50;
      break;

    default:
      console.log("Surgio algo no contemplado");
      return -1;
      break;
  }

  return salarioBruto;
};

const calcularSalarioNeto = (salarioBruto) => {
  if (!salarioBruto || salarioBruto < 0) return -1;

  if (salarioBruto < 600) {
    salarioBruto *= 0.8;
  } else if (salarioBruto >= 600 && salarioBruto < 1000) {
    salarioBruto *= 0.1;
  } else if (salarioBruto > 1000) {
    salarioBruto *= 0.12;
  }

  return salarioBruto;
};

let horas = parseInt(prompt("Introduce el numero de horas"));
let turno = prompt("Introduce el turno Mañana, Tarde, Noche");
let turnos = ["MAÑANA", "TARDE", "NOCHE"];

if (!isNaN(horas) && turnos.includes(turno.toUpperCase())) {
  let salarioBruto = calcularSalirioBruto(horas, turno);
  let salarioNeto = calcularSalarioNeto(salarioBruto);

  if (salarioBruto == -1 || salarioNeto == -1) {
    alert("Surgio un Error");
  } else {
    alert(`Salario Bruto: ${salarioBruto}, salario neto: ${salarioNeto}`);
  }
} else {
  alert("Error al recibir los datos");
}
