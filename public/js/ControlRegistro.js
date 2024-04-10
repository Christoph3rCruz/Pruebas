$('#Register').click(function(event){
    var Nombre, Apellido, Correo, PSW, CPSW, Exp, Exp2, ExpPSW;
     Nombre=$('#Nombre').val();
     Apellido=$('#Apellido').val();
     Correo=$('#Correo').val();
     PSW=$('#Contrasena').val();
     CPSW=$('#Ccontrasena').val();
     Exp=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
     Exp2=/^[a-z0-9!#$%&'+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-][a-z0-9])?$/;
     ExpPSW=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    if(Nombre.length == 0 || Apellido.length == 0 || Correo.length == 0 
    || PSW.length == 0 || CPSW.length == 0 ){
        swal("Error...", "No debe de haber campos vacios", "error");
    }

    else if(Nombre.length > 20){
        swal("Error...", "El nombre es muy largo","error");
    }
    else if(Apellido.length > 10){
        swal("Error...", "los apellidos son muy largo","error");
    }

    else if(Correo.length > 30){
        swal("Error...","El correo es muy largo","error");
    }
    else if (!Exp.test(Correo)) {
        swal("Error...","El formato del correo es invalido","error");
    }
    else if(PSW.length < 8){
        swal("Error...","La contraseña es muy corta","error")
    }
    else if (!ExpPSW.test(PSW)) {
        swal("Error...","EL formato de la contraseña es incorrrecto","error")
    }
    else if(CPSW.length < 8){
        swal("Error...","La contraseña es muy corta","error")
    }
    else if (!ExpPSW.test(CPSW)) {
        swal("Error...","EL formato de la contraseña es incorrrecto","error")
    }
    else if (!PSW.test(CPSW)){
        swal("Error...", "Las contraseñas no coinciden", "error")
    }
});
