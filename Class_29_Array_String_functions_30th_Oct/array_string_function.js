
// ARRAY FUNCTIONS. There are 11 array Functions

// We create a random Array
const nums = [1,2,3,4,5,6,100,200];

// Lets print the array
console.log(nums)  //Output: [ 1, 2, 3, 4, 5, 6, 100, 200 ]

// Adding numbers at End usig PUSH() function.
// will add 80 and 90 at the end
nums.push(80,90);
console.log(nums) //[ 1, 2, 3, 4, 5, 6, 100, 200, 80, 90 ]

// Removing numbers from the end using POP() function.
// will remove the last number from array
nums.pop(); 
console.log(nums) //[ 1, 2, 3, 4, 5, 6, 100, 200, 80 ]

// Add numbers to the start of the array using unshift() function
// will add 8 and 9 at the start of the array
nums.unshift(8,9) 
console.log(nums) //[ 8, 9, 1, 2, 3, 4, 5, 6, 100, 200, … ]

// will remove numbers (8) from the start of the array using shift() function
nums.shift();
console.log(nums); //[ 9, 1, 2, 3, 4, 5, 6, 100, 200, 80 ]


// We will create a new array
const nums1 = [10,20,30,40,50,30,80];

// check if an element is present in an array

// The .includes() function will check if a number is present
// Can also another argument to search from a particular Index.
console.log(nums1.includes(20)); // search from start //TRUE
console.log(nums1.includes(20,2)); // search from index 2 //FALSE

//The indexof() function gives the index of the element in the Array

console.log(nums1.indexOf(30)); //2
console.log(nums1.indexOf(32)); //-1
console.log(nums1.indexOf(30,3)); //5

//The lastIndex() function gives the index of the element in the Array
// Also takes two arguments. NOTE: the index is always counted from the start.

console.log(nums1.lastIndexOf(30)); //5
console.log(nums1.lastIndexOf(30,4)); //2

// CONCAT, will add the two arrays

const a = [1,2,3]
const b = [4,5,6]

const c = a.concat(b);
console.log(c); //[ 1, 2, 3, 4, 5, 6 ]

// REVERSE, will reverse the arrays

const nums2 = [10, 20, 30, 40, 50, 60, 70];

nums2.reverse();
console.log(nums2); //[ 70, 60, 50, 40, 30, 20, 10 ]

// Slice and Splice

    const nums3 = [10, 20, 30, 40, 50, 60, 80];

// Slice, slices a part of the array and returns a New Array
console.log(nums3.slice(2,5));  //[30,40,50]

// remove element anywhere, add element anywhere in the array

nums3.splice(6, 0, 70);  //6 is the index where you want to add or remove. 0 is if no chnages,
                         
//  1 or more if to remove. and 70 is the number to add remove

console.log(nums3) //Array(8) [ 10, 20, 30, 40, 50, 60, 70, 80 ]

nums3.splice(3 , 0, 35) 

console.log(nums3) // Array(9) [ 10, 20, 30, 35, 40, 50, 60, 70, 80 ]

// index from where to start , delete count, all elements you wan to add



// STRING FUNCTIONS. There are 15 string functions.

let str = "Hello from JavaScript";
console.log(str.length); //length of string.. //21
console.log(str[4]); // o


// to find the character at a particular index
console.log(str.charAt(2)); //l
// to find the code of the charcter at particular index
console.log(str.charCodeAt(2)); //108

// to find if a particular character is present in string
console.log(str.includes("e",3)); //False
// to find index of particular character
console.log(str.indexOf("r",8)); //17

// to find index from the end
console.log(str.lastIndexOf("r",7)) //7


let str1 = "Hello from JavaScript";

// To check if string starts with a particular character of word
console.log(str1.startsWith("Hello")); //True

// To check if string ends with a particulat character of word
console.log(str1.endsWith("Hello")); //False

let str2 = "  Hello from JavaScript   ";

// To remove spaces from the string
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

let str4 = "Hello from JavaScript";
// to replce a particular word from a string
console.log(str4.replace("JavaScript","Python")) //Hello from Python

let str5 = "Hello from JavaScript";

console.log(str5.toLowerCase()); //hello from javascript
console.log(str5.toUpperCase()); //HELLO FROM JAVASCRIPT





 