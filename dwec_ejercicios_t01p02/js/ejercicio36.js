let text = prompt("Escribe una frase:");
let Palabras = 0;

// \S+ busca grupos de caracteres que no sean espacios y g significa global no se parara tras la primera
let words = text.match(/\S+/g);

if (words) {
    Palabras = words.length;
}
console.log("La cantidad de Palabras es: " + Palabras);