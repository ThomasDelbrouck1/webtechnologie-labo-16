const isOdd = (getal) => getal % 2 !== 0;
const isEven = (getal) => getal % 2 === 0;
const isPositive = (getal) => getal > 0;
const isMultipleOfThree = (getal) => getal % 3 === 0;

function atLeastTwo(getallen, callback) {
  return getallen.filter(callback).length >= 2;
}

console.log(atLeastTwo([2, 3, 4, 6, 8], isOdd));
console.log(atLeastTwo([2, 3, 4, 5, 6, 8], isOdd));
console.log(atLeastTwo([2, 3, 4, 5, 6, 8], isEven));
console.log(atLeastTwo([-2, 3, 6], isPositive));
console.log(atLeastTwo([3, 6, 8], isMultipleOfThree));
