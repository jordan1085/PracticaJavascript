const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// Iteramos un arreglo y comprobamos que un objeto exista
carrito.forEach(producto => {
    if(producto.nombre === 'Celular') {
        // console.log('ok');
    }
});

// Buscar un objeto 
const respuesta = carrito.find(producto => producto.nombre === 'Celular');
// console.log(respuesta);

//

// includes: 
const include = carrito.includes(x => x.nombre === 'Tablet');
console.log(include);

// Somo: almenos un producto tiene como nombre teclado
const some = carrito.some(x => x.nombre === 'Teclado');
console.log(some); // true


const precio = carrito.map(producto => producto.precio === 300);
// console.log(precio);

// FindIndex: devuelve el indice 
const mostrarIndice = carrito.findIndex( producto => producto.nombre === 'Bocinas' );
console.log(mostrarIndice);

// Reduce: suma
let total = 0;
const totalPagar = carrito.reduce((total, productos) => total + productos.precio, 0); // Se inicializa en 0
console.log(totalPagar);

// filter: filtra todos los prductos que sean mayores a 300 y los guarda en un nuevo array
const filter = carrito.filter(producto => producto.precio > 300);
console.log(filter);

// every: todos los productos deben ser mayores o oiguales a 300
const every = carrito.every( producto => producto.precio <= 300);
console.log(every); 

// concat: unir 2 arreglos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const resultado = meses.concat(meses2);
console.log(resultado);

// Tambien sse puede unir con sspread
const unirSpread = [ ...meses, ...meses2];
console.log(unirSpread);