const country= 'Jordan';
let population = 9;
let language = 'Arabic';

console.log(country);
console.log(population);
console.log(language);
console.log('**********');
let isIsland = false;
console.log(isIsland);

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);
console.log('**********');

language = 'English';

console.log(language);
// country = "jj";
// console.log(country); // => Error 


console.log('*****************************');
console.log('**** (Basic Operators) ******');
console.log('*****************************');

console.log('***** (1) *****');

const halfPop = ( population / 2 ) / 2;
console.log('every half has ' + halfPop + ' Milion'  );

console.log('***** (2) *****');

population += 1 ;
console.log(`increse by one  ${population}`);

console.log('***** (3) *****');
let finlandPop = 6 ;

console.log(finlandPop > population);

console.log('***** (4) *****');
let avaCountry = 33;
console.log (population < avaCountry);

console.log('***** (5) *****');

const description = country + 'is in Asia and ,' + population + ' million people speak portuguese .';
console.log(description);

console.log('*****************************');
console.log('Strings and Template Literals');
console.log('*****************************');
const description1 = `${country} is in Asia and , ${population} million people speak portuguese . `;
console.log(description1);

console.log('*****************************');
console.log('if / else Statements');
console.log('*****************************');
if(population > 33){
  console.log(`${country}\'s population is ${population} above average  `);
} else {
  console.log(`${country}\'s population is ${population} below average  `);
}
