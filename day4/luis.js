var Luis = function(height,weight,decir) {
	this.height = height;
	this.weight= weight;
	this.decir = decir;

};

Luis.prototype.makeLuisitos = function() {
	console.log(this.decir);
};

var Luis = new Luis ("1.9m", "170lbs", "decir chorradas")
Luis.makeLuisitos();