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

    cambiarPrecioLibro(descuento) {
        if (!Util.validarDescuento(descuento)) throw new Error("Descuento inválido");
    
        const precioAnterior = this.#precio;
        const descuentoDecimal = descuento / 100;
        this.#precio = +(this.#precio * (1 - descuentoDecimal)).toFixed(2);
    
        console.log(
        `El precio del libro ${this.#titulo} ha cambiado de ${precioAnterior}€ a ${this.#precio}€ aplicando un descuento del ${descuento}%.`
        );
    }

    mostrarDatosLibro(){
        return `El libro -> ${this.#titulo} de ${this.#autor}, cuesta: ${this.#precio.toFixed(2)}€`;
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
        if (!Util.validarTitulo(titulo)) throw new Error("Título inválido");
        this.#titulo = titulo;
    }
    
    set autor(autor) {
        if (!Util.validarAutor(autor)) throw new Error("Autor inválido");
        this.#autor = autor;
    }
    
    set precio(precio) {
        if (!Util.validarPrecio(precio)) throw new Error("Precio inválido");
        this.#precio = precio;
    }
}


class Ebook extends Libro {
    #tamanoArchivo;
    #formato;

    constructor(titulo, autor, precio, tamanoArchivo, formato){
        super(titulo, autor, precio);
        if (!Util.validarTamanoArchivo(tamanoArchivo)) throw new Error("Tamaño invalido");
        if (!Util.validarFormato(formato)) throw new Error("Formato del archivo no valido");
        
        this.#tamanoArchivo = tamanoArchivo;
        this.#formato = formato;
    }

    descargar() {
        console.log(`Descargando ${this.titulo}.....`);
    }

    convertirFormato(nuevoFormato) {
        this.#formato = nuevoFormato;
    }

    comprobarStock() {
        return true;
    }

    mostrarDatosLibro() {
        return `${super.mostrarDatosLibro()}, tamaño: ${this.#tamanoArchivo}MB, formato: ${this.#formato}`;
    }

    get tamanoArchivo() {
        return this.#tamanoArchivo;
    }

    get formato() {
        return this.#formato;
    }

    set tamanoArchivo(nuevoTamanoArchivo) {
        if (!Util.validarTamanoArchivo(tamanoArchivo)) throw new Error("Tamaño invalido");
        this.#tamanoArchivo = nuevoTamanoArchivo;
    }

    set formato(nuevoFormato) {
        if (!Util.validarFormato(formato)) throw new Error("Formato del archivo no valido");
        this.#formato = nuevoFormato
    }

}

class LibroPapel extends Libro {
    #peso;
    #dimensiones;
    #stock;

    constructor(titulo, autor, precio, peso, dimensiones, stock) {
        super (titulo, autor, precio);

        if (!Util.validarPeso(peso)) throw new Error("Peso inválido");
        if (!Util.validarDimensiones(dimensiones)) throw new Error("Dimensiones inválidas");
        if (!Util.validarStock(stock)) throw new Error("Stock inválido");

        this.#peso = peso;
        this.#dimensiones = dimensiones;
        this.#stock = stock;
    }

    embalar() {
        console.log(`Embalando ${this.titulo}....`)
    }

    reducirStock() {
        if(this.#stock <= 0)throw new Error("No quedan existencias");
        this.#stock -= 1;
    }

    ampliarStock(cantidad) {
        if(!Number.isInteger(cantidad) || cantidad <= 0)throw new Error("Cantidad Invalida");
        this.#stock += cantidad;   
    }

    comprobarStock() {
        return this.#stock > 0
    }

    mostrarDatosLibro() {
        return `${super.mostrarDatosLibro()}, pesa: ${this.#peso}g, sus dimensiones son: ${this.#dimensiones}, y su stock es de: ${this.#stock}`;
    }

    get peso() {
        return this.#peso;
    }

    get dimensiones() {
        return this.#dimensiones;
    }

    get stock() {
        return this.#stock;
    }

    set nuevoPeso(peso) {
        if (!Util.validarPeso(peso)) throw new Error("Peso inválido");
        this.#peso = peso
    }

    set nuevasDimensiones(dimensiones) {
        if (!Util.validarDimensiones(dimensiones)) throw new Error("Dimensiones inválidas");
        this.#dimensiones = dimensiones
    }

    set nuevoStock(stock) {
        if (!Util.validarStock(stock)) throw new Error("Stock inválido");
        this.#stock = stock
    }
}

