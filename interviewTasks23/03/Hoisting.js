fun(10);
function fun(num){
    console.log(num);
}
b = 10;
var b;
console.log('b',b); // has hoisting option
a = 10;
let a;
console.log('a', a); // reference error no hoisting option for let