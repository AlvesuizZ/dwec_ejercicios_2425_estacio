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
        if(this.hayLibros()){
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
    
            return `Pedido:\n${librosInfo}\n
            Envío: ${envioInfo}\n
            Precio total sin envío: ${this.#precioTotalSinEnvio.toFixed(2)}€\n
            Descuento aplicado: ${this.#descuento.toFixed(2)}€\n
            Precio total con envío: ${this.#precioTotalConEnvio.toFixed(2)}€`;
        }else{
            return console.log('No hay libros en el pedido')
        }
        }
    
    annadirLibro(libro) {
        this.#librosPedido.push(libro)
    }

    establecerTipoEnvio(tipoEnvio) {
        this.#tipoEnvioPedido = tipoEnvio;
    }

    aplicarDescuento(porcentaje) {
        this.#descuento = this.#precioTotalSinEnvio * (porcentaje / 100);
        console.log("El descuento es de: " + this.#descuento)
    }

    calcularTotal() {
        this.#precioTotalSinEnvio = this.#librosPedido.reduce((total, libro) => total + libro.precio, 0);

        if ( this.#librosPedido.some((libro) => libro instanceof LibroPapel) && this.#tipoEnvioPedido ) {

            this.#precioTotalConEnvio = this.#precioTotalSinEnvio - this.#descuento + this.#tipoEnvioPedido.precio;

        } else {

            this.#precioTotalConEnvio = this.#precioTotalSinEnvio - this.#descuento;
        }
    }

    get librosPedido() {
        return this.#librosPedido;
    }

    get tipoEnvioPedido() {
        return this.#tipoEnvioPedido;
    }

    get precioTotalSinEnvio() {
        return this.#precioTotalSinEnvio;
    }

    get precioTotalConEnvio() {
        return this.#precioTotalConEnvio;
    }

    get descuento() {
        return this.#descuento;
    }



    }