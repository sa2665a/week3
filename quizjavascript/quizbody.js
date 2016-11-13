var read = require('read');
var Question = require('./question.js');

var Quiz = function(questions) {
	this.index = 0;
	this.questions = questions;
	this.points = 0;

	
	this.ask = function(){
		var askingQuestion = {
			prompt: this.questions[this.index].text
		};

		read(askingQuestion, this.displayAnswer.bind(this))	
	}

	this.displayAnswer = function(err, answerUser) {

		if (answerUser === this.questions[this.index].answer) {
			console.log("Correct answer");
			this.index ++;
			this.ask();
			 if (this.index < this.questions.length) {
			 	this.ask(); 
			 } else {
			 	console.log ("You are done!")
			 }
			} else {
  		console.log("Wrong answer. Try again");
  		this.ask();
		}
	};
	
}




var question1 = new Question("320 is a Mercedes or BMW?", "BMW",1);
var question2 = new Question("The President elected of the United States is?", "Donald Trump",2);
var question3 = new Question("Who has more worldcups between Brasil and Argentina?", "Brasil",3);
var arrayQuestions=[question1,question2,question3];
var quiz = new Quiz(arrayQuestions);
quiz.ask();



