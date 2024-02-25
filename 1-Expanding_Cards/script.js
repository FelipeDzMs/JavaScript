
// tomamos los valores necesarios
let cartas = document.querySelectorAll('.carta');

cartas.forEach(carta => {
    carta.addEventListener('click', ()=>{
        borrarActivo();
        carta.classList.add('activo')
    })
})

function borrarActivo(){
    cartas.forEach(elemento => {
        elemento.classList.remove('activo');
    })
}