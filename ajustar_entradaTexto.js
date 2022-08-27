var entradaTexto = document.querySelector("#entrada");

entradaTexto.addEventListener("input", function(){
    entradaTexto.style.height = "1px";
    entradaTexto.style.height = (entradaTexto.scrollHeight)+"px";
})
