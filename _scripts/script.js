var quantidade  = $('div#about ul').length;
var limite      = (quantidade * 336) * -1; 
var largura     = limite + 336;
var view_largura= $('section#sobre div#sobre-centro').width();

$('div#about').css('width',limite*-1);

$('div#sobre-direita').click( function() {
    
    posicao_atual   = $('div#about').position().left;
    nova_posicao    = posicao_atual - view_largura;
        
    if ( limite < posicao_atual - view_largura ) {

        $('div#about').animate({left:nova_posicao},1000);
    }

    if ( limite > ( nova_posicao - view_largura)) {
        $('div#sobre-direita ion-icon').css('opacity',0.5);
        $('div#sobre-direita ion-icon').css('cursor','not-allowed');        
    }

    $('div#sobre-esquerda ion-icon').css('opacity',1);
    $('div#sobre-esquerda ion-icon').css('cursor','pointer');

})

$('div#sobre-esquerda').click( function() {
    posicao_atual   = $('div#about').position().left;

    if ( posicao_atual + view_largura <= 0 ) {
        nova_posicao = posicao_atual + view_largura;
        $('div#about').animate({left:nova_posicao},1000);
    }

    if ( nova_posicao == 0 ) {
        $('div#sobre-esquerda ion-icon').css('opacity',0.5);
        $('div#sobre-esquerda ion-icon').css('cursor','not-allowed');        
    }

    $( 'div#sobre-direita ion-icon').css('opacity',1);
    $('div#sobre-direita ion-icon').css('cursor','pointer');      
})


/* Codigos de Animacao */

$('div#about ul:eq(0)').css('opacity',0);
$('div#about ul:eq(1)').css('opacity',0);
$('div#about ul:eq(2)').css('opacity',0);

$('section#domingo-perfeito').waypoint( function(direcao) {
    if ( direcao == "down") {
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');                
    }

    if (direcao == "up") {
        $('div.folha1').removeClass('animate__animated animate__fadeInUp');
        $('div.folha3').removeClass('animate__animated animate__fadeInUp');
        $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower'); 
    }
},{
    offset:'450px;'
})

$('section#pizza').waypoint( function(direcao) {
    if (direcao == 'down') {
        $('section#pizza p').addClass('animate__animated animate__fadeInUp');
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow');
    }

    if (direcao == 'up') {
        $('section#pizza p').removeClass('animate__animated animate__fadeInUp');
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow');
    }
},{
    offset:'450px;'
})

$('section#sobre').waypoint( function(direcao) {
    if (direcao == 'down') {
        $('div#about ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#about ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#about ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
    }

    if (direcao == 'up') {
        $('div#about ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div#about ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div#about ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
},{
    offset:'400px;'
})

/* Codigos da Navegação */

$('header h1').waypoint(function(direcao) {
    if( direcao == 'down') {
        $('nav').addClass('navEstatico'); 
        $('nav div').addClass('logoEstatico');
        $('nav ul').addClass('menuEstatico');
        $('nav ul li a').addClass('itensEstatico');
        $('nav ion-icon').addClass('iconeEstatico');
    } else {
        $('nav').removeClass('navEstatico');
        $('nav div').removeClass('logoEstatico'); 
        $('nav ul').removeClass('menuEstatico');
        $('nav ul li a').removeClass('itensEstatico');
        $('nav ion-icon').removeClass('iconeEstatico');
    }
},{
    offset:'150px;'
})

$('nav div').click(function() {
    $('html,body').animate( {scrollTop:$('header').offset().top}, 1000); 
})

$('nav ul li:eq(0)').click(function() {
    $('html,body').animate( {scrollTop:$('section#objetivo').offset().top}, 1000); 
})

$('nav ul li:eq(1)').click(function() {
    $('html,body').animate( {scrollTop:$('section#experiencia').offset().top}, 1000); 
})

$('nav ul li:eq(2)').click(function() {
    $('html,body').animate( {scrollTop:$('section#sobre').offset().top}, 1000); 
})
