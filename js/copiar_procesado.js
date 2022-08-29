var botonCopiar = document.querySelector(".boton_copiar");

botonCopiar.addEventListener("click", function(){
    navigator.clipboard.writeText(document.querySelector(".texto_procesado").textContent);
});