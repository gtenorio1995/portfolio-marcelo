// capturar elementos
const menuBurguer = document.querySelector('#btn-burguer');
const nav = document.querySelector('#nav');
// criar a função
function menuToggle(){
    nav.classList.toggle('active');
}
// criar evento
menuBurguer.addEventListener('click', menuToggle);
// adicionar evento ao elemento 