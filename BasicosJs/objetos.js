
/////////////////// OBJETOS ///////////////////////////////////////////////
const producto = { // Esto se le conoce como object litera...

}
// Estas llaves despues del signo = representan un objeto
const producto = {
    nombre: // Esto se le llama una propiedad o llave del objeto
}

const producto = {
    nombre: 'Monitor 20 pulgadas' // Nota como en lugar del signo igual se utilizan : , esta sintaxis es propia de los objetos y representa el valor que tendrá la propiedad o la llave del objeto, muchas veces se les dice llave valor
}

// si deseas agregar más propiedades puedes hacerlo de la siguiente forma

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la
}

// Veamos como acceder a las propiedades de un objeto:
const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}


// Supongamos que deseamos acceder al nombre, en los objetos de javascript existe algo llamado la sintaxis de punto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma aunque no tan común es:
console.log(producto['nombre']);

// Añadir propiedades nuevas a un objeto...
// Para añadir nuevas propiedades se utiliza de la misma forma la sintaxis de punto
producto.imagen = "image.jpg";

// Finalmente para eliminar una propiedad se utiliza delete
delete producto.nombre;

// Veamos como asignar variables hacia un objeto
const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}
const nombre = producto.nombre;

// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...
// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas

const { nombre } = producto;


// si deseas extraer más variables;
const { precio } = producto;

console.log(nombre)
console.log(precio)

// O puedes hacerlo mejor con 
const {nombre, precio} = producto;

// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m'
    }
}

// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..
const { nombre, informacion, informacion: { peso, medida } } = producto;

// Si recuerdas una variable con const una vez que es definida no puede reasginarse su valor.


// const producto = "Monitor";
// producto = 'Tablet';
// console.log(producto);

// En el caso de los objetos veremos que tienen un comportamiento diferente, ya que sus propiedades si se pueden reescribir.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log(producto);

producto.disponible = false;

console.log(producto); // Puedes ver que lo pudimos modificar, a pesar de ser const, veamos como prevenir esto en el próximo video




"use strict"; // uso estricto del leguaje

// Evitara que se puedda modificar un objeto declarado con const
// Al declararlo se habilitad diferentes metodos:

///////////// Object Methods:

// Conjelar un objeto
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m'
    }
}

Object.freeze( producto ); 
// Freeze toma como argumento el objeto
// No podremos modificar el objeto prodicto
// Freeze tampoco permite agregar nuevas propiedaes


// Similar a Freeze, existe otro object method llamado Seal
// A diferencia de Freeze no se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes...
Object.seal(producto);
// Se pueden reasignar
producto.nombre = 'Tablet'; 

// Pero no eliminar
// delete producto.precio;
// Tampoco se pueden añadir nuevas
// producto.imagen = "imagen.jpg";

// Verificar si un objeto esta sellado
console.log(Object.isSealed(producto))

// Unir 2 objetos:
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}
const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}
// Una forma de hacerlo es con el object method llamado assign
const resultado = Object.assign(producto, medidas);

// THIS hace referencia al mismo objeto
// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: ()=> {
        console.log(`Producto tiene un precio de: ${this.precio}`);
    }
}

// Object Constructor
// Es un onjeto que recibe parametros en el orden que se declaran en los parentesis y luego los asigna a un valor 
function ObjectCosntructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
  
  const producto1 = new ObjectCosntructor('Televisor', 1000);
  // Podemos crear productos tomando como plantilla el ObjectCosntructor
  console.log(producto1);

// Object .keys .values .entries
console.log(Object.keys(producto));// nos devolverá un arreglo con los keys del objeto
console.log(Object.values(producto)); // nos devolverá un arreglo con los valores del objeto
console.log(Object.entries(producto)); // Entries nos va a retornar una matriz de llaves y valores
