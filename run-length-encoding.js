function printRLE(str){
	var n = str.length;

	for(var i=0; i<n; i++){
		var count=1;
		while( i < n-1 && str.charAt(i) == str.charAt(i+1) ){
			count++;
			i++;
		}
		console.log(str.charAt(i)+""+count);
		console.log(count);


	}
}




