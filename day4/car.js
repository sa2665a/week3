var Car= function(model,noise) {
	this.model = model;
	this.noise = noise;
	this.wheels = 4 ;

};

Car.prototype.makeNoise = function() {
	console.log(this.noise);
};

var Car = new Car ("Mercedes", "BOOM!!")
Car.makeNoise();