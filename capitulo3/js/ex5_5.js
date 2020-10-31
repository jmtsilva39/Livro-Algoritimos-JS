/**Elaborar um programa que leia um número e calcule sua raiz quadrada. Caso a raiz seja exata (quadrados perfeitos), informá-la, caso contrário, informe: 'Não há raiz exata para ...' A Figura 3.5 ilustra uma excução desse programa */

function calcularRaiz(){
    //Entrada - Ler o número do campo
    var numero = Number(document.getElementById('inNumero').value);
    var resultado = document.getElementById('outResposta');

    //Tratar o não preenchimento
    if( numero == 0 || isNaN(numero)){
        alert("Preencha corretamente a caixa")
        numero.focus();
        return
    }
    
    //processamento

    raiz = Math.sqrt(numero)
    

    //Saída

    if((numero%raiz) == 0){
        resultado.textContent = "Raiz: " + raiz;
    } else{
        resultado.textContent = "Não há raiz exata para " + numero;
    }


}

btcalcular = document.getElementById('btCalcular');
btcalcular.addEventListener('click',calcularRaiz)