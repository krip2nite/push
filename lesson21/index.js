import { testframework } from "./testframework.js";
class X {
    constructor(arr){
        this.arr = arr;
    }
    logElements(){
        this.arr.forEach(e => console.log(e));
    }
    sumElements(){
        return this.arr.reduce((acc,cur) => acc + cur);
    }
    action(fun){
        return fun.call(this);
    }
    joinElements(){
        return this.arr.join();
    }
    actionBind(fun){
        return fun();
    }
}
const obgX = new X([1,2,3,20,40]);
// obgX.logElements();
// console.log(obgX.sumElements());
// obgX.action(obgX.logElements);
// console.log(obgX.action(obgX.sumElements));
// console.log(obgX.action(function(){
//     return this.arr.join();
// }));
console.log(obgX.action(obgX.joinElements));
console.log(obgX.actionBind(obgX.sumElements.bind(obgX)));