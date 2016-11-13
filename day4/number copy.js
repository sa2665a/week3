
var fs = require ('fs');

fs.readFile('number.txt','utf8',print);

function print (average,content) {

var numsArrays = content.split(":");
 var sum = numsArrays.reduce(function(a,b){return parseInt(a) + parseInt(b);
 });
 var avg = sum/numsArrays.length;
 console.log(avg);
 fs.writeFile("file2.txt",avg)


}




