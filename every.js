const words = ["dog", "dig", "monkey"];

const resultEvery = words.every((word) => word[0] == "d");

const resultSome = words.some((word) => word[0] == "d");

console.log("Every result : ", resultEvery);
console.log("Some result : ", resultSome);
