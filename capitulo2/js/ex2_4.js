/*Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago, conform ilustra a Figura 2.10. 
*/

function calcular(){
    //entrada
   var inputPrecoQuilo = Number(document.getElementById('inputPrecoQuilo').value);
   var inputConsumo = Number(document.getElementById('inputConsumo').value);
   var campoPreco = document.getElementById('campoPreco')

//processamento
var preco = (inputConsumo*inputPrecoQuilo)/1000
//saída

campoPreco.textContent = "Valor a pagar R$: " + preco;

}

//criar o evento onclick
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click',calcular)
