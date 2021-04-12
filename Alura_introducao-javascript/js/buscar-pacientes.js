var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();
    // essa função vai ensinar qual o tipo de requisição a função deve fazer. 
    //É XMLHttpREquest é responsável por fazer requisições HTTP.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    // a função open abre a conexão com o endereço que queremos fazer. 
    //vou fazer uma requisição do tipo GET. 

    xhr.addEventListener("load", function(){
        //essa função escuta a minha variável xhr para ver quando ela foi carregda executar uma função para mim.

        if (xhr.status == 200) {

            // depois que eu envio (SEND) eu fico escutando apra saber a resposta e o que devo fazer. 

            erroAjax.classList.remove("invisivel");//se não deu erro deixa invisível

            var resposta = xhr.responseText; //a função xhr tem uma expressão de resposta do texto
            //console.log(resposta);//imprime a resposta
            //console.log(typeof resposta);//imprime o tipo da resposta

            var pacientes = JSON.parse(resposta); //lê o conteúdo de texto em Json e transforma em um objeto JS

            //adicionaPacienteNaTabela(paciente); Busca apenas um paciente, mas como quero buscar um array eu tenho que iterar com for ou foreach

            pacientes.forEach(function(paciente){// para cada paciente eu chamo a função anônima para executar
                adicionaPacienteNaTabela(paciente);//para cada paciente eu adiciono um paciente.
            });

        } else {
            console.log(xhr.status);//mostra o numero do erro
            console.log(xhr.responseText);//mostra o erro da resposta
            var erroAjax = document.querySelector("#erro-ajax");// se deu erro vai mostrar a mensagem de erro.
            
        }
    });
  
        xhr.send();//envia a nossa requisição criada

    });