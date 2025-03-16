import { testframework } from "./testframework.js";
Function.prototype.myBind = function(thisArg, ...argsBind) {
  return (...callArgs) => this.apply(thisArg, [...argsBind, ...callArgs]);
}
const commonScript = `function sum(op1, op2) {
  let res = 0;
  if(this) {
    res = Object.values(this).reduce((acc, cur) => acc +cur)
  }
  res += op1 + op2;
  return res;
}`


testframework("My bind testing", commonScript, 
  ['sum.myBind(undefined, 1, 2)()', 'sum.myBind({x:1, y:2},1, 2)()',
    'sum.myBind({x:1, y:2},1)(2)', 'sum.myBind({x:1, y:2})(1, 2)' ],
    [3, 6, 6, 6]
)