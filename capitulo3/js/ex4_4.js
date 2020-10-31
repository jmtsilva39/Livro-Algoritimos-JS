function calcularFuso(){
    var inHoraBrasil = document.getElementById('inHoraBrasil')
    var outResposta = document.getElementById('outResultado')

    horaBrasil = Number(inHoraBrasil.value);

    //Tratar o não preenchimento ou preenchimento errado (NaN)
    if (horaBrasil == "" || isNaN(horaBrasil)){
        alert("Informe a Hora Corretamente");
        inHoraBrasil.focus();
        return
    }

    //Processamento

    var horaFran = horaBrasil + 5; //Calculo da hora na frança

    if(horaFran > 24){
        horaFran -= 24;
    }

    //Saída
    
    outResposta.textContent = "Hora na França: " + horaFran.toFixed(2);

}
var btExibir = document.getElementById('btExibir');
btExibir.addEventListener("click", calcularFuso);