var entradaTexto = document.querySelector("#entrada");

entradaTexto.addEventListener("keydown", ({ key }) => {
    if(["Backspace", "Delete"].includes(key)){
        disminuirAltura_entradaTexto();
    }
});

window.addEventListener('resize', function (event){
    disminuirAltura_entradaTexto();
});

entradaTexto.addEventListener("input", function(){
    aumentarAltura_entradaTexto()

    if(entradaTexto.value == ""){
        document.querySelector("#contenedor_resultado").classList.remove("resultado_procesado");
        document.querySelector("#contenedor_resultado").classList.add("resultado_no_procesado");
        document.querySelector("#titulo_contenedor_procesado").style.display = "";
        document.querySelector("#mensaje_contenedor_procesado").style.display = "";
        document.querySelector("#texto_procesado").style.display = "";
        document.querySelector("#boton_copiar").style.display = "";
        document.querySelector("#alerta").classList.remove("alerta_roja");
        document.querySelector("#alerta").classList.add("alerta_gris");
        document.querySelector("#entrada").style.height = "";
    }else{
        verificarCondiciones();
    }
})

function aumentarAltura_entradaTexto(){
    if(screen.width < 600){
        if(entradaTexto.scrollHeight > 235){
            entradaTexto.style.height = (entradaTexto.scrollHeight)+"px";
        }
    }else if(screen.width < 992){
        if(entradaTexto.scrollHeight > 475.79){
            entradaTexto.style.height = (entradaTexto.scrollHeight)+"px";
        }
    }
}

function disminuirAltura_entradaTexto(){
    if(screen.width < 600){
        if(entradaTexto.style.height > 235){
            entradaTexto.style.height = "auto";
        }else{
            entradaTexto.style.height = "";
        }
    }else if(screen.width < 992){
        if(entradaTexto.style.height > 475.79){
            entradaTexto.style.height = "auto";
        }else{
            entradaTexto.style.height = "";
        }
    }
}