let b = [1, 2, 3, 4, 5];

function add() {
    let main = [];
    for (let i = 0; i < b.length; i++) {
        main.push(b[i]);
    }
    return main
}
console.log(add());