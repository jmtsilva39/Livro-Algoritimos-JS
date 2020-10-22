/** Um supermercado está com uma promoção - Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens indicando a promoção - conforme o exemplo ilustrado na Figura 2.13 */


function calcular(){

    //entrada
    var inputProduto = document.getElementById('inputProduto').value;
    var inputPreco = Number(document.getElementById('inputPreco').value)
    var campoProduto = document.getElementById('campoProduto');
    var campoDesconto = document.getElementById('campoDesconto')

    //processamento

       var precoTotal = inputPreco+inputPreco+(inputPreco/2)

    //Saída
    campoProduto.textContent= inputProduto + " Promoção: Leve 3 por " + precoTotal.toFixed(2);
    campoDesconto.textContent = " O 3º produto custa apenas R$: " + (inputPreco/2).toFixed(2);

}

var btCalcular = document.getElementById('btCalcular').addEventListener('click',calcular)