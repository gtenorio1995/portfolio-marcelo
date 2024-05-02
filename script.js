// Funcionalidade do botão menu hamburguer
const menuBurguer = document.querySelector('#btn-burguer');
const nav = document.querySelector('#nav');

menuBurguer.addEventListener('click', () =>{
    nav.classList.toggle('active');
});
