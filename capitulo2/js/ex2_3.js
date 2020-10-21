function calcular(){

//Entrada
    var inputVeiculo = document.getElementById('inputVeiculo');
    var inputPreco = document.getElementById('inputPreco');
    var campoCarro = document.getElementById('outCarro');
    var campoEntrada = document.getElementById('outEntrada');
    var campoParcela = document.getElementById('outParcela');


    var veiculo = inputVeiculo.value;
    var preco = Number(inputPreco.value);

//Processamento

    var entrada = preco*0.5;
    var parcela = (preco/2)/12;


//Saída
campoCarro.textContent = "Promoção: " + veiculo;
campoEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
campoParcela.textContent = " + 12x de R$: " + parcela.toFixed(2);

}

//adicionar evendo onclick
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener("click",calcular)