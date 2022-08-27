var botonEncriptar = document.querySelector(".boton_encriptar");

botonEncriptar.addEventListener("click", function(){
    var textoIngresado = entradaTexto.value;
    var textoEncriptado = "";

    for(var i=0 ; i < textoIngresado.length ; i++){
        if(textoIngresado[i]=='e'){
            textoEncriptado = textoEncriptado.concat("enter");
        }else if(textoIngresado[i]=='i'){
            textoEncriptado = textoEncriptado.concat("imes");
        }else if(textoIngresado[i]=='a'){
            textoEncriptado = textoEncriptado.concat("ai");
        }else if(textoIngresado[i]=='o'){
            textoEncriptado = textoEncriptado.concat("ober");
        }else if(textoIngresado[i]=='u'){
            textoEncriptado = textoEncriptado.concat("ufat");
        }else{
            textoEncriptado = textoEncriptado.concat(textoIngresado[i]);
        }
    }

    document.querySelector("#titulo_contenedor_procesado").style.display = "none";
    document.querySelector("#mensaje_contenedor_procesado").style.display = "none";
    document.querySelector("#texto_procesado").style.display = "inline";
    document.querySelector("#boton_copiar").style.display = "inline";
    document.querySelector(".contenedor_procesado").style.width = "343px";
    document.querySelector(".contenedor_procesado").style.gap = "32px";
    document.querySelector("#texto_procesado").textContent = textoEncriptado;
})