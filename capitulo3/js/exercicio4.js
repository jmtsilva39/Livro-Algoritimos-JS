/**Elaborar um programa que leia três lados e verifique s les podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes). */

function verificar(){

    inLadoA = document.getElementById('inLadoA');
    inLadoB = document.getElementById('inLadoB');
    inLadoC = document.getElementById('inLadoC');
    outResposta = document.getElementById('outResposta');
    outTipo = document.getElementById('outTipo');



    ladoA = Number(inLadoA.value);
    ladoB = Number(inLadoB.value);
    ladoC = Number(inLadoC.value);


    if(ladoA == 0 || ladoB ==0 || ladoC ==0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) ){
        alert("Digite o Valor Corretamente");
        return;
    }


    // 
if( ((ladoA + ladoB) >= ladoC) && ((ladoB + ladoC) >= ladoA) && ((ladoC + ladoA) >= ladoB)){

    outResposta.textContent = " Lados podem Formar um Triângulo"
}else{
    outResposta.textContent = "Lados não podem formar um triângulo"
}



}


btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', verificar)