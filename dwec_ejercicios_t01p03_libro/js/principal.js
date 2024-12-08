const librosDisponibles = [
    new Ebook("El Hobbit", "Tolkien", 9.0, 5, "PDF"),
    new Ebook("Festin de cuervos", "Martin", 15.5, 8, "EPUB"),
    new LibroPapel(
        "El temor de un hombre sabio",
        "Rothfus",
        12.25,
        500,
        "20x15x3 cm",
        10
    ),
    new LibroPapel("Dune", "Herbert", 20.0, 700, "25x17x5 cm", 5),
];

const TiposEnvio = [
    new TipoEnvio("Recogida en correos", 0.0),
    new TipoEnvio("Envio normal", 3.5),
    new TipoEnvio("Envio express", 8.65),
];

const pedido = new Pedido();

function mostrarLibros() {
    console.log("Libros disponibles para comprar: ");
    console.log("Ebooks: ");
    librosDisponibles.forEach((libro, index) => {
        if (libro instanceof Ebook) {
            console.log(`${index + 1}. ${libro.mostrarDatosLibro()}`);
        }
    });

    console.log("Libros en papel: ");
    librosDisponibles.forEach((libro, index) => {
        if (libro instanceof LibroPapel && libro.comprobarStock()) {
            console.log(`${index + 1}. ${libro.mostrarDatosLibro()}`);
        }
    });
}

function seleccionarLibros() {
    while (true) {
        const deseaComprar = prompt("¿Desea comprar un libro? (sí/no)").toLowerCase();
        if (deseaComprar !== "sí") break;

        mostrarLibros();
        const seleccion =
            parseInt(prompt("Ingrese el número del libro que desea comprar:")) - 1;

        if (!librosDisponibles[seleccion]) {
            console.log("Selección inválida. Intente de nuevo.");
            continue;
        }

        const libroSeleccionado = librosDisponibles[seleccion];

        if (pedido.librosPedido.includes(libroSeleccionado)) {
            console.log("Ya ha seleccionado este libro. Elija otro.");
            continue;
        }

        if (libroSeleccionado instanceof LibroPapel) {
            libroSeleccionado.reducirStock();
        }

        pedido.annadirLibro(libroSeleccionado);
        console.log(
            `"${libroSeleccionado.mostrarDatosLibro()}" añadido al pedido.`
        );
    }
}

mostrarLibros();
seleccionarLibros();
