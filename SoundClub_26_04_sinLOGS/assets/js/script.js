let validateForm = function () {
    let _formValues = {};
    let _isValid = true;
    let _valid = document.getElementById('formulario').checkValidity();
    let ValoresForm = {};
    let cnt_ref = document.getElementById("passwordsignup").value;
    let cnt_copy = document.getElementById("passwordsignup_confirm").value;

    $('form .error').remove();

    $('input[name=Usuario]').each(function () {
        let exp = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}/;
        if (!exp.test(this.value)) {
            $('input[name=Usuario]').before('<div class="error">No valido!!</div>');
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
        _isValid= false;
    } else {
        $('#passwordsignup_confirm').after('<div class= "error" > Muy Bien! Coincide!</div > ');
  
    };
    return _isValid;
};


let enviardatos = function (data_to_send) {
    
    $.ajax({
        url: 'http://www.mocky.io/v2/5ad782c23000004900e5849e',
        // FALSE url: 'http://www.mocky.io/v2/5ad789d63000004b00e584c2',
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
            
        },60000)
        console.log('ERROR')
    });
    

};

$('#btnEnviar').click(function (evnt) {
    evnt.preventDefault();
    let nombreUsuario = document.getElementById("usuario").value;
    let emailUsuario = document.getElementById("emailsignup").value;
    let cnt_ref_Usuario = document.getElementById("passwordsignup").value;
    let cnt_copy_Usuario = document.getElementById("passwordsignup_confirm").value;
    let campos_registro ={
        Usuario: nombreUsuario,
        email: emailUsuario,
        ref_contraseña: cnt_ref_Usuario,
        copy_contraseña: cnt_copy_Usuario
    };

    if (validateForm()) {
        enviardatos(campos_registro);
    } else{}
    


});
