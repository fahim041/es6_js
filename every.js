const words = ["dog", "dig", "monkey"];

const resultEvery = words.every((word) => word[0] == "d");
//return false if some of the word doesn't start with "d"
const resultSome = words.some((word) => word[0] == "d");
//return true if some of word start with "d"

console.log("Every result : ", resultEvery);
console.log("Some result : ", resultSome);
