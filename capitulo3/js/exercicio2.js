/**Elaborar um programa que leia a velocidade permitida em uma estrada  a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba "Sem Multa". Se a velocidade for de até 20% maior qu a permitida, exiba "Multa Leve". E, se a velocidade for superior a 20% maior que a permitida, exiba "Multa Grave" -  conforme ilustra a Figura 3.8.*/

function verificar(){

    //Entrada
var inVelocidadePermitida = document.getElementById('inVelocidadePermitida');
var inVelocidadeCondutor = document.getElementById('inVelocidadeCondutor');
var outResposta = document.getElementById('outResposta')

var velocidadePermitida = Number(inVelocidadePermitida.value);
var velocidadeCondutor = Number(inVelocidadeCondutor.value);

    //Processamento
if(velocidadeCondutor <= velocidadePermitida){
    outResposta.textContent = "Situação: Sem Multa"
}else{
    outResposta.textContent = "Situação: Multado"
}

    


}

var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificar)