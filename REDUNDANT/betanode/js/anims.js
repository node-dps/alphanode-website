$(document).ready(function(){

    $('.landing h1').css({
        'letter-spacing': 0,
        'opacity': 1
    });
    setTimeout(function(){
        $('.landing .year').css({
            'opacity': 1
        });
    }, 400);
    setTimeout(function(){
        $('.landing .hi').css({
            'opacity': 1,
            'left': '15%'
        });
        $('.landing').addClass('ready');
    }, 1000);

});