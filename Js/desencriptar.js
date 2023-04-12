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
    imprimir(textoDescencriptado);
    return textoDescencriptado;

}
