window.addEventListener("scroll", function(){
    let header = document.querySelector("#cabeçalho")
    header.classList.toggle("rolagem", this.window.scrollY > 390)
}) 