const fnValidar01 = () => {
    let xTexto = document.getElementById("txtTexto").value;
    if(xTexto=="" ||/^\s+S/.test(xTexto)) {
        alert("Falta TEXTO...");
        return false;
    }

    let xNumero = document.getElementById("txtNumero").value;
    if(xNumero=="") {
        alert("Falta NÜMERO...");
        return false;
    }

    ///caso contrario///
    return true;	
}