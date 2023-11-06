

// GLOBAL SCOPE AND LOCAL SCOPE
// Variables created inside global scope can be accessed anywhere in the Program
var a = 10;
var b = 20;
// Variables created inside a function are called LOCAL SCOPE.These variables cannot be accessed 
// outside that function.
function add()
{
   // LOCAL SCOPE
    var a = 200;
    var b = 300;
    console.log( a+b )
}
add();

console.log(a+b);


// HOISTING

// Hoisting is a phenomenon where Javascript works in two phases.
// Phase I .... JS scans all the variables declared with "var" keyword and places left handside
// of that variable to the top of the code.
// This is called Hoisting. To avoid hoisting Javascript introduced two more keywords
// let and const 
// Phase II.... jS actually runs your code

console.log( x+y ); // NAN due to hoisting. a is undefined and b is undefined. undefined + undefined is NaN

var x = 10;

var y = 20;

console.log (x+y); 


// BLOCK SCOPE
// Variables declared inside normal block of code are called {} like loops and conditional statements are called
// as blocked scoped variables.
for(let i = 1; i<=10; i++)
{  // Block Scope
    console.log(i)
}

console.log(i);

// By using var i , The value of i is passed down outside the for loop.
// To avoid this let and const were invented. So that i outside for loop will give an error.




