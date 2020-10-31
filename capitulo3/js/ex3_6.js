/**Em um determinado momento do dia, apenas notas de 10,50 e 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade ( ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque */

function calcular(){
    //obter o valor em uma variável
    inValorSaque = document.getElementById('inValorSaque');
    btSaque = document.getElementById('btSaque')
    outResposta1 = document.getElementById('outCampo1');
    outResposta2 = document.getElementById('outCampo2');
    outResposta3 = document.getElementById('outCampo3');
  

    valorSaque = Number(inValorSaque.value)

    if (valorSaque == 0 || isNaN(valorSaque)){
        alert("Digite o valor Direito")
        inValorSaque.focus();
        return;
    }
    

    //Processamento
    if(valorSaque%10 != 0 ){
        alert('Valor inválido para notas disponíveis (R$ 100, R$50, R$10)');
        inValorSaque.focus();
        return;    
    }

    //calcula notas de 100, 50, e 10

    var notasCem = Math.floor(valorSaque/100)
    var resto = valorSaque % 100;
    var notasCinquenta = Math.floor(resto/50)
    resto = resto%50;
    var notasDez = Math.floor(resto/10)


    //exibe as notas apenas se houver

    if(notasCem > 0){
        outResposta1.textContent = "Notas de 100 Reais: " + notasCem;
    }

    if(notasCinquenta >0 ){
        outResposta2.textContent = "Notas de 50 Reais: " + notasCinquenta;
    }

    if(notasDez > 0){
        outResposta3.textContent = "Notas de 10 Reais: " + notasDez;
    }
       



    //Saída
}

btSaque.addEventListener('click',calcular)