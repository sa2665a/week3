var fs = require ('fs');

function print (content) {
var numsArrays = content.split(",");
 var repeat = numsArrays.filter(function(elem,index,self){
 	return index = self.indexOf(elem) ;
 });
 console.log(result);


}




fs.readFile('norepeat.txt','utf8',print);