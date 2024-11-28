class Libro{
    #titulo;
    #autor;
    #precio;

    constructor(titulo, autor, precio){
        if (!Util.validarTitulo(titulo)) throw new Error("Título inválido");
        if (!Util.validarAutor(autor)) throw new Error("Autor inválido");
        if (!Util.validarPrecio(precio)) throw new Error("Precio inválido");

        this.#titulo = titulo;
        this.#autor = autor;
        this.#precio = precio;
    }

    cambiarPrecioLibro(nuevoPrecio) {
        if (!Util.validarPrecio(nuevoPrecio)) throw new error("Precio Invalido") ;
        this.#precio = nuevoPrecio; 
    }

    mostrarDatosLibro(){
        return `El libro -> ${this.#titulo} de ${this.#autor}, cuesta: ${this.#precio.toFixed(2)}€`
    }

    get titulo() {
        return this.#titulo;
    }
    
    get autor() {
        return this.#autor
    }
    
    get precio() {
        return this.#precio;
    }

    set titulo(titulo) {
        this.#titulo = titulo;
    }
    
    set autor(autor) {
        this.#autor = autor;
    }
    
    set precio(precio) {
        this.#precio = precio;
    }
}


class Ebook extends Libro {
    #tamanoArchivo;
    #formato;

    constructor(titulo, autor, precio, tamanoArchivo, formato){
        super(titulo, autor, precio);
        if (!Util.validarTamanoArchivo(tamanoArchivo)) throw new Error("Tamaño invalido")
        if (!Util.validarFormato(formato)) throw new Error("Formato del archivo no valido")
        
        this.#tamanoArchivo = tamanoArchivo
        this.#formato = formato
    }

    descargar() {
        console.log(`Descargando ${this.titulo}.....`)
    }

    mostrarDatosLibro() {
        return `${super.mostrarDatosLibro()}, tamaño: ${this.#tamanoArchivo}MB, formato: ${this.#formato}`
    }

}