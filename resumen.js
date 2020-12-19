// FUNCIONES

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


function saludar(nombre = 'Desconocido', apellido = '') { // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Juan', 'De la torre');


const aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo('JS', 'ES');

// PROMISE

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


///////////////////////////////////////////////////////////////////////////////////////////////

// OBJETOS

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: ()=> {
        console.log(`Producto tiene un precio de: ${this.precio}`);
    }
}

// Object Constructor
function ObjectCosntructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
  
  const producto1 = new ObjectCosntructor('Televisor', 1000);

///////////////////////////////////////////////////////////////////////////////////////////////
// CLASS DECLARATION
class Cliente { 
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}
const juan = new Cliente('Juan', 400);
console.log(juan);

// Metodos y metodos estaticos de clases
class Cliente { 
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
    
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Slado de: ${this.saldo}`;
    }
    
    static bienvenida() { // No se necesitan instanciar y pertenece a la clase
        return 'Bienbenido al cajero';
    }
}
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenidda());


// Hederar clases

class Cliente { 
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Saldo de: ${this.saldo}`;
    }
}

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Empresa: ${this.categoria}`;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
// API

// Fetch API consumir datos desde un txt...

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {

    fetch('data/datos.txt') 
        .then( respuesta => {
            return respuesta.text();
        })
        .then( datos => {
            console.log(datos);
        })
        .catch( error => {
            console.log(error);
        })
}


// Fetch API desde un JSON (Array)
const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('data/empleado.json') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML({empresa,  id, nombre, trabajo}) {
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre} </p>
        <p>ID: ${id} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
    `
}


// Fetch API desde un JSON (Objeto)

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/empleados.json') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach( empleado => {
        const { id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre} </p>
            <p>ID: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;
    
}



// Fetch API desde una API

const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('https://picsum.photos/list') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML(datos) {
    
    const contenido = document.querySelector('#contenido');

    let html = '';

    datos.forEach( perfil => {
        const { author, post_url } = perfil;

        html += `
            <p>Autor: ${author} </p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    contenido.innerHTML = html;
    
}


// ASYNC AWAIT

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout( () => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente'); 
            } else {
                reject('No se pudo aplicar el descuento');
                
            }            
        }, 3000);

    });
}

// Async await
async function ejecutar() {
    try {
        const respuesta = await descargarClientes(); // Deten la ejecución hasta que sea ejecutado...
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }

}
ejecutar();

console.log( 2 + 2); // Este código se continua ejecutando mientras que el await sigue esperando por su respuesta