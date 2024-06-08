// Código para o header
window.addEventListener("scroll", function(){
    let header = document.querySelector("#cabeçalho")
    header.classList.toggle("rolagem", this.window.scrollY > 390)
})

// Fução para mudar a cor tema
function mudaCor(corSelecionada) {
    let banner = document.getElementById("banner");

    // Faz com que a tela seja rolada para o topo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (corSelecionada == "roxo") {
        document.documentElement.style.setProperty('--cor01', "#351143");
        banner.style.backgroundImage = "url(imagens/background-roxo.jpg)";
    } else if (corSelecionada == "azul") {
        document.documentElement.style.setProperty('--cor01', "#002A6D");
        banner.style.backgroundImage = "url(imagens/background-azul.jpg)";
    } else {
        document.documentElement.style.setProperty('--cor01', "#006D66");
        banner.style.backgroundImage = "url(imagens/background-verde.jpg)";
    }
}

// código para o carrossel de textos
let indexatual = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
    items[indexatual].classList.remove('active');
    indexatual = (indexatual + 1) % totalItems;
    items[indexatual].classList.add('active');
}

setInterval(showNextItem, 5000);