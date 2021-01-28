'use strict';

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