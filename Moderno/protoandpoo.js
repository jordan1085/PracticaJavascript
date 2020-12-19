// Crear cliente
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const cliente1 = new Cliente('Jordan', 1000);
console.log(cliente1);

//Categoria cliente
Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo < 1000) {
        tipo = 'Bajo';
    } else if (this.saldo >= 1000 && this.saldo < 2000) {
        tipo = 'Medio';
    } else {
        tipo = 'Alto';
    }
    return tipo;
}
console.log(cliente1.tipoCliente());

// Retirar saldo
Cliente.prototype.retiraSaldo = function (retiro) {
    this.saldo -= retiro
}

// Imprimir contacto
Cliente.prototype.infoCliente = function () {
    return `Nombre: ${this.nombre}, saldo: ${this.saldo}`;
}
console.log(cliente1.infoCliente());
cliente1.retiraSaldo(200);
console.log(cliente1.infoCliente());


// Hederar el constructor 
function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); // Hereda el constructor de Cliente
    this.telefono = telefono;
}

const cliente2 = new Persona('jordan', 10000, 1213213 );
console.log(cliente2)

// Hederar funciones 
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;
// Hay que clonar antes de instanciar 

const cli = new Persona('Juan', 21222, 212212);
console.log(cli.infoCliente());

/////////////////////// POO ///////////////////////
// class Expression
const Cliente2 = class {
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}



// CLASS DECLARATION
class Cliente { 
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}
const juan = new Cliente('Juan', 400);
console.log(juan);




// Metodos y metodos estaticos de clases
class Cliente { 
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
    
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Slado de: ${this.saldo}`;
    }
    
    static bienvenida() { // No se necesitan instanciar y pertenece a la clase
        return 'Bienbenido al cajero';
    }
}
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenidda());



// Hederar clases

class Cliente { 
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Saldo de: ${this.saldo}`;
    }
}

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Empresa: ${this.categoria}`;
    }
}

const Entel = new Empresa('jorge', 1000, 997886, 'Telefonia');
/*
nombre:"jorge",
saldo:1000,
telefono:997886,
categoria:"Telefonia"
*/

console.log(Entel.mostrarInformacion());
// jorge, Saldo de: 1000

// Se reescriben los metodos de las clases  




// Propiedades privadas js
// Ahora en JavaScript de nueva cuenta las classes son algo nuevo, funcionan sobre prototypes, pero con una forma más sencilla, previamente la forma de hacerlo private era con un guion bajo, eso le daba a entender al programador que esa propiedad o método era privado pero aún asi no era como un private real...
// Solo se podran acceder a los valores desde la clase 
class Cliente { 
    #nombre = '';
    constructor( nombre, saldo = 0) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    nombreCliente() {
        return this.#nombre;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
}

const pedro = new Cliente('Pedro');
 console.log(pedro.nombreCliente() );

// SOLUCION
// console.log(pedro.#nombre);