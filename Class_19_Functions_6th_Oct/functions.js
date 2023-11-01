
// Function - is a reusable block of code
// Function Declaration
function cook()
{
    // Function Body
    console.log("cooking...");
}
//  function calling
// You can call the function multiple times
cook();
cook();
cook();


// Here dish1 is setting parameter to a function. This makes the function more dynamic.
function cook1 (dish1)
{
    console.log("Todays dish is " + dish1)

}
// Here "chinese" is passing an ARGUMENT in function cook1()
cook1("Chinese")

// Create a new function to address cleaning

function cleaning (clean)
{
    console.log("Clean the area in " + clean);
}
cleaning("Bedroom")
cleaning("Kitchen")

// We will have a look at the RETURN function
// RETURN is used to return the value of the parameter(dish2)
// always when RETURNing the parameter(dish2) we have to assign the function(cooking) to a new 
// variable

function cooking (dish2)
{
    console.log("Take the " + dish2);
    return dish2;
}

var whatDish = cooking("Biryani")
console.log("Returning your dish " + whatDish)

// SUBTRACTION
function subtract (minus1,minus2)
{
    console.log("The result is " + (minus1-minus2));
}
subtract(30,20)

// MULTIPLICATION
function multiply (multiply1,multiply2)
{
    console.log("The result is " + (multiply1*multiply2));
}
multiply(30,20)

// DIVISION

function div (multiply1,multiply2)
{
    console.log("The result is " + (multiply1/multiply2));
}
div(30,20)






