let cargar_usuario = function (dato_usuario) {
    let cargar_pagina = '<ul>';
    for (var i = 0; i < dato_usuario.length; i++) {
        cargar_pagina = cargar_pagina + `<li  idusuario="${dato_usuario[i].id}" class="collection-item avatar">
                      <img src="assets/images/${dato_usuario[i].imagen}" alt="" class="circle">
                      <span class="title">${dato_usuario[i].nombre}  ${dato_usuario[i].apellidos}</span>
                      <a href="#!" class="secondary-content"><i class="material-icons">group_add</i></a>
                </li>`;
    }
    document.getElementById('tabla').innerHTML = cargar_pagina + '</ul>';

    $('li').click(function () {
        let idusuario=this.getAttribute("idusuario");
        console.log(idusuario);
        sessionStorage.setItem('idusuario',idusuario);
        window.location.assign("./usuario.html");
    });
    
};


let lista_usuario = function (data_to_send) {
    $.ajax({
        //url: 'http://www.mocky.io/v2/5adf72153300005900e4d9af', 
        url: 'http://www.mocky.io/v2/5adfba3f3300002500e4da5f',
        method: 'POST'
        //data: data_to_send

    }).done(function (data) {
        //        console.log('array del moncki : ', data, '    ');
        let lista_usuario = data;
        let usuario_mostrar = [];
        console.log('antes del for ', data_to_send.length);
        for (let i = 0; i < lista_usuario.length; i++) {
            console.log('dentro del for ' + i + ' : ' + lista_usuario[i].nombre.substr(0, data_to_send.length).toUpperCase());
            if (lista_usuario[i].nombre.substr(0, data_to_send.length).toUpperCase() == data_to_send.toUpperCase()) {
                usuario_mostrar.push(lista_usuario[i]);
            }
        }
 
        cargar_usuario(usuario_mostrar);

    }).fail(function (err) {
        console.log('err:', err);
        // $('.mensaje').html('Ha habido un error..');

    })

}

if(document.getElementById('tabla')){

    let texto=sessionStorage.getItem('nombre');
    lista_usuario(texto);

}



let evento_click_buscador = function () {
    let valor_busqueda = document.getElementById('autocomplete-input').value;
    console.log('Ha entrado a mi function  :  ' + valor_busqueda);
    sessionStorage.setItem('nombre',valor_busqueda);
}

