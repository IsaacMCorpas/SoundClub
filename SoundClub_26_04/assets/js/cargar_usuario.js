

let cargar_usuario_pagina=function(dato_usuario) {
    
    document.getElementById('usuario').setAttribute("idusuario",dato_usuario.id);
    document.getElementById('foto').innerHTML='<img  src="assets/images/'+ dato_usuario.imagen +'">';
    document.getElementById('nombre').innerHTML=dato_usuario.nombre +" "+ dato_usuario.apellidos;
    document.getElementById('descripcion').innerHTML=dato_usuario.descripcion;

    
};


let buscar_usuario=function (data_to_send) {
    $.ajax({
        //url: 'http://www.mocky.io/v2/5adf72153300005900e4d9af', 
        url:    'http://www.mocky.io/v2/5adfba3f3300002500e4da5f',
        method: 'POST'
        //data: data_to_send

    }).done(function (data) {
//        console.log('array del moncki : ', data, '    ');
        let lista_usuario=data;
        for (let i = 0; i < lista_usuario.length; i++) {
            if (lista_usuario[i].id==data_to_send) {
                console.log('done:', lista_usuario[i]);
                cargar_usuario_pagina(lista_usuario[i]);  
            } 
        }
        
    }).fail(function (err) {
        console.log('err:', err);
       // $('.mensaje').html('Ha habido un error..');

    })
    
}

/* let evento_click_usuario = function () {
    let valor_busqueda = document.getElementById('autocomplete-input').value;
    console.log('Ha entrado a mi function  :  ' + valor_busqueda);
    sessionStorage.setItem('nombre',valor_busqueda);
}
 */


if(document.getElementById('usuario')){

    let id=sessionStorage.getItem('idusuario');
    buscar_usuario(id);

}


/* let añadiramigos = function (data_to_send) {
    $.ajax({
        url: 'http://www.mocky.io/v2/5ad8cbe42f00005800cfdc32',  //true
        // url: 'http://www.mocky.io/v2/5ad8cbd42f00004f00cfdc31', //false
        method: 'POST',
        data: data_to_send

    }).done(function (data) {
        console.log('done:', data.result)
        if (data.result) {
            $('.btnaceptar').animate({
                opacity: 0.25,
                left: "+=50",
                height: "toggle"
            }, 2000);
            $('.btncancelar').animate({
                opacity: 0.25,
                left: "+=50",
                height: "toggle"
            }, 2000);
            setTimeout(function () {
                $('.botones').html('<p>Sois Amigos</p>')
            }, 3000);
            //$('#mensaje').html('No a sido añadido.....');
        }
    }).fail(function (err) {
        console.log('err:', err);
        $('.mensaje').html('Ha habido un error..');

    })

}
 */