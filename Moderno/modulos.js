//Los IIFE son funciones que se ejecutan inmediatamente que son leidas...
// Esta forma evitará que estas variables definidas en este archivo se puedan mezclar con las de otros archivos..

(function() {
    const nombreCliente =  'Juan';
    let ahorro = 200;

    // El problema es que implementar un IIFE, si evita que nuestro código se mezcle con otro, pero el problema que tendriamos es que si queremos tener un código más ordenado y separar en distintos archivos sería imposible hacerlo

    // Una solucion:
    window.nombreCliente =  'Juan';
})();

//

// Exportar elemento de un archivo 
// cliente.js
export const nombreCliente = 'Juan';

// Agregamos type="module" al archivo index
/*
    <script src="js/cliente.js" type="module"></script>
    <script src="js/app.js" type="module"></script>
*/

// Impoortar elemento a un archivo
// app.js
import {nombreCliente} from './cliente.jss'

// En react no se utiliza la extencion 

//

// Exportar una funcion:
// cliente.js
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

// app.js
import {mostrarInformacion} from './cliente.js'
console.log(mostrarInformacion);


// 


// Exportar una clase
// cliente.js
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

// app.js
import {Cliente} from './cliente.js'

let cliente = new Cliente('jordan', 10000);
console.log(cliente.mostrarInformacion());


//


//Heredar una clase exportada...

import { Cliente }  from './cliente.js';

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria ${this.categoria}`;
    }
}


//

// 6)  EXPORT DEFAULT

// Cada archivo puede tener múltiples exports, pero solo un export default, este export default puede tener un nombre o no...

// cliente.js
export default function nuevaFuncion() {
    console.log('Función por default')
}
// Solo hay 1 por archivo y no requiere nombre

// app.js
import nuevaFuncionAlias from './cliente.js';
nuevaFuncion();


// 
// Alias
import nuevaFuncionAlias {nombreCliente as clienteNombre} from './cliente.js';
