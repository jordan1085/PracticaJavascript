class Cliente{

    constructor(nombre, apellido) {
        this.nombre = nombre,
        this.apellido = apellido
    }
    
    imprimirSaludo() {
        return `Hola ${this.nombre} ${this.apellido}`
    }

    imprimirDespedida() {
        return `A dios ${this.nombre} ${this.apellido}`
    }

    static fecha() {
        return 1;
    }
}

class Empresa{
    constructor(nombre, apellido, id, name) {
        super(nombre, apellido)
        this.id = id,
        this.name = name
    }

}

const nuevoCliente = new Cliente('Jordam', 'Hernando');

console.log(nuevoCliente.imprimirSaludo());
console.log(nuevoCliente.imprimirDespedida());
