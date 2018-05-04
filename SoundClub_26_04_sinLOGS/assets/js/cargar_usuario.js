
let  cargar_categorias_musicales=function (idUsuario) {
    
}

let  cargar_instrumentos_musicales=function (idUsuario) {
    
}


let cargar_usuario_pagina=function(dato_usuario) {
    
    document.getElementById('usuario').setAttribute("idusuario",dato_usuario.id);
    document.getElementById('foto').innerHTML='<img  src="assets/images/'+ dato_usuario.imagen +'">';
    document.getElementById('nombre').innerHTML=dato_usuario.nombre +" "+ dato_usuario.apellidos;
    document.getElementById('descripcion').innerHTML=dato_usuario.descripcion;
    cargar_categorias_musicales(dato_usuario.id);
    cargar_instrumentos_musicales(dato_usuario.id);

    
};


let buscar_usuario=function (data_to_send) {
    $.ajax({ 
        url:    'http://www.mocky.io/v2/5aeb55283000005f005754c3',
        method: 'POST'

    }).done(function (data) {
        let lista_usuario=data;
        for (let i = 0; i < lista_usuario.length; i++) {
            if (lista_usuario[i].id==data_to_send) {
                console.log('done:', lista_usuario[i]);
                cargar_usuario_pagina(lista_usuario[i]);  
            } 
        }
        
    }).fail(function (err) {
        console.log('err:', err);

    })
    
}

if(document.getElementById('usuario')){

    let id=sessionStorage.getItem('idusuario');
    buscar_usuario(id);

}
