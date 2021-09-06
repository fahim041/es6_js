const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach((num) => console.log(num * 2));
console.log("break...");
nums.forEach((num) => {
  if (num % 2 == 0) {
    console.log(num);
  }
});
