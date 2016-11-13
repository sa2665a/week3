var exampleArray = [2, -5, 10, 5, 4, -10,0];


function process (data) {
	var positions = [];
	data.forEach (function(value,i) {
		data.forEach (function (value2, j) {
			if (j<=i && value + value2 === 0 ) {positions.push (i + ","+ j)}
		});
	});
	positions.forEach(function(a) {
	console.log("resultados son: " + a);
});

}
process(exampleArray)
 

var average= '80,70,90,100'

function averagecolon (numbers) {

 var numsArrays = numbers.split(":");
 var sum = numsArrays.reduce(function(a,b){return parseInt(a) + parseInt(b);
 });
 var avg = sum/numsArrays.length;
 console.log(avg);

}
averagecolon(numbers);
 









