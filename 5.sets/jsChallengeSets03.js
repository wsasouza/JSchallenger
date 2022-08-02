// Get union of two sets

// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tip: try not to switch to Arrays, this would slow down your code

function myFunction(a, b) {
  return new Set([...a, ...b]);
}

function myFunctionP(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}

console.log(myFunction(new Set('123'), new Set('234')));
// Set('1', '2', '3', '4')
console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5])));
// Set(1, 2, 3, 4, 5)

console.log(
  myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
);
// Set(false, NaN, true)
