var Vicking= function(name,strength) {
	this.name = name;
	this.strength = strength;
	this.health = 100;

}

Vicking.prototype.attack = function() {
	return this.strength + Math.floor((Math.random() * 10) + 1);
}

Vicking.prototype.damage = function() {
	return(this.health - Math.floor((Math.random() * 10) + 1));
}

var vicking = new Vicking("Gravensen","130")
var vicking2 = new Vicking("Lewandowski", "100")
console.log((vicking.name)+ " "+ "strength" + " " + vicking.attack());
console.log((vicking.name)+ " "+ "health" + " "+ vicking.damage());
console.log((vicking2.name)+ " "+ "strength" + " " + vicking.attack());
console.log((vicking2.name)+ " "+ "health" + " "+ vicking.damage());


var Pit = function(vicking,vicking2) {
this.vicking = vicking;
this.vicking2 = vicking2;
var turns = 0

  this.fight = function () {
    var fighter = Math.round(Math.random() * 2 + 1);
    var war = this.vicking.attack();
    if (fighter === 2){
      if (war < this.vicking.health){
              console.log(turns); 
              turns += 1;
          this.vicking.damage(war);
        }
       }
 }
}
  
var fight1 = new Pit ("Gravensen", "Lewandowski")


