function cesarCipher (message){
	
	var letters = message.split("");
	var secretmsg = letters.map(function(char){
	 	return char.charCodeAt(0) - 3;
	});
	var value = secretmsg.map(function(char){
		return String.fromCharCode(char);
	});

	return value.join("");
	
}

var encrypted = cesarCipher("pomon");
console.log(encrypted);