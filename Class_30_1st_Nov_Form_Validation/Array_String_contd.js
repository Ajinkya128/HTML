

let str = "Hello from Javascript"

// we will see how to reverse a String.
// There is no reverse function in string.
// Therefore we will convert the string into an array and use the array reverse function.


// first we will use the split function to split the array in to individual letters.
// and ssign it to a variable.
// The split function will always take "" argument

const splitsArray = str.split("");

// NOw that the srting has been converted to array we will reverse it

splitsArray.reverse();

// now we will use the join() function to converet the reversed array back to string
let reversedStr = splitsArray.join("");

console.log(str);
console.log(reversedStr);
