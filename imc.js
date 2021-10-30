function imc() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var resultado = document.getElementById("resultado");
    var calculo = 0;

    if(altura != '' && peso != '') {
        if(parseFloat(altura) >= 0 && parseFloat(peso) >= 0) {
            if(altura.includes(',')) {
                altura = altura.replace(",", ".");
            }

            if(parseInt(altura) != parseFloat(altura)) {
                calculo = (peso/(altura*altura));
            }else {
                calculo = (peso/((altura/100)**2));
            }

            if(calculo < 18) {
                resultado.value = parseInt(calculo)+" - Abaixo do peso";
            }else if(calculo < 25) {
                resultado.value = parseInt(calculo)+" - Peso ideal";
            }else if(calculo < 30) {
                resultado.value = parseInt(calculo)+" - Acima do peso";
            }else if(calculo < 35) {
                resultado.value = parseInt(calculo)+" - Obesidade I";
            }else if(calculo < 40) {
                resultado.value = parseInt(calculo)+" - Obesidade II";
            }else {
                resultado.value = parseInt(calculo)+" - Obesidade III";
            }
        }

    
    }else {
        alert("Existem campos que não foram preenchidos!");
    }
}


