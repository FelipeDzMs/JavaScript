// obtenemos el input y el boton
let input = document.getElementById('entradaBuscador');
let boton = document.getElementById('botonBuscador');

boton.addEventListener('click',() => {
    input.classList.toggle('activo');
})