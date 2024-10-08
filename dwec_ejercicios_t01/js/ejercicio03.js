const pedirNumero = () => {
  let numeroPedido = parseInt(
    prompt("Dime un numero, para indicarte su factorial")
  );
  while (numeroPedido < 0) {
    numeroPedido = parseInt(
      prompt("Dime un numero, que sea mayor que cero para el factorial")
    );
  }
  return numeroPedido;
};

const sacarFactorial = (numero) => {
  //Aqui sacamos el total de la primera operacion ej: 5*4
  let total = ((numero * (numero - 1)) == 0) ? 1 : (numero * (numero - 1));

  //Aqui en la primera vuelta operamos directamente quitandole 2 continuacion del ej: total*3
  for (let index = numero - 2; index >= 1; index--) {
    total *= index;
  };

  return total;
};

const numeroUsuarioRecibido = pedirNumero();
const factorialNumeroRecibidoUsuario = sacarFactorial(numeroUsuarioRecibido);
console.log(`El factorial de ${numeroUsuarioRecibido} es: ${factorialNumeroRecibidoUsuario}`);
