
function converterDuracao(){
    //criar referência aos elementos da página
    var inTitulo = document.getElementById('inTitulo');
    var inDuracao = document.getElementById('inDuracao');
    var outTitulo = document.getElementById('outTitulo');
    var outResposta = document.getElementById('outResposta')

    //Obter conteúdo dos campos de entrada
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

    //arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao/60);
    //obtem o resto da divisão entre os números
    var minutos = duracao %60;

    //altera o conteúdo dos parágrafos de resposta
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + "hora(s) e " + minutos  + " minutos(s)";

}

//Cria uma referência ao elemento btConverter (botão)
var btConverter = document.getElementById('btConverter');
//Registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click",converterDuracao)


