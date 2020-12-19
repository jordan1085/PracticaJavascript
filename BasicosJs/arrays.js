// Veamos primero como crear un Arreglo...
const numeros = [10,20,30,40,50];
console.log(numeros);

// En JavaScript cuando veas esos corchetes son buen indicativo de que esto es un arreglo, a diferencia de los objetos is recuerdas su sintaxis es la de unas llaves { }

// El arreglo anterior fue de números, también puedes crear uno de Strings por ejemplo y se puede crear utilizando la palabra new
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
console.log(meses);

// Ahora no es obligatorio que el arreglo tenga numeros o strings unicamente, también puede tener un poco de todo:
const deTodo = ["Hola", 10, true, "si", null, { nombre: 'Juan', trabajo: 'Programador'}, [1,2,3,4]];
console.log(deTodo);
// incluso un array puede tener un array dentro


// Veamos como acceder a los elementos de un arreglo...
const numeros = [10,20,30,40,50];

// esta vez estare utilizando 
console.table(numeros);

// La forma en la que accedes a un arreglo es por lo que se econoce como el indice en el arreglo, los arreglos inician en 0 usualmente aunuque hay lenguajes donde inician en 1
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[3])
console.log(numeros[20])

// Veamos algunas operaciones útiles en los arreglos,
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Si quieres saber cuantos elementos hay un arreglo puedes utilizar la propiedad
console.log(meses.length);

// Recorrer un arrglo con for
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

// Al Igual que los objetos un arreglo se puede modificar a pesar ade utilizar la palabra const
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

meses[0] = 'Nuevo Mes'
// También se puede añadir al final
meses[6] = 'Ultimo Mes'

// Añadir un elemento al array
const producto2 = {
    nombre: 'Celular', 
    precio: 500
}
carrito.push(producto2);

// Añadir al Inicio del array
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

// Veamos como Eliminar elementos de un arreglo...
// Eliminar el primer elemento...
carrito.shift();

// // Eliminar el ultimo elemento...
carrito.pop();

// Ahora supongamos que deseas eliminar del centro...
carrito.splice(1,0); // el segundo parametro es que tantos elementos vamos a borrar, 0 significa nada, entonces seria igual a no tener nada, si no le pasas un valor va a borrar todos a partir de ahi..
carrito.splice(1, 2);


// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}
const producto2 = {
    nombre: 'Celular', 
    precio: 500
}
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// AGREGANDO ELEMENTOS A UN ARRAY DE FORMA DECLARATIVA 
let resultado = [...carrito, producto]; // El arreglo original de carrito no se modifica por que toma una copia
 resultado = [...resultado, producto2];

 // Para añadir al inicio...
 resultado = [producto3, ...resultado];

// AGREGANDO ELEMENTOS A UN ARRAY DE FORMA IMPERATIVA 
carrito.push(producto);

// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:
const numeros = [10,20,30,40,50];
const [primero, , segundo, tercero ] = numeros;


// ForEach y Map
// De aquí en adelante estaremos viendo una serie de métodos de arreglos
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Recorrer un arreglo de la forma tradicional y mostrar su contenido...
for(let i = 0; i < carrito.length; i++ ){
    console.log( `Articulo: ${ carrito[i].nombre } Precio: $ ${carrito[i].precio} ` )
}

// ForEach
carrito.forEach( function(producto) {
    console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} ` )
})


// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...
const nuevoArray = carrito.map( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
 })