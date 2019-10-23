$(document).ready(main);

var contador = 1 ;

function main(){
    $('.menu_nav').click(function(){

        if(contador == 1){
            $('.menu').animate({
                left: '0'
            });
            contador = 0;
        } else{
            contador = 1;
            $('.menu').animate({
                left: '-100%'
            });
        }
    });

};