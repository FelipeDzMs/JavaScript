let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('cerrar');
let contenedor = document.querySelector('.contenedor');
let circulo = document.querySelector('.circulo');
// alto del contenedor
const altoContenedor = contenedor.offsetHeight;

function inclinacionContenedor(ejeY, altoContenedor) {
    // obtener posicion en Y
    // console.log(`posicion scroll: ${ejeY}`);
    // console.log(`alto contenedor: ${altoContenedor}`);

    // cambiar alto del contenedor cuando el ejeY es igual o mayor al 70% del alto del contenedor

    let porcentajeContEjeY = (0.7 * altoContenedor);

    if (ejeY >= porcentajeContEjeY) {
        contenedor.style.height = `${altoContenedor * 1.1}px`;
    }

    // cambio del elemento trantransform-origin
    contenedor.style.transformOrigin = `0px ${ejeY}px`;
}

abrir.addEventListener('click', () => {

    // posicion del scrollY
    let posicionY = scrollY;

    // no dejar que hagan scroll si el menu desplegable esta abierto
    document.body.style.overflowY = 'hidden';

    // añadimos la clase de mostrar-nav para mostrar el boton de cerrar y abrir el menu nav
    contenedor.classList.add('mostrar-nav');
    circulo.classList.add('mostrar-nav')

    inclinacionContenedor(posicionY, altoContenedor)

});

cerrar.addEventListener('click', () => {
    
    // Removemoss la clase de mostrar-nav para mostrar el boton de cerrar y abrir el menu nav
    contenedor.classList.remove('mostrar-nav');
    circulo.classList.remove('mostrar-nav');

    /* volver a dejar la altura original del contenedor y permitir scroll*/
    setTimeout(() => {
        // 
        contenedor.style.height = `${altoContenedor}px`
        document.body.style.overflowY = 'auto';
    }, 600)
});


