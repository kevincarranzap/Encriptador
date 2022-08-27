var botonDesencriptar = document.querySelector(".boton_desencriptar");

botonDesencriptar.addEventListener("click", function(){
    var textoDesencriptado = entradaTexto.value;
    
    var claves = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    for (var i = 0; i < claves.length; i++){
        textoDesencriptado = reemplazarClave(claves[i][0], claves[i][1], textoDesencriptado);
    }

    document.querySelector("#texto_procesado").textContent = textoDesencriptado;
    mostrarTextoProcesado();
})

function reemplazarClave(clave, reemplazo, texto){
    var inicio = 0;
    var fin = texto.length;
    var subCadena;
    var subCadenaModificada;
    while(texto.substring(inicio,fin).search(clave) != -1){
        temp = texto.substring(inicio,fin).search(clave);

        subCadena = texto.substring(inicio,fin);
        subCadenaModificada = texto.substring(inicio,fin).replace(clave,reemplazo);
        texto = texto.replace(subCadena,subCadenaModificada);
        
        inicio = inicio + temp + 1;
        fin = texto.length;
    }
    return texto;
}