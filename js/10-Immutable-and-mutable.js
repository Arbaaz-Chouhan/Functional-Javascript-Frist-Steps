// mutable

let arr = [1, 2, 3, 4, 5];
arr.push(6, 7, 8, 9, 10);
console.log(arr);

// Immutable

let str = "hello";
let res1 = str.toUpperCase();

console.log(str); // hello
console.log(res1); // HELLO

let name = "Arbaaz Chouhan";
let res2 = name.slice(6);
console.log(res2);