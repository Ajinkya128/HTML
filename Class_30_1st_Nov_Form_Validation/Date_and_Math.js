

// Date Function

const d = new Date();

console.log( d.getHours());
console.log( d.getMinutes());
console.log( d.getSeconds());
console.log( d.getDate()); // 1st Nov
console.log( d.getMonth()); // Month JS counts from 0. so November is 10.
console.log( d.getFullYear()); // will give currentr year
console.log( d.getDay()); //Monday, Tuesday, day of the week


// Epoch time converter
// 1698847381000 milliseconds
// 1698847381 seconds

const oldDate = new Date(1698847381000); //Javascript takes 13 digit input
console.log(oldDate.getFullYear());

// If we already have time stamp and need to get date from it. we use
console.log(d.getTime());


// MATH related Methods

let x = 20;
let y = 30;
let z = 40;

console.log( Math.pow(20,2));

console.log(Math.sqrt(4));

console.log(Math.max(x,y,z));
console.log(Math.min(x,y,z));

let percent = 30.49;

console.log(Math.ceil(percent)); //will take the higher value 31
console.log(Math.floor(percent)); // will take the lower value 30
console.log(Math.round(percent)); //will round tp nearset 30




