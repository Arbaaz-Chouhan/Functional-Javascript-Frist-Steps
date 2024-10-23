function x(fn) {
  fn();
}

function y() {
  console.log("Arbaaz chouhan");
}

x(y);
// x is Higher order function
// y is callback function


const data = [10, 20, 30, 25, 15];
const calculate_Square = function (d) {
  let res = [];
  for (let i = 0; i < d.length; i++) {
    res.push(d[i] * 2);
  }
  return res;
}
// console.log(calculate_Square(data));



const calculate_AddOne = function (d) {
  let res = [];
  for (let i = 0; i < d.length; i++) {
    res.push(d[i] + 1);
  }
  return res;
}
// console.log(calculate_AddOne(data));


function applyOperation(num, operation) {
  return operation(num)
}

function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

// console.log(applyOperation(5, square));  // Output: 25
// console.log(applyOperation(3, double));  // Output: 6


