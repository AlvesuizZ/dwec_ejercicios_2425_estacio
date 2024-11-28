class Util  {
    static validarTitulo(titulo) {
        return typeof titulo === "string" && titulo.trim().length > 0;
    }
    
    static validarAutor(autor) {
        return typeof autor === "string" && autor.trim().length > 0;
    }
    
    static validarPrecio(precio) {
        return typeof precio === "number" && precio > 0;
    }
    
    static validarTamanoArchivo(tamanoArchivo) {
        return typeof tamanoArchivo === "number" && tamanoArchivo > 0;
    }
    
    static validarFormato(formato) {
        const formatosValidos = ["PDF", "EPUB", "MOBI"];
        return formatosValidos.includes(formato.toUpperCase());
    }
}