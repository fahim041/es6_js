const prices = [5, 6565, 354, 53453, 77.0, 545.5454];

const sortingPrices = prices.slice().sort((a, b) => a - b);

const decSort = prices.slice().sort((a, b) => b - a);

console.log(sortingPrices);
console.log(decSort);
