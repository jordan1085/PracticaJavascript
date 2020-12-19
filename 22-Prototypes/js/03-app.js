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