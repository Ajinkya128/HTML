

// Everything in JS is an Object

// Document Object Model. Inverted tree Structure


// First Method. getElementById
// To access from the document we use the getElementById function.
// Whenever you use a function we assign it a variable in this case a constant variable.


const h1Tag = document.getElementById("heading")

console.log(h1Tag);

console.dir(h1Tag);
 


const redElements = document.getElementsByClassName("red");

const allH1Tags = document.getElementsByTagName("h1");

console.log(redElements[0]);
console.log(allH1Tags[0]);


// // Query Selector
// // Query Selector All

const redElement = document.querySelector(".red")

const allRedElements = document.querySelectorAll(".red")

console.log(redElement);

console.log(allRedElements);

