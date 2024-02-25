let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('cerrar');
let contenedor = document.querySelector('.contenedor');
let circulo = document.querySelector('.circulo');
let isScrolling = false;
let guardarScroll;


function capturarUltimoScroll() {
    let nuevoScroll = window.scrollY;
    return nuevoScroll;
}


abrir.addEventListener('click', () => {
    
    // Verificar si ya se está ejecutando la función
    if (isScrolling) {
        return;
    }

    // Bloquear la ejecución de la función
    isScrolling = true;

    // Hacer un desplazamiento a la parte superior de la ventana
    window.scrollTo(0, 0);
    
    // si el scroll de Y es mayor a cero, guarda la variable nuevamente
    if (capturarUltimoScroll() > 0) {
        guardarScroll = capturarUltimoScroll();
    } 
    
    // no dejar que hagan scroll si el menu desplegable esta abierto
    document.body.style.overflowY = 'hidden';

    // añadimos la clase de mostrar-nav para mostrar el boton de cerrar y abrir el menu nav
    contenedor.classList.add('mostrar-nav');
    circulo.classList.add('mostrar-nav')

    // Desbloquear la ejecución después de un breve tiempo (ESTO PARA EVITAR BUG DEL SCROLL HACIA ARRIBA)
    setTimeout(() => {
        isScrolling = false;
    }, 3000); 
    
});

cerrar.addEventListener('click', () => {

    // aliminamos la clase de mostrar-nav para mostrar el boton de cerrar y abrir el menu nav
    circulo.classList.remove('mostrar-nav');
    contenedor.classList.remove('mostrar-nav');
    
    window.scrollTo(0, guardarScroll);

    setTimeout(() => {
        // dejar que hagan scroll si el menu desplegable esta cerrado
        document.body.style.overflowY = 'auto';
    },250)
});


