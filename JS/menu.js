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
        banner.style.backgroundImage = "linear-gradient(to right bottom, #3e1646, #4a174d, #561854, #63175a, #701660, #7f1566, #8e136b, #9d106f, #b10d74, #c50877, #da0479, #ee037a)";
    } else if (corSelecionada == "azul") {
        document.documentElement.style.setProperty('--cor01', "#002A6D");
        banner.style.backgroundImage = "linear-gradient(to right bottom, #071e49, #112d63, #1a3d7f, #224e9c, #2a60ba, #226dc7, #1679d3, #0086df, #008ed7, #0094cc, #0099bf, #2e9cb2)";
    } else {
        document.documentElement.style.setProperty('--cor01', "#006D66");
        banner.style.backgroundImage = "linear-gradient(to right bottom, #004562, #00516a, #005e6f, #006970, #00756f, #007f6f, #00896c, #009266, #009d64, #00a761, #00b25c, #00bc55)";
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