function limpiar() {
    <document.getElementById('miformulario').reset();
}

function sumar() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el resultadoes es:').innerHTML = x+y;
}
