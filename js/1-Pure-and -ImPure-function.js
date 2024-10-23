x//Pure function 
// A pure function give the same input will  always return the same output
// Pure function do not cause  side effects the function


function PureFunction(name,age){
console.log(`${name} ${age}`);
}

PureFunction("Arbaaz chouhan", 17);


function add(num1,num2){
    console.log(num1+num2);
}
add(10,20);


// Inpure function
//  Impure function do casue side effects the functino 
// Impure function give same input but difference output

let name = "Adnan chouhan";

function ImpureFunction(){
    console.log(`hi  what is your name My name is ${name}`);
}

ImpureFunction();

let increment = 10;

function Additon(){
console.log(increment);
increment++;
}
Additon();
Additon();
Additon();
