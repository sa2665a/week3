var words, message;

words = [
	"January",
	"lack",
	"caveats",
	"hazardous",
	"DOORS",
	"crying",
	"arrogantly",
	"climate",
	"proponent",
	"rebuttal"
	];

	message = decoder(words);
	console.log(message);

	function decoder(words) {
		var index = 0;
		var secretMessage = "";
		for ( var i=0; i < words.length; i++ ) {
			secretMessage += words[i][index];
			index = (index+1) %5;
		}
	
		return secretMessage
	}

	module.exports = decoder;