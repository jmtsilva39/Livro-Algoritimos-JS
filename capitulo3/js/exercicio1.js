/**Elaborar um programa que leia um número. Informe se ele é par ou ímpar. A Figura 3.7 ilustra a tela de execução do programa. Para os exercícios, foi utilizada uma figura padrão, mas você pode substituí-la caso tenha interesse */

function calcular(){

    //Entrada
    var inNumero = document.getElementById('inNumero')
    var outResultado = document.getElementById('outResultado')

    var numero = Number(inNumero.value);

    //Processamento

    // 
    if(numero == 0 || isNaN(numero)){
        alert('Digita direito Mané')
        inNumero.focus()
        return;
    }

     outResultado.textContent = numero%2 ? ( "Resposta: " + numero + " O número é par") : ( "Resposta: " + numero + ' é Impar')
     /*
    if(numero%2 == 0){
        outResultado.textContent = ( "Resposta: " + numero + " O número é par")
    }else{
        outResultado.textContent = ( "Resposta: " + numero + ' é Impar')
    }

*/


    //Saída

}

var btVerificar = document.getElementById('btVerificar').addEventListener('click', calcular)
