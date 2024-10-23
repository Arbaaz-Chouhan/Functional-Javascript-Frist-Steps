// class hello{
// masssage(){
//     console.log("Hello everyone");
// }
// sorry(){
//     console.log("Soryy everyone");
// }

// }

// let a = new hello();
// a.masssage();
// a.sorry();



class student {
    constructor(name, age) {
        this.yourName = name;
        this.youeAge = age;
        console.log("Hello arbaaz");
    }
    hello() {
        console.log("hi" + " " + this.yourName + this.youeAge);
    }

    static staticMethod() {
        console.log("hi Adnan chouhan");
    }
}

let a = new student("arbaaz chouhan", 17);
a.hello();
student.staticMethod();

