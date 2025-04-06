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

// const a = {};
// const b ={key: 'b'};
// const c ={key: 'c'};
// // b.toString = function(){ // when changing the toString the object will split into 2 keys
// //     return "kuku"
// // }
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]); // output 456 using same key a

// let a = 3;
// let b = new Number(3); // this is an object
// let c = 3;
// console.log( a == b);
// console.log( a === b);
// console.log( b === c); // true, false, false

// let number = 0; // question 14
// console.log(number++) // postfix so number is still printing 0 and than changes to 1
// console.log(++number) // prefix add 1 and number is now 2 and printed 2
// console.log(number)

// function checkAge(data){
//     if ( data === {age : 18} )
//     {
//         console.log("You are an adult");
//     }
//     else if(data == {age : 18})
//     {
//         console.log("You are still and adult")
//     }
//     else
//     console.log("Hmm... You dont have an age i guess")
// }
// checkAge( {age:18} ) // output hmm... because different refernce links

// const sum = eval("10*10+5") // output 105

// two !! make it a boolean 
// !!null; //false
// !!""; // false
// !!1; //true

//question 22
// [..."Lydia"]; // prints  ["L","y","d","i","a"]

// const Person ={
//     name: "Lydia",
//     age: 21
// };

// for(const item in Person){
//     console.log(item)
// } // will print only the keys "name", "age"

// const num = parseInt("7*6") // will print 7 cause parseInt goes until the first not number

// const numbers = [1,2,3,4,5];
// const [y] = numbers;
// console.log(y); // destructor of array will print 1

// [1,2,3,4].reduce((x,y) => console.log(x,y)); // prints 1 2 undefined 3 undefined 4

// function addToList(item, list){
//     return list.push(item); // return the length of the list/array after push
// }
// const result = addToList("apple", ["banana"])
// console.log(result); // prints 2 

// console.log("I want pizza"[0]); //prints I

// question 37 - 40 need to check in program

// question 46
// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction(){
//     myPromise().then(res => console.log(res));
//     console.log('second')
// }

// async function secondFunction() {
//     console.log(await myPromise());
//     console.log('second');
// }

// firstFunction();
// secondFunction(); // prints second , I have resolved! , I have resolved! , second

// const promise1 =
// Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')
// const runPromises = async () => {
//     const res1 = await Promise.all([promise1, promise2])
//     const res2 = await Promise.all([promise3, promise4])
//     return [res1, res2]
// }
// runPromises()
// .then(res => console.log(res))
// .catch(err => console.log(err)) // output "Third"

