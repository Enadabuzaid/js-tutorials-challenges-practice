// Assginments 
// console.log('************* assignment 31-32');
// console.log('*** [1] *** ');

// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(110 != 100 && 10 != 20); // true
// console.log(-10 == "-10"); // true
// console.log(!( -50 >= +"-40")); // true
// console.log(! (10  === -"-40")); // true
// console.log(!("10" === 10)); // true
// console.log(! (20 == false)); // true

// console.log('*** [2] *** ');
// let num1 =10;
// let num2 =20;

// console.log(num1 < num2); // true
// console.log(num1 != num2); // true
// console.log(num2 >= num1); // true
// console.log(num1 <= num2); // true
// console.log(Boolean(num1)); // true
// console.log(!(num1 > num2)); // true

// console.log('*** [2] *** ');
// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a < c || a < b); // true
// console.log(a < b && a > c); // true
// console.log(!(a > b) && !(a == b) && !(a == c) && !(a < c)); // true

console.log('\n\n\n\n************* assignment 31-32');
console.log('*** [1] *** ');

let num = 100;
if(num < 10 ){
  console.log(`00${num}`);
} else if (num > 10 && num < 100){
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(`${num}`);
}

console.log('*** [2] *** ');
let num1 = 9;
let str = "9";
let str2 = "20";

if(num1 == str){
  console.log(`{num1} (${num1}) is the same value as {str} (${str})`);
} 

if (num1 !== str){
  console.log(`{num1} (${num1}) is the same value as {str} (${str}) But Not The same Type`);
} 

if (num1 !== str2){
  console.log(`{num1} (${num1}) is not  the same value or same type as  {str2} (${str2})`);
} 

if ( typeof(str) == typeof(str2) ){
  console.log(`{str} (${str}) is   the same type  as  {str2} (${str2})`);
}

console.log('*** [2] *** ');
let number1 = 10;
let number2 = 30;
let number3 = "30";

if(number3 > number1 && typeof(number3) != typeof(number2)){
  console.log(`30 Is Larger Than 10 And Type string Not The Same Type As number`);
}

if(number3 > number1 && number3 == number2){
  console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
}


console.log('*** [4] *** ');
// Edit What You Want Here

let no1 = 15;
let no2 = 10;
let no3 = 15;
let no4 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (no1 > no2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (no1 > no2 && no1 < no4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (no1 > no2 && no1 === no3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((no1 + no2) < no4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((no1 + no3) < no4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((no1 + no2 + no3) < no4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (no4 - (no1 + no3) + no2 === 21) {
  console.log("True");
} else {
  console.log("False");
}


// console.log(Boolean(number3 == number2));

// switch(num){
//   case 9 :
//     console.log(099);
//     break;
//   case
// }
