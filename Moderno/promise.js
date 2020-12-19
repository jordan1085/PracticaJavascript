// Ejemplo de callback

// Listado de paises
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

// Un nuevo pais se agrega despues de 2 segundos...
function nuevoPais(pais, callback) {
    setTimeout( () =>  {
        paises.push(pais);
        callback();
    }, 2000  ); // Pero el segundo ya paso, y se agrega uno nuevo, ejecutamos el callback para que se vuelva a llamar la función
}

// Los paises se muestran despues de 1 segundo
function mostrarPaises() {
    setTimeout(  () =>  {
        paises.forEach( pais =>  {
            console.log(pais)
        });
    }, 1000 ); // Después de un segundo obtenemos los paises...
}

mostrarPaises(); // Opcional


// Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises); // mostrarPaises es el callback, una vez agregado alemania se va a ejecutar esa linea...



//



// Vamos a definir un promise
const aplicarDescuento = new Promise( (resolve, reject) => { // Puede ser arrow function...
    const descuento = true;

    // Comentar estas siguientes lineas para ver el Resolve...
    if(descuento) {
        resolve('Descuento Aplicado'); 
    } else {
        reject('No se pudo aplicar el descuento');
    }

});

aplicarDescuento
    .then( resultado =>  {
        console.log(resultado);
    }).catch( error => {
        console.log(error);
    });

    console.log(aplicarDescuento);

// En los Promises hay 3 valores posibles, pendiente, no se ha cumplido o rechazado...
// Fullfilled - se ha cumplido
// Rejected - se ha recahzado o no se pudo cumplir


// recuerda que gracias a las ventajas de los  arrow functions puedes colocar todo en una sola linea...

// Tal vez tengas la duda de si puedes ejecutar funciones para no tener mucho código, la respuesta es si...

function descuento() {
    console.log('Aplicando el Descuento...');
}