function fn1() {
    let a = 10;

    function fn2() {
        console.log(a);
    }
    fn2()
}

fn1();


function closure1(a) {
let c  = 20
  return  function closure2(b) {
        return a + b + c;
    }

}

let sum = closure1(10);
console.log(sum(10));
