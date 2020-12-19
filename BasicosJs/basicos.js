
///////////////////// VARIABLES ///////////////////////////////////////////////
// var era la forma de crear variables en versiones anteriores de ECMASscript hoy en día las opciones se reducen a 2
var producto = 'Monitor 23 Pulgadas'; 
let producto = 'Monitor 23 Pulgadas'; 
// Pueden inicializar una variable sin valor y asignarlo después


const producto = 'Monitor 30 Pulgadas';
// Una variable con const su valor no puede ser re-asignado:
// Por otro lado, las variables con const, deben iniciarse con un valor:
const precio;
precio = 20;
console.log(precio);

// Si recuerdas una variable con const una vez que es definida no puede reasginarse su valor.
// En el caso de los objetos veremos que tienen un comportamiento diferente, ya que sus propiedades si se pueden reescribir.

/////////////////// STRIGNS ///////////////////////////////////////////////
// Formas de declarar un string

const producto = 'Monitor 20 Pulgadas';
const producto2 = String('Monitor 24 Pulgadas');
const producto3 = new String('Monitor 30 Pulgadas'); // Esto crea un objeto cadena

// Veamos algunas reglas para crear los strings:
const producto = 'Monitor 20 Pulgadas'; // Utiliza comillas sencillas
const producto2 = "Monitor 20 Pulgadas"; // Utiliza comillas o dobles
// pero nunca las mezcles

// Escapar las comillas:
const producto3 = "Monitor 20 Pulgadas";
const producto4 = "Monitor 24\"";

// Metodos de string:
const producto = 'Monitor 20 Pulgadas ';
console.log(producto.length); 
// Conocer la extensión de una cadena, length es de los muy pocos métodos que no usan () y es más que nada porque no es un método como tal sino una propiedad.

// IndexOf
// Nos dirá que posición tiene el texto en caso de encontrarlo
// -1 Significa que no lo pudo encontrar
console.log(producto.indexOf("Pulgadas"));

// Includes
// Conocer si un texto existe
console.log(producto.includes('Monitor')); // Conocer si un texto existe
console.log(producto.includes('monitor')); // Conocer si un texto existe

// Eliminar el inicio
console.log(producto.trimStart()); // Elimina todos los espacios en blancos del inicio
console.log(producto.trimEnd()); // Elimina todos los espacios en blancos del final

// Los métodos en javaScript se pueden encadenar, es decir, colocarse uno junto al otro
console.log(producto.trimStart().trimEnd() ); // Cortar en ambas direcciones

// Un método (que ya tiene rato ) es trim que hace lo mismo
console.log(producto.trim().length);

// Replace 
const producto = 'Monitor 20 Pulgadas';
console.log(producto.replace("20", "24"));
console.log(producto.replace('Pulgadas', '"'));

// Slice te va a permitir extraer una parte de una cadena
console.log( producto.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
console.log(producto.slice(8));// Cortar desde el 8 hasta el fin
console.log(producto.slice(2, 10)); // cortar desde 2 hasta el 10
console.log(producto.slice(2,1)); // Si el primer número es mayor, no va a cortar hacia atras...

// Existe uno similar a Slice que se llama substring
console.log( producto.substring(0, 10) );
console.log( producto.substring(2, 1) );  // Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)

// Si has visto algunos sitios web muestran tu primer letra de tu nombre:
const nombre = "Juan";
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));

// Repeat Te va a permitir repetir una cadena de texto:
const producto = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`);
 
// Split
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

// .toUpperCase() te va a permitir cambiar un texto a todo mayusculas
const producto = 'Monitor 24 pulgadas ';
console.log(producto.toUpperCase() );

// .toLowerCase()
console.log(producto.toLowerCase() );

// .toString()
const cantidad = 200;
console.log(cantidad);
console.log(cantidad.toString());

// Metodos

// Concatenar:

// Veamos como concatenar o unir 2 textos o variables:
const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

console.log(producto.concat('En Descuento')); // Concactenar un string
console.log(producto.concat(precio)); // Concactenar una variable

// Otras formas de concatenar:
console.log(producto + precio); 
console.log(producto +  "Con un precio de " +precio); 
console.log("El Producto" + producto +  " tiene un precio de " + precio); // Esta forma se puede complicar
console.log("El Producto" , producto ,  " tiene un precio de ",  precio); // Otra forma

// ES6 trajo consigo una mejor forma de concatenar variables que es con algo llamado Template String o template literal
console.log(`El Producto ${producto} tiene un precio de ${precio}`);

/////////////////// NUMEROS ///////////////////////////////////////////////

// Una nota muy importante es que en la consola los números se muestran de diferente color cuando es número que cuando es un string que representa un número
const numero6 = 20;
const numero7 = "20";

// Otra forma de crear número 
const numero8 = new Number(20);
console.log(numero8);

// Estos signos se les conoce como operadores, hay para realziar sumas, multiplicaciones, restas y comparar si un número es mayor a otro
let resultado;
// Suma
resultado = numero1 + numero2;
// Resta
resultado = numero1 - numero2;
// Mult
resultado = numero1 * numero2;
// Division
resultado = numero1 / numero2;
// Modulo
resultado = numero1 % numero2;


// Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles y algunas actuan de forma algo extraña, asi que vamos a verlas.

let resultado; 

// Pi
resultado = Math.PI;
// redondeo
resultado = Math.round(2.5);
// redondeo abajo o arriba (ceil o floor )
resultado = Math.ceil(2.2);
// Raiz cuadrada
resultado = Math.sqrt(144);
// Abssoluto
resultado = Math.abs(-300);
// Potencia
resultado = Math.pow(8, 3);
// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);
// Max
resultado = Math.max(4,1,21,4,15,5,11,5);
// Aleatorio
resultado = Math.random();
// Aleatorio dentro de un rango:
resultado =  Math.floor( Math.random() * 30 );
console.log(resultado);

// El Orden en que se ejecutan las operaciones en JavaScript es igual que en la escuela
let resultado 
// El orden de las operaciones
resultado = 20 + 30 * 2;
resultado =  ( 20 + 30 ) * 2;

// 20% De descuento en un carrito de compra.
resultado = ( 20+10+30+40+50 ) * .20;
console.log(resultado);

// Veamos como ir incrementando un valor de 1 en 1 o en determinada cantidad
// Incluir incremento por 1 y menos 1

let puntaje = 5;
puntaje++;
puntaje--;
++puntaje;
--puntaje;

puntaje += 3;
puntaje -= 3;

console.log(puntaje);

// Veamos un par de funciones para convertir a números
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);

// Convertir de Strings a Números flotantes o Enteros
console.log(Number.parseInt(numero1)); // Convertir de String a Número
console.log(Number.parseFloat(numero2)); // Convertir a número con decimales 
console.log(Number.parseInt(numero3)); 

// Revisar si un número es entero
console.log(Number.isInteger(numero4) ); // Revisar si un número es entero o no
console.log(Number.isInteger(numero3) ); //

// Convertir String a numero
console.log(numero4.toString());


/////////////////// BOLEANOS ///////////////////////////////////////////////
// El tipo de dato boolean solo puede tener 2 valores, true o false, veamos como crearlos
const boolean1 = true;
const boolean2 = false;

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean2);
//También un Boolean se puede crear con la palabra new
const boolean3 = new Boolean(true);
console.log(boolean3);
console.log(typeof boolean3);

