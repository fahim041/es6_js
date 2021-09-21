const arrayOfObjects = [
  {
    id: 1,
    name: "Jack",
    country: "UK",
  },
  {
    id: 2,
    name: "Ryan",
    country: "US",
  },
  {
    id: 3,
    name: "Huge",
    country: "Aus",
  },
];

const [, { country }] = arrayOfObjects;

console.log(country); //US
