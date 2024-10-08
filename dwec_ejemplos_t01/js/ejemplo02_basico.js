console.log("T01 - Ejemplos");

/* var nombre = "Asoka";    
let edad = 25;        
const pi = 3.14; */      
ejemplo01();
console.log(nombre);
var nombre;
/*console.log(edad);
console.log(pi); */
ejemplo02();


/**** ZONA FUNCIONES ****/


function ejemplo01(){
    var nombre = "Sabine";    // var - global or function-scoped
    let edad = 25;         // let - block-scoped
    const pi = 3.14;      // const - block-scoped and constant 
    console.log("Dentro función: ",nombre);
    console.log("Dentro función: ",edad);
    console.log("Dentro función: ",pi);
}

function ejemplo02() {
    // String (cadena de texto)
    let cadena = "Hola, mundo"; // Esto es una cadena de texto

    // Number (número, ya sea entero o decimal)
    let numeroEntero = 42; // Esto es un número entero
    let numeroDecimal = 3.14; // Esto es un número decimal

    // Boolean (valor booleano: true o false)
    let verdadero = true;  // Esto es verdadero
    let falso = false;     // Esto es falso

    // Undefined (una variable declarada pero no inicializada)
    let indefinido; // El valor predeterminado es "undefined"

    // Null (ausencia intencional de cualquier valor)
    let vacio = null; // Intencionalmente sin valor

    // Symbol (identificador único, útil para propiedades de objetos únicas)
    let simbolo = Symbol("identificador único"); // Esto es un símbolo

    // BigInt (números enteros muy grandes)
    let numeroGrande = 9007199254740991n; // Esto es un BigInt

    // Mostrando los tipos y valores
    console.log("Cadena (String):", cadena, typeof cadena);
    console.log("Número entero (Number):", numeroEntero, typeof numeroEntero);
    console.log("Número decimal (Number):", numeroDecimal, typeof numeroDecimal);
    console.log("Boolean verdadero:", verdadero, typeof verdadero);
    console.log("Boolean falso:", falso, typeof falso);
    console.log("Indefinido (Undefined):", indefinido, typeof indefinido);
    console.log("Nulo (Null):", vacio, typeof vacio); // El tipo de `null` devuelve "object", aunque es un primitivo
    console.log("Símbolo (Symbol):", simbolo, typeof simbolo);
    console.log("Número grande (BigInt):", numeroGrande, typeof numeroGrande);
}



function ejemplo03() {
    let x = 1.01 + 1.02;
    console.log(x); //! 2.0300000000000002

    let x1 = 1.01;
    let x2 = 1.02;
    let x3 = x1 + x2;
    console.log(x3); //! 2.03

    /**
     * JavaScript no aplica automáticamente métodos como toFixed() o toPrecision() internamente. 
     * El motor de JavaScript, como V8 (usado en Chrome y Node.js) o SpiderMonkey (en Firefox), 
     * puede decidir cómo mostrar los números en ciertos entornos como la consola. 
     * Esto no significa que el número haya cambiado internamente, 
     * solo es una decisión de presentación más amigable por parte del motor.
     */
}

