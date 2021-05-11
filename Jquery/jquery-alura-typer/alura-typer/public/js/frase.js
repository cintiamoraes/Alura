$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle(); //mostrando o spinner

    $.get("http://localhost:3001/frases", trocaFraseAleatoria) //URL errada para simular um problema
    .fail(function(){
        $("#erro").show(); //ao falhar mostra a mensagem de erro
        setTimeout(function(){
            $("#erro").toggle();//esconde o erro depois de 1,5segundos
        },1500);
    })
    .always(function(){ //sempre escondendo o spinner
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);//math.floor arredonda para baixo//
    //data.length retorna o numero de arrays, entao se alterar a frases não há problema. 

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);//atualiza o tempo de digitacao
}

function buscaFrase() {

    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();

    var dados = {id : fraseId}; //criacao do objeto JS que guarda a id

    //passando objeto como segundo parâmetro
    $.get("http://localhost:3001/frases", dados, trocaFrase)

    .fail(function(){
        $("#erro").toggle();

        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })

    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data) {

    console.log(data);

    var frase = $(".frase");
    frase.text(data.texto); //cuidado, texto com "o" no final 
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}


