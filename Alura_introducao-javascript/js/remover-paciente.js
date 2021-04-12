var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {//vai escutar o evento de duplo click 
    event.target.parentNode.classList.add("fadeOut");//event.target é quem sofreu o evento 
    // o fadeout lá no CSS vai criar um efeito de esmaecer gradativamente conforme o tempo da função abaixo

    setTimeout(function() {//setTimeout vai executar a função depois de um determinado período de tempo. Funciona em milessegundos. Ou seja, vai executar a função de remoção após 500 milessegundos para apagar devagar a linha da tabela. 
        event.target.parentNode.remove();
    }, 500);

});
