/* Uma farmácia está com uma promoção - Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia descrição e preço de um medicamento. Informe o valor do produto na promoção. A figura 2.11 apresenta a tela com um exemplo de dados de entrada e saída do programa.*/


function calcular(){

    //Entrada
     var inputMedicamento = document.getElementById('inputMedicamentos').value;
     var inputPreco = Number(document.getElementById('inputPreco').value);
     var campoPromocao = document.getElementById('outPromocao');
     var campoPreco = document.getElementById('outPreco')
     
    //Processamento
    preco = Math.floor(inputPreco)*2

    //Saída
    campoPromocao.textContent = 'Promoção de ' + inputMedicamento;
    campoPreco.textContent = 'Leve 2 por apenas R$: ' + preco.toFixed(2);


}

//registrar um evento associado ao botão

btCalcular = document.getElementById('btCalcular').addEventListener('click',calcular);

