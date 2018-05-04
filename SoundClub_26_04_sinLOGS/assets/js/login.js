let validateForm = function () {
    let _formValues = {};
    let _isValid = true;
    let _valid = document.getElementById('formulario').checkValidity();
    let ValoresForm = {};
    let cnt_ref = document.getElementById("passwordsignup").value;
   
    $('form .error').remove();

    $('input[name=Usuario]').each(function () {
        let exp = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}/;
        if (!exp.test(this.value)) {
            $('input[name=Usuario]').before('<div class="error">No valido!!</div>');
            _isValid = false;
        }
        _formValues[this.name] = this.value;
    });

    

    $('#passwordsignup').each(function () {
        ValoresForm[this.name] = this.value;
        let validez_contra = this.validity;
        if(this.value==""){
            $('#passwordsignup').before('<div class= "error" > Error: contraseña vacia!</div > ');
            _isValid=false;
        }
        if (validez_contra.tooShort) {
            $('#passwordsignup').before('<div class= "error" > Introduce una contraseña mas de 3 y menos de 12 letras!</div > ');
            _isValid=false;
        } 
    });

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
            window.location.href="./index.html";
        }

    }).fail(function (err) {
        setTimeout(function () {
           enviardatos(data_to_send);
            
        },60000)
        console.log('ERROR')
    });
    

};

$('#btnEntrar').click(function (evnt) {
    evnt.preventDefault();
    let nombreUsuario = document.getElementById("usuario").value;
    let cnt_ref_Usuario = document.getElementById("passwordsignup").value;
    let campos_registro ={
        Usuario: nombreUsuario,
        ref_contraseña: cnt_ref_Usuario
    };

    if (validateForm()) {
        enviardatos(campos_registro);
    } else{}
    


});
