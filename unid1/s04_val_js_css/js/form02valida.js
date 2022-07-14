const fnValidar02 = () => {
    let xPreferencia = document.getElementById("lstPreferencia").value;
    if(xPreferencia=="" ||/^\s+S/.test(xPreferencia)) {
        alert("Falta seleccionar PREFERENCIA...");
        return false;
    }

    let xMes = document.getElementById("lsMes").value;
    if(xMes=="") {
        alert("Falta selecionar MES actual...");
        return false;
    }

    ///caso contrario///
    return true;	
}