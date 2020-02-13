var login = function (){	
	var wrongEmail = document.getElementById("email").value,
        wrongPassword = document.getElementById("password").value;
	var replacingEmail= wrongEmail,
		email,
		replacingPassword=wrongPassword,
		password;
	email=replacingEmail.replace(/[ =+'"ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç]/g,'');
	password=replacingPassword.replace(/[=+'"ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç]/g,'');
	


	if(email=="" || password==""){
		alert("You must fill in all fields");
	}
	else{
		alert("E-mail: "+email+"\nPassword: "+password);
	}
    
}