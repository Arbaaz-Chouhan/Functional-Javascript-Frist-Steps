// function adition(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return a + b + c + d;
//             }
//         }
//     }
// }

// let a = adition(1)(2)(10)(12);
// console.log(a); //output 18



// function introduction(name){
//     return function(country){
//         return function(student){
//         }
//     }
// }
// let res= introduction(("Arbaaz"),("chouhan"),("age:17"),("I leve in jodhpur"));
// console.log(res);

//  usrobj = {
//     name :"Arbaaz chouhan",
//     age : 17

// }

// function userInfo(obj){
//     return function(userInfo){
//         return  obj[userInfo];
//     }
// }
//  let res = userInfo(usrobj)
//  console.log(res("name"));