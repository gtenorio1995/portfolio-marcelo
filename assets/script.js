// Captura dos itens
const menuBurguer = document.querySelector("#btn-burguer");
const nav = document.querySelector("#nav");
const links = document.querySelectorAll(".menu-link");
const tela = screen.width;

// Funcionalidade do botão menu hamburguer
menuBurguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Funcionalidade da menu - item selecionado
function selectedLink() {
  if (tela < 1024) { // Correção aqui
    links.forEach((item) => {
      item.classList.remove("selected");
    });
    this.classList.add("selected");
    nav.classList.toggle("active");
  }
}

links.forEach((item) => {
  item.addEventListener("click", selectedLink);
});