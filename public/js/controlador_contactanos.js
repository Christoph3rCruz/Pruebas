$('#Enviar').click(function(event){
    var nombre, email, motivo;
    nombre = $('#nombre').val();
    email = $('#email').val();
    motivo = $('#motivo').val();
    exp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    exp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s:])(?!.*\s).{8,}$/;


    if(nombre.length == 0 || email.length == 0 || motivo.length == 0 ){
        swal("Error...", "No debe de haber campos vacios", "error");
    }
    else if(nombre.length >40){
        swal("Error...", "El nombre es muy largo", "error");
    }
    else if(email.length >40){
        swal("Error...", "El correo es muy largo", "error");
    }
    else if(motivo.length >40) {
        swal("Error...", "El motivo es muy largo", "error");
    }
    else if (!exp.test(email)){
         swal ("Error...", "El correo no es valido", "error");
    }
    
});