

function calcular(){
    //Entrada

    var inValor = document.getElementById('inValor');
    var valor = inValor.value;

    //Processamento  - //Verificar se o campo está vazio

    if (valor == 0 || isNaN(valor)){
        alert("Digite o Valor")
        inValor.value= ""
        inValor.focus();
        return;
    }
    outTempo = document.getElementById('outTempo');
    outTroco = document.getElementById('outTroco');


    if(valor >= 3 ){
        var troco = (valor - 3)
        outTempo.textContent = "Tempo: 120 Minutos";
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    }else if(valor >= 1.75 ){
        var troco = (valor - 1.75 )
        outTempo.textContent = "Tempo: 60 Minutos";
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    } else if (valor >= 1){
        var troco = (valor -1);
        outTempo.textContent = "Tempo: 30 Minutos";
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    } else if (valor < 1){
        alert('Insuficiente')
    }

}

var btConfirmar = document.getElementById('btConfirmar')
btConfirmar.addEventListener('click', calcular)