const multiply = (x, y) => {
  return x * y;
};

const sum = (x, y) => {
  return x + y;
};

const calculation = {
  sum: sum,
  multi: multiply,
};

console.log(calculation.multi(5, 5));
console.log(calculation.sum(5, 5));
