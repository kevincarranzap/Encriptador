function verificarCondiciones(){
    if (entradaTexto.value != entradaTexto.value.toLowerCase() || entradaTexto.value != entradaTexto.value.normalize("NFD").replace(/\p{Diacritic}/gu, "")){
        document.querySelector(".alerta").style.color = "#dc1515";
        document.querySelector(".alerta svg path").style.fill = "#dc1515";
    }else{
        document.querySelector(".alerta").style.color = "#67808E";
        document.querySelector(".alerta svg path").style.fill = "#67808E";
    }
}