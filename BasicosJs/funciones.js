// Declaración de Función - Podemos llamarla antes o despues 
sumar();
function sumar() {
    console.log(2 + 2);
}
sumar();

// Expresión de función - Solo se puede llamar una ves creada por que la toma como variable
const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();

// Hoisting 

// Eso pasa porque JavaScript se ejecuta digamos en 2 vueltas - Eso se le conoce como Hoisting , la primer vuelta registra todas las funciones y determina las variables, esta etapa se le llama de creación, 
// la segunda pasada es la que executa tu codigo, se llama de ejecución.
// Por lo tanto el primer código funciona porque function se registra primero y después se ejecuta el código.
// el segundo no funciona porque si bien es una función no es declarada como tal, lo ve más bien como una variable...
// Esto se le conoce como hosting que basicamente son esas 2 etapas (creación y ejecución)

// básicamente tu código se ejecuta asi:
const sumar2;
sumar2(); // a estas alturas es undefined...
sumar2 = function() {
    console.log(3 + 3); // pero como ya habiamos llamado la función, se queda como undefined
}


// En JavaScript no hay librería estandard, pero si hay funciones que son parte digamos del Core...
alert('Hubo un error...');
prompt('Cual es tu edad?');


// Veamos la diferencia entre un método y una función...
const numero1 = 20;
const numero2 = "20";

// Aunque en realidad terminan siendo practicamente lo mismo, la forma en que se utilizan tiene que ver más que nada en el contexto que son utilizadas..
console.log( parseInt(numero2) ); // Esto es una función
console.log( numero1.toString()); // Esto es un método

// hora ese valor que se pasa en el parentesis, se llaman argumentos de la función, veamos como crear funciones que toman argumentos y parametros.


// Funciones que toman parametros y argumentos...

// Nuestra primera función no tiene nada de emocionante, es demasiado simple, para que tus funciones puedan ser más versatiles e inteligentes deberán utilizar parametros y argumentos

function saludar(nombre, apellido) { // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Juan', 'De la torre'); // Pablo y De la torre son argumentos, son los valores reales...
saludar();


// Parametros por default...

// Algunas veces mandaras llamar una función que no tendrá los argumentos que se requieren, por ejemplo cuando llenas tu perfil de facebook tal vez no llenas todos los campos,   en esos casos son muy convenientes por parametros por default, veamos nuestra función si solo le pasamos el nombre pero no el apellido

// Puedes ver que en la consola aparecerá undefined
function saludar(nombre = 'Desconocido', apellido = '') { // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Juan', 'De la torre');f // Pablo y De la torre son argumentos, son los valores reales...
saludar('Juan');
saludar();


// Funciones que retornan valores
function sumar(a, b) {
    return a + b;
}
const resultado = sumar(1,2);
console.log(resultado);


// En este video veremos lo que son los métodos de propiedad, es decir son funciones con una sintaxis similar a las de un método..
// también llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones...
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción con id: ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
    }
}
reproductor.reproducir(30);


// arrow Functions
const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}
const aprendiendo = () =>  {
    console.log('Aprendiendo JavaScript');
}
// una linea no requiere llaves
const aprendiendo = () => console.log('Aprendiendo JavaScript');
// retornar un valor
const aprendiendo = () => 'Aprendiendo JavaScript';


// Parametros en un arrow Function
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// si es un solo parmetro no ocupamos el parentesis
const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// multiples parametros si requieren parentesis
const aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo('JS', 'ES');


// ForEach y Map con arrow functions...
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

const nuevoArray = carrito.map(  producto =>  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `)
const nuevoArray2 = carrito.forEach( producto =>  console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} `));

console.log(nuevoArray);
console.log(nuevoArray2);
// Los arrow functions si no se coloca el return y queda en una sola linea dan por implicito el return.. en el map



// Arrow functions en métodos de propiedad
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: nombre =>  console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre =>  console.log(`Reproduciendo la Playlist ${nombre}`),

    // También existen los Set y Get si tienes experiencia con esos términos, y si no, set es para añadir un valor, get es para obtenerlo...

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {
    
// }
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');


// Probando set y get se utilizando de la siguiente forma
reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;