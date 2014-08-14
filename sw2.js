var coe = function(num){
	for(var i = 0; i <= num;i++){
	if (i % 3 == 0 && i % 5){
		console.log("ComputerEngineering");
}
	else if (i % 3 == 0){
		console.log("Computer");
}
	else if (i % 5 == 0){
		console.log("Engineering");
	}
	else{
		console.log(i);
	}
}

}
coe(100);