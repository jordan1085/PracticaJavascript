
// Creando un Set
// Un set te permite crear una lista de valores sin duplicados.
// Pocas veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados, pero sería más sencillo con un set... de hecho en algunas ocasiones termina siendo mejor opción que un arreglo o un objeto...

let numeros = new Set([1,2,3,4,5,6,7,3,3,3,3]);
console.log(numeros.size);

let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');

// Indica cantidad de elementos
console.log(carrito.size); 

// Comprobando que un valor existe en el set.
console.log( carrito.has('Camisa') );

// Eliminando del set
console.log( carrito.delete('Camisa') );
console.log( carrito.has('Camisa') );
console.log(carrito);

// Limpiar un set
carrito.clear();
console.log(carrito);

// Foreach a un set
carrito.forEach(producto =>  {
    console.log(producto);
})

// Foreach a un set
carrito.forEach((producto, index, pertenece) =>  {
    console.log(`${index} : ${producto}`);
    console.log(pertenece  === carrito); // nombre de la variable
})

// Convertir un set a un arreglo...
const arregloCarrito = [...carrito];
console.log(arregloCarrito);

// Eliminar duplicados 
const numeros = [10,20,20,30];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);

//////////////////////////////////////////


// WeakSet 
var ws = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 3000
}

const cliente2 = {
    nombre: 'Pedro',
    saldo: 3000
}

const nombre = 'Pedro';

ws.add(cliente); 
ws.add(cliente2);
// ws.add(nombre); // Solo se pueden agregar objetos

console.log( ws.has(cliente) ); 
console.log( ws.has(cliente2));  
// console.log( ws.has(nombre));  

// console.log( ws.delete(window)); 
console.log( ws.delete(cliente));
console.log( ws.has(cliente) ); 


// No tienen la propiedad size aunque si tienen length
// Tampoco son iterables ni tienen keys, values entries etc.


//////////////////////////////////////////////////////////////////////////

// Maps

// MAPS
// Listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo, a diferencia de un objeto puede tener la llave de cualquier tipo de dato...

// y en cuanto a performance los maps tienen mejor performance que los objetos, son especialmente diseñados para agregar o quitar elementos así como recorrer, también cuando son muy grandes tienen mejor performance que un objeto

let cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

// acceder a los valores
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));


// Métodos al MAP
// Tamaño del MAP
console.log(cliente.size);
// Contiene un valor
console.log(cliente.has('tipo'));
console.log(cliente.get('tipo'));
// Borrar
cliente.delete('nombre');


// Borrar el map
cliente.clear();
console.log(cliente);

// También se puede inicializar un map con diferentes valores...
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('nombre', 'Antonio');
// paciente.set('cuarto', 400);

console.log(paciente);


// Foreach a un map
cliente.forEach((datos, index) => {
    // console.log(datos);
    console.log(`${index}: ${datos}`);
});


// Wekmap

let key = {userId:1};
let key2 = {userId:2};
let weakmap = new WeakMap();

weakmap.set(key,"Alex");
weakmap.has(key); //true
weakmap.get(key); //Alex
weakmap.delete(key); // true
weakmap.get(key); //undefined

weakmap.set(key2,"Vicky");
weakmap.size; //undefined
key2=undefined;
weakmap.get(key2); //undefined