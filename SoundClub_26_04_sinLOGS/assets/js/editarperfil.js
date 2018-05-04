document.getElementById('files').addEventListener('change', function (event) {

    let files = event.target.files;
    for (let i = 0, f; f = files[i]; i++) {


        if (!f.type.match('image.*')) {
            continue;
        }

        let reader = new FileReader();

        reader.onload = (function (theFile) {

            return function (e) {
                document.getElementById('foto').innerHTML = '<img class="thumb" src="' + e.target.result +
                    '" title="' + escape(theFile.name) + '"/>';

            };
        })(f);

        reader.readAsDataURL(f);
    }
}, false);


let validateForm = function () {
    let _formValues = {};
    let _isValid = true;
    let _valid = document.getElementById('formulario').checkValidity();
    let ValoresForm = {};
    let cnt_ref = document.getElementById("passwordsignup").value;
    let cnt_copy = document.getElementById("passwordsignup_confirm").value;

    $('form .error').remove();

    $('input[name=nombre]').each(function () {
        let exp = /^[ A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ.-]{2,48}/;
        if (!exp.test(this.value)) {
            $('input[name=nombre]').before('<div class="error">No valido!!</div>');
            _isValid = false;
        }
        _formValues[this.name] = this.value;
    });
    $('input[name=apellidos]').each(function () {
        let exp = /^[ A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ.-]{2,48}/;
        if (!exp.test(this.value)) {
            $('input[name=apellidos]').before('<div class="error">No valido!!</div>');
            _isValid = false;
        }
        _formValues[this.name] = this.value;
    });
    $('input[name=emailsignup]').each(function () {
        let exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!exp.test(this.value)) {
            $('input[name=emailsignup]').before('<div class="error">No valido!!</div>');
            _isValid = false;
        }
        _formValues[this.name] = this.value;
    });
    $('input[name=ciudad]').each(function () {
        let exp = /^[ A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ.-]{2,48}/;
        if (!exp.test(this.value)) {
            $('input[name=ciudad]').before('<div class="error">No valido!!</div>');
            _isValid = false;
        }
        _formValues[this.name] = this.value;
    });
    $('input[name=direccion]').each(function () {
        let exp = /^[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?)* (((#|[nN][oO]\.?) ?)?\d{1,4}(( ?[a-zA-Z0-9\-]+)+)?)/;
        if (!exp.test(this.value)) {
            $('input[name=direccion]').before('<div class="error">No valido!!</div>');
            _isValid = false;
        }
        _formValues[this.name] = this.value;
    });
    $('input[name=instrumentos]').each(function () {
        let exp = /^[ A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ.-]{2,48}/;
        if (!exp.test(this.value)) {
            $('input[name=instrumentos]').before('<div class="error">No valido!!</div>');
            _isValid = false;
        }
        _formValues[this.name] = this.value;
    });

    $('#passwordsignup').each(function () {
        ValoresForm[this.name] = this.value;
        let validez_contra = this.validity;

        if (validez_contra.tooShort) {
            $('#passwordsignup').before('<div class= "error" > Introduce una contraseña mas larga!</div > ');
        } if (validez_contra.tooLong) {
            $('#passwordsignup').before('<div class= "error" > Introduce una contraseña mas corta!!</div > ');

        }

    });

    if (cnt_ref != cnt_copy) {
        $('#passwordsignup_confirm').after('<div class= "error" > Las contraseñas deben coincidir</div > ');
        _isValid = false;
    } else {
        

    };
    return _isValid;
};


let enviardatos = function (data_to_send) {

    $.ajax({
        url: 'http://www.mocky.io/v2/5ad782c23000004900e5849e',
        method: 'POST',
        data: data_to_send

    }).done(function (response) {
        console.log(response);
        if (response.result) {
            console.log('ENVIADO', data_to_send);
        }

    }).fail(function (err) {
        setTimeout(function () {
            enviardatos(data_to_send);

        }, 60000)
        console.log('ERROR')
    });


};

$('#btnEnviar').click(function (evnt) {
    evnt.preventDefault();
    let nombreUsuario = document.getElementById("nombre").value;
    let apellidosUsuario = document.getElementById("apellidos").value;
    let emailUsuario = document.getElementById("correo").value;
    let ciudadUsuario = document.getElementById("ciudad").value;
    let direccionUsuario = document.getElementById("direccion").value;
    let instrumentosUsuario = document.getElementById("instrumentos").value;
    let cnt_ref_Usuario = document.getElementById("passwordsignup").value;
    let cnt_copy_Usuario = document.getElementById("passwordsignup_confirm").value;
    let campos_editarPerfil = {
        Nombre: nombreUsuario,
        Apellido: apellidosUsuario,
        email: emailUsuario,
        Ciudad: ciudadUsuario,
        Direccion: direccionUsuario,
        Instrumentos: instrumentosUsuario,
        ref_contraseña: cnt_ref_Usuario,
        copy_contraseña: cnt_copy_Usuario
    };

    if (validateForm()) {
        enviardatos(campos_editarPerfil);
    } else { }


});