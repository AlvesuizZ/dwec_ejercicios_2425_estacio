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

const tiposEnvio = [
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
        const deseaComprar = prompt("quieres comprar un libro (si o no)").toLowerCase();
        if (deseaComprar !== "si") break;
        console.clear();
        mostrarLibros();
        const opc = parseInt(prompt("Ingrese el número del libro que quieres comprar:")) - 1;

        if (!librosDisponibles[opc]) {
            console.log("opcion inválida. Intente de nuevo.");
            continue;
        }

        const libroSeleccionado = librosDisponibles[opc];

        if (pedido.librosPedido.includes(libroSeleccionado)) {
            console.log("Ya ha seleccionado este libro. coge otro.");
            continue;
        }

        if (libroSeleccionado instanceof LibroPapel) {
            libroSeleccionado.reducirStock();
        }

        pedido.annadirLibro(libroSeleccionado);
        console.log(`"${libroSeleccionado.mostrarDatosLibro()}" añadido al pedido.`);
    }
}

function gestionarEnvio() {
    console.clear();
    if (pedido.librosPedido.some((libro) => libro instanceof LibroPapel)) {
        console.log("Seleccione el tipo de envío:");

        while (true) {
            tiposEnvio.forEach((tipo, index) => {
                console.log(`${index + 1}. ${tipo.mostrarDatosTipoEnvio()}`);
            });

            const opc = parseInt(prompt("Ingrese el número del tipo de envío:")) - 1;

            if (tiposEnvio[opc]) {
                pedido.establecerTipoEnvio(tiposEnvio[opc]);
                console.log(`Tipo de envío seleccionado: ${tiposEnvio[opc].mostrarDatosTipoEnvio()}`);
                break;
            } else {
                console.log("Selección de envío inválida. Por favor, elija una opción válida.");
            }
        }
    } else {
        console.log("El pedido contiene solo ebooks. El coste de envío será 0.00€.");
    }
}

function aplicarDescuento() {
    const fechaActual = new Date();
    const mes = fechaActual.getMonth() + 1;
    if (mes === 11 || mes === 12) {
        console.log("¡Promoción! Se aplica un descuento del 20% a los libros.");
        pedido.aplicarDescuento(20);
    }
}

function mostrarPedidoFinal() {
    console.clear();
    pedido.calcularTotal();
    console.log("\nResumen del pedido:");
    console.log(pedido.mostrarDatosPedido());
}



console.log("Bienvenido a la Tienda de Libros")
seleccionarLibros();
gestionarEnvio();
pedido.calcularTotal();
aplicarDescuento();
mostrarPedidoFinal();


