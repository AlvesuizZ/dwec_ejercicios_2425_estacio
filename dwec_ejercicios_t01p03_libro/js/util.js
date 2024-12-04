class Util  {
    static validarTitulo(titulo) {
        return typeof titulo === "string" && titulo.trim().length > 0;
    }
    
    static validarAutor(autor) {
        return typeof autor === "string" && autor.trim().length > 0;
    }
    
    static validarPrecio(precio) {
        parseFloat(precio);
        return typeof precio === "number" && precio > 0;
    }
    
    static validarTamanoArchivo(tamanoArchivo) {
        parseFloat(tamanoArchivo);
        return typeof tamanoArchivo === "number" && tamanoArchivo > 0;
    }

    static validarFormato(formato) {
        const formatosValidos = ["PDF", "EPUB", "MOBI"];
        return formatosValidos.includes(formato.toUpperCase());
    }

    static validarPeso(peso) {
        parseFloat(peso);
        return typeof peso === "number" && peso > 0;
    }

    static validarDimensiones(dimensiones) {
        return /^\d+x\d+x\d+$/.test(dimensiones);
    }

    static validarStock(stock) {
        parseInt(stock);
        return Number.isInteger(stock) && stock >= 0;
    }

    static validarDescuento(descuento) {
        parseFloat(descuento);
        if (typeof descuento !== "number" || descuento < 0 || descuento > 100) {
        console.error("El descuento debe ser un número entre 0 y 100.");
        return false;
        }
        return true;
    }

    static validarLibro(libro) {
    return (libro instanceof Libro)
    }

    static validarTipoEnvio(tipoDeEnvio) {
        return (tipoDeEnvio instanceof TipoEnvio)
    }
}