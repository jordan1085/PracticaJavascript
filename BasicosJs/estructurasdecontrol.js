
// Operador if
const puntaje = '1000';

// es igual
if(puntaje == 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual");
}


// No es igual
if(puntaje != 1000) {
    console.log("Si! es diferente!");
}  else {
    console.log("No, no es diferente");
}
// comparador estricto de tipo y valor
if(puntaje === 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual");
}

// comparador estricto de tipo y valor
if(puntaje !== 1000) {
    console.log("Si es DIFERENTE (ESTRICTO) !");
} else {
    console.log("No no es igual");
}


// Veamos como utilizar los operadores de mayor que o menor que...
let dinero = 500;
let totalCarrito = 300;

if( dinero > totalCarrito ) {
    console.log('Pago Correcto');
} else {
    console.log('Fondos Insuficientes');
}

// También puede ser sin llaves
let dinero = 500;
let totalCarrito = 300;

if( dinero > totalCarrito )
    console.log('Pago Correcto');
else
    console.log('Fondos Insuficientes');

// El problema del else if es que si agregas múltiples llegan a ser complejos de leer...


// Cuando tienes múltiples condiciones por revisar, una forma fácil de leerlo es con un switch...
const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    default:
        console.log('Aún no has pagado');
        break;
}
// Los Switch también pueden ejecutar funciones, no solamente console.logs y también puedes tener 2 condiciones en un mismo if



// Buenas practicas con ifs...

// Veamos algunas buenas practicas, sencillas para escribirs ifs
// una muy común es que muchas personas hacen lo siguiente...

const autenticado = true;
if(autenticado === true) {
    console.log('El Usuario esta autenticado')
}

// Debido a que el IF ya retorna true, puedes eliminarlo y tu código será mejor..
// También muchas personas escriben ifs pensando que se podrán ejecutar 2 condiciones al mismo tiempo, el if solo va aejecutar la primera que se cumpla...

const puntaje = 500;

if(puntaje > 300) {
    console.log('Buen puntaje... felicidades');
} else if(puntaje > 400) {
    console.log('Excelente esfuerzo')
} else {
    console.log('No sabria decirte, pero buen esfuerzo...')
}
// puedes ver que ambas condiciones se cumplen, la de 300 y 400, muchas personas creen que se van a ejecutar ambas porque ambas se cumplen pero el if va a ejecutar la que más pronto cumpla su condición, también recuerda que el orden puede ser importante, lo más seguro es que quieras cambiar el orden del 300 y 400


// Previamente vimos los operadores ternarios, llegan a ser muy útiles ya que te dan un código más simplificado, veamos como se utilizan...
const autenticado = false;
const puedePagar = false
console.log( autenticado  ? 'Si esta autenticado' : 'No esta autenticado');

// El OR y el && también se pueden utilizar en el ternario
console.log( autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');

// Ternario anidado...
console.log( autenticado  ?  puedePagar ? 'Si puede pagar' : 'esta autenticado pero no puede pgar' : 'No esta autenticado');

