var entradaTexto = document.querySelector("#entrada");

entradaTexto.addEventListener("input", function(){
    entradaTexto.style.height = "1px";
    entradaTexto.style.height = (entradaTexto.scrollHeight)+"px";

    if(entradaTexto.value == ""){
        document.querySelector("#entrada").style.height = "235px";
        document.querySelector("#titulo_contenedor_procesado").style.display = "inline";
        document.querySelector("#mensaje_contenedor_procesado").style.display = "inline";
        document.querySelector("#texto_procesado").style.display = "none";
        document.querySelector("#boton_copiar").style.display = "none";
        document.querySelector(".contenedor_procesado").style.width = "327px";
        document.querySelector(".contenedor_procesado").style.gap = "16px";
        document.querySelector(".contenedor_procesado").style.marginBottom = "24px";
        document.querySelector(".alerta").style.color = "#67808E";
        document.querySelector(".alerta svg path").style.fill = "#67808E";
    }else{
        verificarCondiciones();
    }
})