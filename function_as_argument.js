function repeatNTimes(action, number){
	for(let i = 0; i < number; i++){
		action();
	}
}

function cry(){
	console.log("Crying")
}

repeatNTimes(cry, 4)
