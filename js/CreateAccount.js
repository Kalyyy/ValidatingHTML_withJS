//get elements on form
var createAccount = function (){
    var wrongName = document.getElementById("name").value,
     wrongLastName = document.getElementById("lastName").value,
     wrongEmail = document.getElementById("email").value,
     wrongPassword = document.getElementById("password").value,
     gener,
     checkbox;
	//cleaning input camps
	var replacingName = wrongName,
		name,
		replacingLastName=wrongLastName,
		lastName,
		replacingEmail= wrongEmail,
		email,
		replacingPassword=wrongPassword,
		password;
	name=replacingName.replace(/[ =+'"ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç]/g,'');
	lastName=replacingLastName.replace(/[ =+'"ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç]/g,'');
	email=replacingEmail.replace(/[ =+'"ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç]/g,'');
	password=replacingPassword.replace(/[=+'"ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç]/g,'');
		//getting the gener from person
		if(document.getElementById("man").checked){
    gener="Man";
     }
     else if(document.getElementById("woman").checked){
    gener="Woman";
}
else if(document.getElementById("binary").checked){
    gener="Binary";
}
//accepting terms and conditions
if(document.getElementById("checkbox").checked){
       checkbox="i accept the terms and conditions";
    }

//Validating if the inputs are empty
	if(name=="" || lastName=="" || email=="" || password=="" || gener==null || checkbox==null){
		alert("You must fill in all fields");
	}
	else{
    //displaying the information
	alert("Nombre: "+name+"\nApellido: "+lastName+"\nemail: "+email+"\npassword: "+password+"\nGenero: "+gener+"\nterminos y condiciones: "+checkbox);
	}

}

	