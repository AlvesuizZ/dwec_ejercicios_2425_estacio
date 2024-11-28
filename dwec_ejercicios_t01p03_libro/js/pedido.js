class Pedido {
    #librosPedido = [];
    #tipoEnvioPedido = null;
    #precioTotalSinEnvio = 0;
    #precioTotalConEnvio = 0;
    #descuento = 0;

    hayLibros() {
        return this.#librosPedido.length > 0;
    }

    mostrarDatosPedido() {
        let librosInfo = "";
        for (const libro of this.#librosPedido) {
            librosInfo += `${libro.mostrarDatosLibro()}\n`
        }
        let envioInfo; 
        if (this.#tipoEnvioPedido) {
            envioInfo = this.#tipoEnvioPedido.mostrarDatosTipoEnvio()
        }else {
            envioInfo = "Sin envio definido"
        }

        return `Pedido:\n${librosDetalles}
        \nEnvío: ${envioDetalles}\n
        Precio total sin envío: ${this.#precioTotalSinEnvio.toFixed(2)}€\n
        Descuento aplicado: ${this.#descuento.toFixed(2)}€\n
        Precio total con envío: ${this.#precioTotalConEnvio.toFixed(2)}€`;
        }
    }