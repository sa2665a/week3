var read = require('read');

// Sample Question
// options = {
//     prompt: "What's your name?\n>"
// }

// read(options, displayName)

// function displayName (err, name){
//     console.log("Your name is: " + name)
// }

var Question = function (text,answer,id){
	this.text= text;
	this.answer=answer;
	this.id = id;


}

module.exports = Question;




// var question1 = new Question("320 is a Mercedes or BMW?", "BMW",1);

// askingQuestion={
// 	prompt: question1.text
// }
// 		read(askingQuestion, displayAnswer);

// function displayAnswer(err, answer){
// 	if (answer!==question1.answer){
// 	 	console.log("Wrong answer. Try again");
// 	}else{
// 			console.log("Correct answer");
// 	}
// }






// question1.askQuestion();

// var question2 = new Question ("Ronaldo is portuguese?")
// question2.askQuestion();


// var JavaScriptQuiz = new Quiz ();
// JavaScriptQuiz.askQuestion(question1);
// JavaScriptQuiz.askQuestion(question2);