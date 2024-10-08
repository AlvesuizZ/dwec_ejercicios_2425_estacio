const pedirArrNumerosUsuario = () => {
  let numerosUsuario = 0;
  let arr = [];
  do {
    numerosUsuario = parseInt(
      prompt(
        "Cuantos numeros quieres introducir (introduce un valor superior al 0)"
      )
    );
  } while (isNaN(numerosUsuario) || numerosUsuario <= 0);

  for (let index = 0; index < numerosUsuario; index++)
    arr.push(parseInt(prompt(`Introduce el numero ${index+1}`)));

  return arr;
};

const sacarMediaArr = (arr) => {
  let sumaNumerosArr = 0;
  let media = 0;

  arr.forEach((numero) => {
    sumaNumerosArr += numero;
  });

  media = sumaNumerosArr / arr.length;

  return media;
};

const sacarSuperioresAlaMedia = (media, arr) => {
  const numerosMayoresAlaMedia = arr.filter((numero) => numero > media);
  return numerosMayoresAlaMedia.length;
};

const obtenerMaximoArr = (arr) => {
  const numeroMayor = Math.max(...arr);
  return numeroMayor;
};

const sacarNumeroMaximos = (nmax, arr) => {
  const numerosMayoresIgualesMayor = arr.filter((numero) => numero == nmax);
  return numerosMayoresIgualesMayor.length;
};

const mostrarArr = (arr) => {
  arr.forEach((n) => {
    console.log(n);
  });
};

let arrNumerosUsuario = pedirArrNumerosUsuario();
let media = sacarMediaArr(arrNumerosUsuario);
let numeroMayoresAlaMedia = sacarSuperioresAlaMedia(media, arrNumerosUsuario);
let numeroMaximoArr = obtenerMaximoArr(arrNumerosUsuario);
let cantidadNumerosIgualesAlMayor = sacarNumeroMaximos(numeroMaximoArr, arrNumerosUsuario)
console.log(`Numeros cantidad de numeros iguales al mayor: ${cantidadNumerosIgualesAlMayor}`)
console.log(`Numeros mayores ala media: ${numeroMayoresAlaMedia} `);
mostrarArr(arrNumerosUsuario);
