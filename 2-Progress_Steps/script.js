// tomo los elementos necesarios
let barraProgreso = document.getElementById('progreso');
let circuloPasos = document.querySelectorAll('.paso');
let btnAtras = document.getElementById('ATR');
let btnSiguiente = document.getElementById('SIG');

/*
    cambiar la clase del activo, esto lo haremos usando la cantidad de elemento de
    circuloPaso, este es un array, necestiamos un elemento que repredente el inicio 
    del elemento activo )es decir 1
*/
let elementoActivo = 1;

// creamos un escuchador para el boton siguiente, el cual ejecuta la funcion siguientePaso
btnSiguiente.addEventListener('click', siguientePaso);

// creamos un escuchador para el boton atras, este ejecuta la funcio anteriorPaso
btnAtras.addEventListener('click', anteriorPaso);


/* FUNCIONES */

// boton siguiente
function siguientePaso() {
    // agrega uno mas para el elemento activo (porque es el siguiente)
    elementoActivo++;

    // debemos tener en cuenta que hay un limite de pasos, asi que no debe pasarse
    if (elementoActivo > circuloPasos.length) {
        elementoActivo = circuloPasos.length;
    }

    /*
        ahora ejecutamos la funcion que contiene:
            -cambio de estado activo
            -calcula el ancho (width) del elemento progreso para mostrar un avance en los pasos
            -valida si se habilita o deshabilita le boton
    */
    actualizarEstadoProgreso();
}

// boton atras
function anteriorPaso() {
    // restamos uno al elemento activo (se da un paso atras)
    elementoActivo--;

    // debemos tener en cuenta que el paso minimo es 1, no puede ser 0 o menor a 0
    if (elementoActivo < 1) {
        elementoActivo = 1;
    }

    /*
       ahora ejecutamos la funcion que contiene:
           -cambio de estado activo
           -calcula el ancho (width) del elemento progreso para mostrar un avance en los pasos
           -valida si se habilita o deshabilita le boton
   */
    actualizarEstadoProgreso();
}

// actualizar estado de los pasos
function actualizarEstadoProgreso() {
    // verificamos si el elemento debe tener o no la clase activo
    circuloPasos.forEach((circulo, index) => {
        if (index < elementoActivo) {
            circulo.classList.add('activo');
        } else {
            circulo.classList.remove('activo');
        }
    })

    // detectamos el elmento activo
    let pasoActivo = document.querySelectorAll('.activo');

    // calculamos el ancho para la barra de progreso
    barraProgreso.style.width = (pasoActivo.length - 1) / (circuloPasos.length - 1) * 100 + '%';

    // determinar si el boton se habilita o no
    if(elementoActivo === 1){
        btnAtras.disabled = true;
    }else if (elementoActivo === circuloPasos.length) {
        btnSiguiente.disabled = true;
    } else {
        btnAtras.disabled = false;
        btnSiguiente.disabled = false;
    }

}
