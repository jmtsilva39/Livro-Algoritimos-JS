/**  Elaborar um programa para uma Lan house de um aeroporto -  O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral. A Figura 2.12 exibe um exemplo com dados do programa.*/

function calcular(){

    //Entrada
    var inputValor = Number(document.getElementById('inputValor').value);
    var inputTempoUso = Number(document.getElementById('inputTempoUso').value);



    //Processamento
    var valorApagar = Math.ceil(inputTempoUso/15)*inputValor;


    //Saída
    var campoValor = document.getElementById('campoValor')
    campoValor.textContent = "Valor a Pagar R$ " +valorApagar.toFixed(2);

}

//criar registro onclick
btcalcular = document.getElementById('btCalcular').addEventListener('click',calcular)
