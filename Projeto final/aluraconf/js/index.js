//Isolo este código que quero fazer com os três links abaixocom o seltor css//

function ativaScrollSuave(selector) {

    $(selector).click(function(event){//no evento click eu passo a função com o evento para ele não passar bruto//
        event.preventDefault();//cancelo o vento padrão que é ir rapido//

        var target = $(this).attr('href');/// estou pedindo ao Jquerya que seja retornado o valor do href//

        $('html, body').animate({//seleciono essas tag's e faço uma animação de scroll//
            scrollTop: $(target).offset().top
        }, 1000);  
    });
}

ativaScrollSuave('a[href*=panel-about]');//seletor de atributo em css//
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');