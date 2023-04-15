var textoNormal = document.getElementById('textoEncriptar');
var copiarTexto = document.getElementById("textoEncriptado");
var contenidoEncriptado=document.getElementById("contenedorEncriptado");
var botonCopiar=document.getElementById("botonCop");

botonCopiar.style.display="none";
var texto = [];

function validarCadena(cadena) {
    // Expresión regular para validar solo letras minúsculas
    var minusculas = /^[a-z\s]*$/;
    var espacio=" ";

    // Comprobar si la cadena cumple con la expresión regular
    if (minusculas.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

function encriptar() {
 


    if (validarCadena(textoNormal.value)) {
        botonCopiar.style.display="block";

        contenidoEncriptado.style.display="none";

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

        imprimir(texto);
        textoNormal.value = "";
        return texto;

    } else {
        console.log("La cadena contiene caracteres que no son letras minúsculas");
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





