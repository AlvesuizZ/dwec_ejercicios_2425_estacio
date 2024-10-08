const sacarNota = (media) => {
  if (media >= 0 && media < 5) {
    return console.log("Suspenso");
  } if (media >= 5 && media < 7) {
    return console.log("APROBADO");
  }

  if (media >= 7 && media < 8.5) {
    return console.log("NOTABLE");
  }

  if (media >= 8.5 && media <= 10) {
    return console.log("SOBRESALIENTE");
  }

  return console.log("A ocurrido un error");
};

let sumaNumerosPromt = 0;
let media = 0;

for (let index = 1; index < 4; index++) {

  //Better Comments
  //! Si el número introducido no es correcto (es menor que 0 o mayor que 10), la media siempre se calcula
  sumaNumerosPromt += parseFloat(prompt(`Introduce tu nota ${index}`));
}

media = sumaNumerosPromt / 3;

sacarNota(media);
