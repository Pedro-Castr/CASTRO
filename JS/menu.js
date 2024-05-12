window.addEventListener("scroll", function(){
    let header = document.querySelector("#cabeçalho")
    header.classList.toggle("rolagem", this.window.scrollY > 390)
})

function mudaCor(corSelecionada) {
    let banner = document.getElementById("banner");

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