var drawTriangle = function(level){
	for(var i =1;i<=level;i++){
		var j = 0;
		while(j<i){
			console.log("#");
			j++;
		}
			console.log("\n");
	}
}
drawTriangle(6);