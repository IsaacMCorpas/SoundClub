$(function(){
    var header = document.getElementById('header');
    var headroom = new Headroom(header);//*Importante poner H en Mayúsculas//*
    headroom.init(); //*aquí la activas

    //Menu Responsive
    //Calculamos el ancho de la página
    /*primero tenemos que calcular el ancho para saber que va a pasar, 
    hago una variable llamada ancho a la cual le voy a decir, quiero acceder
    al objeto de window y le queremos extraer lo que és el ancho, quiero saber cuanto mide la ventana de mi dispositivo*/
    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        btnMenu = $('#btn-menu'),
        icono = $('#btn-menu .icono');

    /*lo siguiente es agregarle un condicional para preguntar si el usuario, 
    se encuentra en un tamaño meno a 700px, queremos ocultar los enlaces*/  
        if(ancho < 700) {
            enlaces.hide();
            icono.addClass('fa-bars');
        }
        //Evento que ejecuta el menu
        btnMenu.on('click',function(e) {
            enlaces.slideToggle();
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');
        });
        //con css mejor    
        $(window).on('resize', function() {
            if($(this).width() > 700){
                enlaces.show();
                icono.addClass('fa-times');
                icono.addClass('fa-bars');
            } else {
                enlaces.hide();
                icono.addClass('fa-bars');
                icono.addClass('fa-times');
            }

        });

});
