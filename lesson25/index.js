// for(var i = 0; i < 3 ; i++)
// {
//     setTimeout(() => console.log(i), 1); //HW make same output for both let and var (lesson 24 did something alike)
        
// }
// for(let i = 0; i < 3; i++)
// {
//     setTimeout(() => console.log(i), 1);      
// }

//+true; => equals to 1
//!"Lydia"; => non empty string is true

const a = {};
const b ={key: 'b'};
const c ={key: 'c'};
// b.toString = function(){ // when changing the toString the object will split into 2 keys
//     return "kuku"
// }
a[b] = 123;
a[c] = 456;
console.log(a[b]); // output 456 using same key a