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
        banner.style.backgroundImage = "url(imagens/purple-bg.png)";
    } else if (corSelecionada == "azul") {
        document.documentElement.style.setProperty('--cor01', "#002A6D");
        banner.style.backgroundImage = "url(imagens/blue-bg.png)";
    } else {
        document.documentElement.style.setProperty('--cor01', "#006D66");
        banner.style.backgroundImage = "url(imagens/green-bg.png)";
    }
}

// código para o carrossel de textos
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
    const currentItem = items[currentIndex];
    currentItem.classList.remove('active');
    currentItem.classList.add('exiting');

    currentIndex = (currentIndex + 1) % totalItems;
    const nextItem = items[currentIndex];
    nextItem.classList.add('active');

    setTimeout(() => {
        currentItem.classList.remove('exiting');
    }, 1000); // Correspondendo ao tempo de transição
}

setInterval(showNextItem, 5000);