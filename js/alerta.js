function verificarCondiciones(){
    if (entradaTexto.value != entradaTexto.value.toLowerCase() || entradaTexto.value != entradaTexto.value.normalize("NFD").replace(/\p{Diacritic}/gu, "")){
        document.querySelector("#alerta").classList.remove("alerta_gris");
        document.querySelector("#alerta").classList.add("alerta_roja");
    }else{
        document.querySelector("#alerta").classList.remove("alerta_roja");
        document.querySelector("#alerta").classList.add("alerta_gris");
    }
}