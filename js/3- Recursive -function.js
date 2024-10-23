
// function task(){
//     document.write("Hi arbaaz");
// add()
// }

// function add() {
//     document.write("khan");
//       task();
// }

// task()

 let counter = 1;
function demo(num){
if(counter > num){
    return;
}
// console.log( counter+ " "+"hi world" );
counter++;
demo(num)
}

demo(10);


function sum(number){
    if(number.length === 1){
return number[0];
    }else{
    return number[0] +sum(number.slice(1));
    }
}

// console.log(sum([0,1,2,3,4]));


function iterativeFactorial(n) {
    let product = 1;
    while (n > 0) {
      product *= n;
    n--;
    }
    return product;
  }

//   console.log(iterativeFactorial(3));



// Base Case: Yeh woh condition hai jiska check karke function apna task khatam karta hai aur recursion se bahar nikal jata hai. Base case ke bina function infinite loop mein fas sakta hai.

// Recursive Case: Yeh woh part hai jisme function apne aap ko call karta hai. Ismein function ek chhota version of the original problem ko solve karne ke liye apne aap ko call karta hai.

function factorial(n){
    // # Base Case
    if (n == 0){
        return 1
    }
    // # Recursive Case
    else{
        return n * factorial(n-1);
    }
}

// console.log(factorial(5)); //120