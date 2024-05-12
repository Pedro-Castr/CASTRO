window.addEventListener("scroll", function(){
    let header = document.querySelector("#cabeçalho")
    header.classList.toggle("rolagem", this.window.scrollY > 390)
})

function mudaCor(corSelecionada) {
    if (corSelecionada == "roxo") {
        document.documentElement.style.setProperty('--cor01', "#5a348f");
    } else if (corSelecionada == "azul") {
        document.documentElement.style.setProperty('--cor01', "#3a86ff");
    } else {
        document.documentElement.style.setProperty('--cor01', "#8ac926");
    }
}