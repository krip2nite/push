import { testframework } from "./testframework.js";
// questions for interview

// write class Deffered for printing out the folowing
class Deferred{
    constructor(){
        this.callbacks = [];
        this.resolved = false;
        this.value = undefined;
    }
    then(callback){
        if (this.resolved)
            callback(this.value);
        else
        this.callbacks.push(callback);
    }
    resolve(value){
        this.value = value;
        this.resolved = true;
        for (let callback of this.callbacks){
            this.value = callback(this.value);
        }
    }
    getResult(res){
        return this.result = res;
    }
}

const d = new Deferred()
d.then(function(res){console.log("1", res); return "a"});
d.then(function(res){console.log("2", res); return "b"});
d.then(function(res){console.log("3", res); return "c"});
d.resolve('hello');
//1. hello
//2. a
//3. b

// write method myBind with the same behavior as the standard "bind" method
// you may use any standard methods except "bind"
// Function.prototype.myBind = function(thisArg, ...argsBind) {
//     return (...callArgs) => this.apply(thisArg, [...argsBind, ...callArgs]);
// }