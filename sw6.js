var reverseString = function (j){
var i = j;

var i= j.length;
	i = i-1;

var reversedwords=""; 
	for (var x = i; x >=0; x--)
{
    reversedwords +=(j.charAt(x));
}

console.log(reversedwords)
}
reverseString("Bahay Kubo");