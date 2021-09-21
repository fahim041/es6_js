const test = (a, b = 12) => console.log(a, b);

test(5); //5, 12
test(5, 6); //5, 6
