$('#inicio_sesion').click(function(event){
    var email, password;
    email = $('#email').val();
    password = $('#password').val();
    exp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    exp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s:])(?!.*\s).{8,}$/;


    if(email.length == 0 || password.length == 0 ){
        swal("Error...", "No debe de haber campos vacios", "error");
    }
    else if(email.length >40){
        swal("Error...", "El correo es muy largo", "error");
    }
    else if(password.length <10) {
        swal("Error...", "La contraseña es muy corta", "error");
    }
    else if (!exp.test(email)){
         swal ("Error...", "El correo no es valido", "error");
    }
    else if (!exp_password.test(password)){
         swal ("Error...", "La contraseña no es valida", "error");
    }
});