$('#RecuperarPSW').click(function(event){
	var  Correo, Exp ;
	 Correo=$('#Email').val();
	 Exp=/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	 

	if(Correo.length == 0 ){
		//alert(""Error...", "No debe de haber campos vacios", "error"");
		swal("Error...", "No debe de haber campos vacios", "error");
	}
	else if(Correo.length > 20){
		//alert(""Error...", "El correo es muy largo", "error"")
		swal("Error...","El correo es muy largo","error");
	}
	else if (!Exp.test(Correo)) {
		//alert("Error...","El formato del correo es invalido","error")
		swal("Error...","El formato del correo es invalido","error");
		}
});