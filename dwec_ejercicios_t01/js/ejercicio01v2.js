const sacarNota = (media) => {
  if (media >= 0 && media < 5) {
    return "SUSPENSO";
  } else if (media >= 5 && media < 7) {
    return "APROBADO";
  } else if (media >= 7 && media < 8.5) {
    return "NOTABLE";
  } else if (media >= 8.5 && media <= 10) {
    return "SOBRESALIENTE";
  } else {
    return "ERROR";
  }
};

let sumaNumerosPromt = 0;
let media = 0;

for (let index = 1; index < 4; index++) {
  let nota = parseFloat(prompt(`Introduce tu nota ${index}:`));
  while (isNaN(nota) || nota < 0 || nota > 10) {
    alert("La nota introducida no es válida. Debe ser un número entre 0 y 10.");
    nota = parseFloat(prompt(`Introduce tu nota ${index} (entre 0 y 10)`));
  }
  sumaNumerosPromt += nota;
}

media = sumaNumerosPromt / 3;

console.log(`Media: ${media.toFixed(2)}. Calificación: ${sacarNota(media)}`);

