
export function header (){
        // Para almacenar datos en el localStorage
    //localStorage.setItem('clave', 'valor');

    // Para obtener datos del localStorage
    let valor = localStorage.getItem('x-access-token');

    // Comprobar si un valor existe en el localStorage
    if (valor !== null) {
        // El valor existe en el localStorage, puedes usarlo aquí.
        //console.log('Valor almacenado en localStorage: ' + valor);
        return valor
    } else {
        // El valor no existe en el localStorage.
        console.log('No se encontró ningún valor en localStorage para la clave especificada.');
    }
    
}