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

console.log('\n\n\n\n************* assignment 33-37');
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





console.log('\n\n\n\n************* assignment 37-39');

let day = "   tuesday  ";

let removeSpace = day.replace( /^\s+|\s+$/g, '' );
let dayCapital = removeSpace.charAt(0).toUpperCase() + removeSpace.slice(1);

console.log(dayCapital);

switch(dayCapital){
  case "Friday":
    console.log("No Appointments Available");
    break;
  case "Saturday":
    console.log("No Appointments Available");
    break;
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");

}


console.log('\n\n\n\n************* assignment 40-47');
console.log('\n************* [1]');


let myFriends1 = ["Ahmed", "Elham", "Osama", "Gamal"];
let myFriends2 = ["Ahmed", "Elham", "Osama", "Gamal"];

let numLen = 3;

// Method 1
myFriends1.length = numLen;
console.log(myFriends1); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends2.pop();
console.log(myFriends2); // ["Ahmed", "Elham", "Osama"];

console.log('\n************* [2]');

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

console.log('\n************* [3]');

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = (arrOne.concat(arrTwo)).sort().reverse();


console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log('\n************* [4]');

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];


console.log(words.slice(-1)[0][0].toUpperCase().slice(2)); // ZERO

console.log('\n************* [5]');
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle)){
  console.log("Found");
}


if(haystack.indexOf(needle)){
  console.log("Found");
}

if(haystack.lastIndexOf(needle)){
  console.log("Found");
}

console.log('\n************* [6]');
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2);
allArrs.sort();

console.log(allArrs.join("").toLowerCase().slice(4)); // fxy


console.log('\n\n\n\n************* assignment 48-35');
console.log('*** [1] *** ');
// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start; i < end; i++ ){
//   if(i == exclude){
//     continue;
//   }
//   console.log(i);

// }
console.log("DONE");

console.log('*** [2] *** ');
// let start = 10;
// let end = 0;
// let stop = 3;

// for(let i = start; i > end ;i--){
//   if(i == start){
//     console.log(i);
//   } else{
//     console.log(`0${i}`);
//   }

//   if(i==stop){
//     break;
//   }
// }

console.log("DONE");

console.log('*** [3] *** ');
// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i = start; i <= end; i++){
//   console.log(i);
//   console.log(`-- ${breaker}`);
//   console.log(`-- ${breaker * breaker}`);

// }
console.log("DONE");


console.log('*** [4] *** ');
// let index = 10;
// let jump = 2;
// let end = 0;

// for (let i = index;i>end;i--) {
//   // Write Your Code Here
//   if(i % 2  == 0){
//     if(i == 2 )
//     {
//       break;
//     }
//     console.log(i);


//   }
// }
console.log("DONE");

console.log('*** [5] *** ');
// let friends_arr = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for(let i = 0 ;i < friends_arr.length ; i++){
//   if(friends_arr[i].charAt(0) == letter || friends_arr[i].charAt(0) == letter.toUpperCase()){
//     continue;
//   }
//     console.log(`${i} => ${friends_arr[i]}`);
// }

// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
console.log("DONE");

console.log('\n\n\n\n************* assignment 57-63');
console.log('*** [1] *** ');
function sayHello(theName, theGender = "") {
  if(theGender == "Male"){
      txt = "Mr";
  } else if(theGender == "Female"){
    txt = "Miss";
  } else {
      txt = "";
  }
  console.log(`Hello ${txt} ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log('*** [2] *** ');

function calculate(firstNum, secondNum, operation) {
  if(typeof secondNum == 'undefined'){
    console.log(`Second Number Not Found`);
  } else {

    switch (operation){
      case "add":
        console.log(firstNum + secondNum); 
        break; 
      
      case "subtract":
        console.log(firstNum - secondNum);  
        break;

      case "multiply" :
        console.log(firstNum * secondNum);  
        break;

      default:
        console.log(firstNum + secondNum); 
    }
  }   
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

console.log('*** [3] *** ');
function ageInTime(theAge) {
  if(theAge >= 10 && theAge <= 100){
    let result = [];

    let month = theAge * 12;
    let week = month * 4;
    let day = week * 7;
    let hour = day * 24;
    let min = hour * 60;
    let sec = min  * 60;


    console.log(`${month} months`);
    console.log(`${week} weeks`);
    console.log(`${day} days`);
    console.log(`${hour} hours`);
    console.log(`${min} min`);
    console.log(`${sec} sec`);



    

  } else{
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

console.log('*** [4] *** ');
function checkStatus(a, b, c) {
  // a 

  if(typeof(a) == "string"){
    fname = a;

  } else if (typeof(a) == "number"){
    numberfun = a;

  } else if (typeof(a) == "boolean") {
    hireStatus = a;
  }

  if(typeof(b) == "string"){
    fname = b;
  } else if (typeof(b) == "number"){
    numberfun = b;
  } else if (typeof(b) == "boolean") {
    hireStatus = b;
  }

    if(typeof(c) == "string"){
    fname = c;
  } else if (typeof(c) == "number"){
    numberfun = b;
  } else if (typeof(c) == "boolean") {
    hireStatus = c;
  }


  if(hireStatus){
    hire  = "Available";
  } else{
    hire = "Not Available";
  }


  console.log(`Hello ${fname} , Your Age is ${numberfun}, You Are ${hire} For Hire.`);

}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus(false, 38,"Osama");

console.log('*** [5] *** ');

document.write(`<h3>This ass 5 in function from 57 to 63</h3>`)

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
    for(let i = startYear; i <= endYear; i++  ){
      document.write(`<option value="${i}">${i}</option>`);
    }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

console.log('*** [6] *** ');
function multiply(...numbers){
  let result =1 ;
  for(let i = 0; i < numbers.length; i++){
    
    if(typeof(numbers[i]) != "string"){
      
      result *= parseInt(numbers[i]);

    }

  }
  
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

console.log('\n\n\n\n************* assignment 64-70');
console.log('*** [1] *** ');
function getDetails(zName, zAge, zCountry) {
  
    
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.

      nameSplit = zName.split(" ");
      firstName  = nameSplit[0];
      secondName = `${nameSplit[1][0].toUpperCase()}.`;

      fullName = firstName + ' ' + secondName;
      return fullName;

  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    age =zAge.substring(0, 3)
    return `Your Age Is ${age}`;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    country = zCountry.slice(0, 2);
    return country.toUpperCase();
  }
  function fullDetails() {
    // Write Your Code Here
    
    return `Hello ${ namePattern(zName)} , ${ageWithMessage(zAge)} , ${countryTwoLetters(zCountry)}`;
    
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

console.log(getDetails("Enad Abuzaid", "24 Is The Age", "Jordan"));


console.log('*** [2] *** ');
// function itsMe() {
//   return `Iam A Normal Function`;
// }

// console.log(itsMe()); // Iam A Normal Function

// let arrow = () => `I am An Arrow function`;

// console.log(arrow);


console.log('*** [3] *** ');
console.log('*** [4] *** ');
