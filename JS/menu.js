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
        document.documentElement.style.setProperty('--cor01', "#9205CE");
        banner.style.backgroundImage = "radial-gradient(circle, #9000cc, #9712d3, #9d1ed9, #a427e0, #ab30e7, #b137eb, #b83ef0, #be44f4, #c54bf7, #cc52f9, #d258fc, #d95fff)";
    } else if (corSelecionada == "azul") {
        document.documentElement.style.setProperty('--cor01', "#035393");
        banner.style.backgroundImage = "linear-gradient(to left top, #63bbff, #56b1f5, #49a7ec, #3b9de2, #2a93d9, #1f86cc, #1379be, #026db1, #035b9d, #034a89, #023976, #002962)";
    } else {
        document.documentElement.style.setProperty('--cor01', "#006D66");
        banner.style.backgroundImage = "linear-gradient(to top, #51bc9a, #46b290, #3aa786, #2d9d7d, #1f9373, #178b6b, #0d8264, #017a5c, #017154, #01694c, #016044, #00583d)";
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