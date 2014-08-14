
var a = 0;
var words = function(name, letter){
var k = letter;
var i = name;
var j = name.length;
	for(var z = 0; z<=j; z++){
		if(i.charAt(z) === k){
			a++;
		}else{

		}
	}
	console.log(a);
}
words("babalab", "b");