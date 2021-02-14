"use strict";

// const day = 'wednesday';

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare videos');
//         break;
//     case 'wednesday':
//         console.log('Exercise')
//         // break;
//     case 'thursday':
//         console.log('Code');
//         // break;
//     case 'friday':
//         console.log('CodeRecord'); // this gets run since no more matching will be made
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day')
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare videos');
// } else if (day === 'wednesday') {
//     console.log('Exercise')
// } else if (day === 'thursday') {
//     console.log('Code')
// } else if (day === 'friday') {
//     console.log('CodeRecord')
// } else if (day === 'satuday' || day === 'sunday') {
//     console.log('Enjoy the weekend')
// } else {
//     console.log('Not a valid day')
// }

//-------------------------------------------------------------------------------------------------
// Tip Calculator with if else statement

// function tipCalc (bill) {
//     let tip = '';
//     let total = '';
//     if ((bill > 50) && (bill <300)) {
//         tip = bill * .15;
//         total = tip + bill;
//         console.log('The bill was ' + bill + ' ' + ', the tip was ' + tip + ', and the total value ' + total)
//     } else {
//         tip = bill * .20;
//         total = tip + bill;
//         console.log('The bill was ' + bill + ' ' + ', the tip was ' + tip + ', and the total value ' + total)
//     }
// }

// tipCalc(275);
// tipCalc(40);
// tipCalc(430);

//-------------------------------------------------------------------------------------------------
// Ternary Operator

// const age = 15;

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if(age >= 18) {
//     drink2 = 'water';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

//-------------------------------------------------------------------------------------------------
// Ternary Operator tip calculator

// const bill = 430;
// let tip = '';
// const total = (bill > 50) && (bill < 300) ? console.log('The bill was ' + bill + ' ' + ', the tip was ' + bill*.15 + ', and the total value ' + bill*1.15)
// : console.log('The bill was ' + bill + ' ' + ', the tip was ' + bill*.20 + ', and the total value ' + bill*1.20);

//-------------------------------------------------------------------------------------------------
// let vs var

// let is blocked scope, var is function scoped
// var gets hoisted (stored in memory, but not yet defined) - let does not get hoisted

// const vs let
// const cannot mutate what's been defined, but can still modify object elements such as elements in array
// let can be mutated

// const c = [1,2];
// c.push(3);
// console.log(c);

// let x = function x (){

//     if (true) {
//         console.log(v)
//         console.log(l)
//         var v = 2;
//         let l = 1;
//     }
// }
// x();

//-------------------------------------------------------------------------------------------------
// Arrow functions

// var getA = function(a) {
//     return a;
// };

// let getA = a => a; // if return with 1 line then 'return' can be omitted

// let getB = b => {return b}; // can be rewritten as - let getB = b => (b)
// console.log(getB(2))

// let a = 4

// let square = () => {return a*a};

// console.log(square()) // can define variable 'a' outside of function and still use it

// var n = [1,2,3];

// var x = function (...n) {
//     console.log(n)
//     console.log(n[1])
// }

// x(1,2,3) // => 2
// x(n) //  => undefined , if n = [1,2,3], (...n) will take that n and put it inside another array => [[1,2,3]]

//-------------------------------------------------------------------------------------------------
// Function Declaration vs Function Expression

// Function Declaration

//-------------------------------------------------------------------------------------------------
// Scopes
// Global Scope vs Function Scope vs Block Scope(ES6)

// Global Scope: Outside of any function or block & Variables declared in global scope are accessible everywhere

// Function Scope: Variables are accessible only inside function, NOT outside - a.k.a. local scope

// Block Scope (ES6): Variables are accessible only inside block (block scoped)
// This only applies to let and const variables
// Functions are also blocked scoped (only in strict mode - which should be used anyways
// Just like with let and const - This means that functions declared inside a block is only accessible inside that block

// if (true) {
//   var millenial = "Hi, I'm 'var' and I can be accessed";
//   const food = "Avocado";
// }

// function calcAge(birthYear) {
//   var now = 2037;
//   const myStr = "I cannot be accessed";
//   const age = now - birthYear;
//   return age;
// }

// console.log(millenial);

// console.log(now);

// console.log(food);

// console.log(myStr);

// More Examples

// const myName = "Sam";

// function first() {
//   const age = 27;

//   if (age >= 27) {
//     const decade = 2; // confined to block scope
//     var millenial = true; // not confined to block scope
//   }

//   function second() {
//     const job = "engineer";

//     console.log(`${myName} is a ${age}-old ${job}`);
//   }

//   second();
//   console.log(millenial); // not confined to block scope
//   console.log(decade); // confined to block
// }

// first();

// 'var' is function scoped

//-------------------------------------------------------------------------------------------------
// Scope More Practical Examples

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName); // const defined in global scope so it can be accessed

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //    firstName = 'Steven' - reassign variables of outer scope is okay if it's 'let' var.
//       const firstName = "Steven"; // this creates a new variable rather than reassigning
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = "Sam";
// calcAge(1991);
// console.log(firstName);

//-------------------------------------------------------------------------------------------------
// Hoisting
// Hoisting: Makes some types of variables accessible/ usable in the code before declared
// Before execution, code is scanned for variable declarations, and for each variable, a new
// property is created in the variable environment object

// console.log(myVar); // hoisted and assigned 'undefined'
// console.log(myLet); // not hoisted (technically yes, but placed in Temp dead zone giving uninitialized)
// console.log(myConst); // not hoisted, same as let

// var myVar = "Hi";

// let myLet = "Jack";

// const myConst = "Bob";

//-------------------------------------------------------------------------------------------------
// 'this' keyword
// *** special varible that is created for every execution context (every function). Takes the value of
// (points to) the 'owner' of the function in which the this keyword is used ***********************

// in a method, this = <object that is calling the method>

// const sam = {
//   name: "Sam",
//   year: 1990,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };

// console.log(sam.calcAge());

// 1. in a simple function call, this = undefined (in strict mode) - otherwise it points to window object in browser

// 2. arrow function, this = <this of surrounding function (lexical this)> - arrow function don't have its own 'this'
// 'this' will be the 'this' keyword of surrounding lexical function

// 3. if function is call as event listener then, this = <DOM element that the handler is attached to>

// *this will not point to the function itself and also NOT to its variable environment

//-------------------------------------------------------------------------------------------------

// console.log(this); // 'this' in the global scope by itself is the window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // 'this' is its own 'this' keyword
// };

// calcAge(1991); // 'undefined'

// const calcAge = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this); // 'this' is the lexical 'this' keyword of its parent scope which is window
// };

// calcAge(1991); // -> window - 'this' keyword of its parent scope - window is the 'this' keyword

// this keyword in an object

// const sam = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//   },
// };

// sam.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = sam.calcAge;
// matilda.calcAge(); // 20 -> 'this' keyword will always refer to the object that calls it (matilda)

//*** functions create it's own Execution Context and its own 'this' ***

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet(); // 'this' = undefined, since arrow function doesn't have its own 'this' keyword it uses

// As good practice, don't use arrow functions for methods, 'this' keyword will refer to lexical scope instead of the object calling it

// jonas.calcAge();

//-------------------------------------------------------------------------------------------------

// CLOSURES:
// Any function always has access to variable environment of the execution context in which the function was created
// Vari environ (including arguments) attached to the function, exactly as it was at the time
// and place the function was created

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// more examples of closures

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f(); // Any function always has access to variable environment of the execution context in which the function was created

//-------------------------------------------------------------------------------------------------

// Arrays

// let arr = ["a", "b", "c", "d", "e"];

// SLICE - creates a copy

// console.log(arr.slice(2)); // returns new array from index position to end

// console.log(arr.slice(2, 4)); // returns new array from index position to end index (but not including)

// console.log(arr.slice(1, -4)); // returns new array from index position to end index (but not including)

// console.log(arr.slice()); // return copy of new array

// console.log([...arr]); // return copy of new array

// SPLICE - same as SLICE but mutates original - extracts those elements from original array

// console.log(arr.splice(0));

// console.log(arr.splice(-1));

// console.log(arr.splice(1, 4)); // (position, how many total elements after/including)

// console.log(arr);

// REVERSE

// const arr2 = ["j", "i", "h", "g", "f"];

// // console.log(arr2.reverse()); // reverse and mutate original
// // console.log(arr2);

// // CONCAT - add arrays together

// // const letters = arr.concat(arr2);
// // console.log(letters);
// // console.log([...arr, ...arr2]);

// // JOIN

// console.log(letters.join(" - "));

//-------------------------------------------------------------------------------------------------

// forEach loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---- forEach ----");

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
