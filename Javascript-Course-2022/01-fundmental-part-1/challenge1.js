
console.log('*****************************');
console.log('challenge [1]');
console.log('*****************************');
let marksHeight = 1.69;
let marksMass = 78;

let johnHeight = 1.95;
let johnMass = 92; 

let bmiMark = marksMass / (marksHeight ** 2);

let bmiJohn = johnMass / (johnHeight ** 2);

console.log('Mark BMI = '+ bmiMark);

console.log("John BMI = "  + bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);


