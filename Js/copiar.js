function copiar() {

    let textoCopiado = copiarTexto;
    // Crear un rango
    var range = document.createRange();
    range.selectNode(textoCopiado);

    // Seleccionar el rango
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy");
    console.log(textoCopiado);
    selection.removeAllRanges();
}