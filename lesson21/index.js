import { testframework } from "./testframework.js";
// Array.prototype.reduce = function() {
//     return 0;
// }
//delete Array.prototype.reduce;
Array.prototype.sum = function() {
    const res = this.reduce((acc, cur) => acc + cur);
    return res;
}
testframework("Testing new method for all arrays",
    'const arr1 = [1,2,3]; const arr2 = [3,4,"a"];',
    ['arr1.sum();', 'arr2.sum();'],
    [6,"7a"]
);