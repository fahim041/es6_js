function multipleBy(num){
	return function(x){
		return x * num;
	}
}

const x = multipleBy();
x(3);
