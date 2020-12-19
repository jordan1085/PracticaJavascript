
// Crar objetos con constructor
function Auto(marca, color, year) {
    this.marca = marca;
    this.color = color;
    this.year = year;
}

// Crear un objeto tomando como plantilla la 
const auto1 = new Auto('Ferrari', 'Rojo', 2012);

// Devolver las llaves del objeto
const llaves = Object.keys(auto1);
const valores = Object.values(auto1);
const llavesValores = Object.entries(auto1);

// Acceder a los valores de un objeto
console.log(auto1.marca); // Ferrari
console.log(auto1['year']); // 2012

// Cambiar los valores
auto1.color = 'Verde';
console.log(auto1.color); // Verde

// Eliminar valores

delete auto1.color;
console.log(auto1); //Auto {marca: "Ferrari", year: 2012}

// Evitar el cambiar valores 
"use strict"

// Congelar un objeto
Object.freeze( auto1 );

// Verificar si el objeo esta congelado
console.log(Object.isFrozen(auto1)); // false

// sellar un objeto para solo modifica propiedades 
Object.seal(auto1);

// Verificar si esta sellado
console.log(Object.isSealed(auto1)); // true

// Guardar los valores de un objeto en una varible con Destructuring
const { marca, year } = auto1;
console.log(marca); // Ferrari


// Unir 2 objetos
const producto = {
    "nombre": "Bebida"
};

const caracteristicas = {
    "Litros": 1
}

console.log(Object.assign(producto, caracteristicas));
// o con spread operator
console.log( {...producto, ...caracteristicas}) ;


// Metodos en funciones 
const producto = {
    nombre: "Televisor",
    precio: 200000,
    marca: "LG",
    informacion: function() {
        return `Este ${this.nombre} tiene un valor de ${this.precio}`
    },
    codigo: () => '122321331'
}

console.log(producto.informacion());
console.log(producto.codigo());