var textoNormal = document.getElementById('textoEncriptar');
var texto = [];

function encriptar() {

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


}


function imprimir(textoEn) {
    let textoImprimir = "";
    for (i = 0; i < texto.length; i++) {

        textoImprimir += textoEn[i];

    }

    console.log(textoImprimir);
    textoNormal.value="";

}


function descencriptar() {

    let textoDescencriptado = [];

    for (let i = 0; i < texto.length; i++) {

        if (texto[i] == "ai") {

            textoDescencriptado += "a";

        }
        else if (texto[i] == "enter") {

            textoDescencriptado += "e";

        }
        else if (texto[i] == "imes") {
            textoDescencriptado += "i";

        }
        else if (texto[i] == "ober") {
            textoDescencriptado += "o";

        }
        else if (texto[i] == "ufat") {
            textoDescencriptado += "u";

        }

        else { textoDescencriptado += texto[i]; }
    }
    console.log(textoDescencriptado);

}






function copiar() { }