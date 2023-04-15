var textoNormal = document.getElementById('textoEncriptar');
var copiarTexto = document.getElementById("textoEncriptado");
var contenidoEncriptado = document.getElementById("contenedorEncriptado");
var botonCopiar = document.getElementById("botonCop");

botonCopiar.style.display = "none";
var texto = [];
var limpiar = true;
limpio = []
function validarCadena(cadena) {
   
    var minusculas = /^[a-z\s]*$/;

    
    if (minusculas.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

function limpiarfondo() {

    botonCopiar.style.display = "none";
    contenidoEncriptado.style.display = "block";
    copiarTexto.innerHTML = "";
    textoNormal.value="";


}

function encriptar() {

    if (textoNormal.value!=""){
    if (!limpiar) { texto = limpio; limpiar = true; }

    if (validarCadena(textoNormal.value)) {

        botonCopiar.style.display = "block";
        contenidoEncriptado.style.display = "none";

        let textoEncriptar = textoNormal.value;
        let textoSeparado = [];

        for (let i = 0; i < textoEncriptar.length; i++) {
            textoSeparado[i] = textoEncriptar[i];

            console.log(textoSeparado[i]);

        }

        console.log(textoSeparado);
        for (let i = 0; i < textoSeparado.length; i++) {

            if (textoSeparado[i] == "a") {

                texto[i] = "ai";

            }
            else if (textoSeparado[i] == "e") {

                texto[i] = "enter";

            }
            else if (textoSeparado[i] == "i") {
                texto[i] = "imes";

            }
            else if (textoSeparado[i] == "o") {
                texto[i] = "ober";

            }
            else if (textoSeparado[i] == "u") {
                texto[i] = "ufat";

            }

            else { texto[i] = textoSeparado[i]; }
        }
        limpiar = false;
        imprimir(texto);
        textoNormal.value = "";
        return texto;

    } else {
        console.log("La cadena contiene caracteres que no son letras minúsculas");
    }
}

else{

    console.log("No a ingresado ingun texto");
}

}


function imprimir(textoEn) {
    let textoImprimir = "";
    for (i = 0; i < texto.length; i++) {

        textoImprimir += textoEn[i];

    }

    console.log(textoImprimir);
    copiarTexto.innerHTML = textoImprimir;


}





