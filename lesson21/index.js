import { testframework } from "./testframework.js";
function f1() {
    return "kuku";
}
function sum(op1 = 10, op2 = 20) {
    return op1 + op2;
}
Function.prototype.toString = function(){
    return this().toString();
}
// console.log(f1.toString());
// console.log(sum.toString());
console.log(`sum.call(undifined, 1 ,2) = ${sum.call(undefined, 1 ,2)}`)
console.log(`sum.apply(undifined, [1 ,2]) = ${sum.apply(undefined, [1 ,2])}`)