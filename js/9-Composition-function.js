// composition function 
var ender = (ending) => (input) => input + ending;

var adore = ender("rocks");
var announce = ender(", y'all");
var exclaim = ender("!");


var hypeUp = (x) => exclaim(announce(adore(x)));
hypeUp("JS");    // "JS roks, y'all!"
hypeUp("FP");    // "FP roks, y'all!"


// Composition function
const compose = (f, g) => (x) => f(g(x));

// Example functions
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

// Composed function
const addTwoThenMultiplyByThree = compose(multiplyByThree, addTwo);

// Usage
console.log(addTwoThenMultiplyByThree(5)); // Output: 21

