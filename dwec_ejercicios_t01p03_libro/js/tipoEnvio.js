class TipoEnvio {
    #nombre;
    #precio;

    constructor(nombre, precio) {
        if(!Util.validarNombre(nombre)) throw new Error("Nombre no valido");
        if(!Util.validarPrecio(precio)) throw new Error("Precio no valido");

        this.#nombre = nombre;
        this.#precio = precio;
    }

    mostrarDatosTipoEnvio() {
        return `${this.#nombre}-> ${this.#precio.toFixed(2)}€`;
    }

    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return this.#precio;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    set precio(nuevoPrecio) {
        this.#precio = nuevoPrecio;
    }
}