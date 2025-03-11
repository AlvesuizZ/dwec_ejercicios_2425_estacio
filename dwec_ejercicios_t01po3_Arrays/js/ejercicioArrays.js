console.log("T0X - Ejercicio 0X");

let personajes = [
    {
        nombre: "Spider-Man",
        nombreReal: "Peter Parker",
        profesionReal: "Fotógrafo",
        editorial: "Marvel",
        superpoder: "Agilidad sobrehumana, sentido arácnido, fuerza mejorada",
        debilidad: "Familia, responsabilidades",
        heroe: "héroe",
        edad: 28,
        numeroApariciones: 2500,
        equipo: "Los Vengadores",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-616"
    },
    {
        nombre: "Batman",
        nombreReal: "Bruce Wayne",
        profesionReal: "Empresario",
        editorial: "DC",
        superpoder: "Inteligencia superior, combate cuerpo a cuerpo",
        debilidad: "Humanidad, miedo a perder seres queridos",
        heroe: "héroe",
        edad: 35,
        numeroApariciones: 3000,
        equipo: "Liga de la Justicia",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Iron Man",
        nombreReal: "Tony Stark",
        profesionReal: "Ingeniero, Empresario",
        editorial: "Marvel",
        superpoder: "Armadura tecnológica avanzada, inteligencia superior",
        debilidad: "Alcoholismo, ego",
        heroe: "héroe",
        edad: 40,
        numeroApariciones: 2200,
        equipo: "Los Vengadores",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-616"
    },
    {
        nombre: "Joker",
        nombreReal: "Desconocido",
        profesionReal: "Criminal",
        editorial: "DC",
        superpoder: "Ingenio criminal, inmunidad a toxinas",
        debilidad: "Insanidad",
        heroe: "villano",
        edad: 45,
        numeroApariciones: 1000,
        equipo: "Injusticia",
        nacionalidad: "Desconocido",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Wonder Woman",
        nombreReal: "Diana Prince",
        profesionReal: "Embajadora, guerrera",
        editorial: "DC",
        superpoder: "Fuerza sobrehumana, vuelo, habilidades de combate",
        debilidad: "Cuerdas mágicas",
        heroe: "héroe",
        edad: 3000,
        numeroApariciones: 1200,
        equipo: "Liga de la Justicia",
        nacionalidad: "Themyscirana",
        especie: "Amazona",
        universo: "Tierra-1"
    },
    {
        nombre: "Thor",
        nombreReal: "Thor Odinson",
        profesionReal: "Dios del Trueno",
        editorial: "Marvel",
        superpoder: "Control del trueno, vuelo, fuerza sobrehumana",
        debilidad: "Humildad (cuando sin Mjolnir)",
        heroe: "héroe",
        edad: 1500,
        numeroApariciones: 1500,
        equipo: "Los Vengadores",
        nacionalidad: "Asgardiano",
        especie: "Dios",
        universo: "Tierra-616"
    },
    {
        nombre: "Loki",
        nombreReal: "Loki Laufeyson",
        profesionReal: "Dios de las mentiras",
        editorial: "Marvel",
        superpoder: "Ilusionismo, cambio de forma, magia",
        debilidad: "Celos hacia Thor",
        heroe: "antiheroe",
        edad: 1000,
        numeroApariciones: 900,
        equipo: "",
        nacionalidad: "Asgardiano",
        especie: "Gigante de Hielo",
        universo: "Tierra-616"
    },
    {
        nombre: "Flash",
        nombreReal: "Barry Allen",
        profesionReal: "Forense",
        editorial: "DC",
        superpoder: "Súper velocidad, viaje en el tiempo",
        debilidad: "Demasiada velocidad puede destruir el tiempo",
        heroe: "héroe",
        edad: 30,
        numeroApariciones: 1500,
        equipo: "Liga de la Justicia",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Thanos",
        nombreReal: "Thanos",
        profesionReal: "Tirano galáctico",
        editorial: "Marvel",
        superpoder: "Fuerza inmensa, inteligencia táctica, uso del Guantelete del Infinito",
        debilidad: "Arrogancia, obsesión con la muerte",
        heroe: "villano",
        edad: 1000,
        numeroApariciones: 500,
        equipo: "Orden Negra",
        nacionalidad: "Titán",
        especie: "Eterno-Deviant",
        universo: "Tierra-616"
    },
    {
        nombre: "Superman",
        nombreReal: "Clark Kent (Kal-El)",
        profesionReal: "Periodista",
        editorial: "DC",
        superpoder: "Fuerza sobrehumana, vuelo, visión de rayos X, invulnerabilidad",
        debilidad: "Kryptonita",
        heroe: "héroe",
        edad: 35,
        numeroApariciones: 3000,
        equipo: "Liga de la Justicia",
        nacionalidad: "Kryptoniano",
        especie: "Extraterrestre (Kryptoniano)",
        universo: "Tierra-1"
    }
];

function espera(){
    setTimeout(() => {
        
    }, 15000);
}

function find1(personajes) {
    let result = personajes.find(({nombreReal}) => nombreReal === "Bruce Wayne");
    return result;
}

function find2(personajes) {
    let result;
    result = personajes.find(({numeroApariciones})=> numeroApariciones >= 2000);
    return result
}

function usarForEach(personajes){
    personajes.forEach(personaje => {
        console.log(`El personaje ${personaje.nombre} participa en el equipo ${personaje.equipo}`)
    });
}

function filter1(personajes){
    let result = personajes.filter(isMarvel)
    return result;
}

function filter2(personajes){
    let result = personajes.filter(isgte1000)
    return result
}

function filter3(personajes){
    let result = personajes.filter(isVillano)
    return `Hay ${result.length} villanos`
}

function filter4(personajes){
    let result = personajes.filter(noTieneEquipo);
    return result;
}

function map(personajes){
    let result = personajes.map(({nombre}) => nombre)
    return result
}

function map2(personajes){
    let result = personajes
        .map(({profesionReal, universo, editorial}) => {
        if(editorial === "DC" && universo==="Tierra-1"){
            return profesionReal
        }
        })
    .filter(value => value !== undefined); //el map me devuelve un array con 10 valores y algnos undefined con el filter los elimino para que quede ams bonito :)
    return result;
}

function reduce(personajes){
    return personajes.reduce((suma, personaje) => suma + (personaje.edad), 0);
}

function some(personajes){
    return console.log(personajes.some(isVillano));
}

function every(personajes){
    return console.log(personajes.every(isHuman))
}

function sort(personajes){
    const sorted = personajes.sort((personajes.numeroApariciones, personajes.numeroApariciones))
    return sorted
}

function isMarvel(personaje){
    return personaje.editorial === "Marvel"
};

function isgte1000(personaje){
    return personaje.edad > 1000
}

function isVillano(personaje){
    return personaje.heroe === "villano"
}
function noTieneEquipo(personaje){
    return personaje.equipo === "";
}

function isHuman(personaje){
    return personaje.especie === "Humano";
}

function app(){
    console.log("<---Usa el método find para encontrar al personaje cuyo nombre real sea Bruce Wayne.--->")
    console.log(find1(personajes));
    espera();
    console.log("<---Usa el método find para conseguir el personaje que tenga más de 2000 apariciones.--->")
    console.log(find2(personajes));
    espera();
    console.log("<---Usa el método forEach para imprimir en la consola el nombre y el equipo de cada personaje.--->")
    console.log(usarForEach(personajes));
    espera();
    console.log("<---Usa el método filter para conseguir todos los datos de los personajes de Marvel.--->")
    console.log(filter1(personajes))
    espera();
    console.log("Usa el método filter para conseguir todos los datos de los personajes mayores de 1000 años.")
    console.log(filter2(personajes))
    console.log("Usa el método filter para conseguir el número de los personajes de villanos.")
    console.log(filter3(personajes))
    console.log("Usa el método filter para encontrar todos los personajes que no tienen un equipo asignado.")
    console.log(filter4(personajes))
    console.log("Usa el método map para conseguir el nombre de todos los personajes.")
    console.log(map(personajes))
    console.log("Usa el método map para conseguir la profesión de todos los personajes de la Tierra-1 del universo DC")
    console.log(map2(personajes))
    console.log("Usa el método reduce para conseguir la suma de todas las apariciones de todos los personajes.")
    console.log(reduce(personajes))
    console.log(`Usa el método "some" para comprobar si hay algún personaje que sea anti-héroe.`)
    console.log(some(personajes))
    console.log(`Usa el método "every" para verificar si todos los personajes son humanos.`)
    console.log(every(personajes))
    console.log(`Usa el método "sort" para ordenar los personajes por el número de apariciones, de mayor a menor.`)
    console.log(sort(personajes))

}

app();