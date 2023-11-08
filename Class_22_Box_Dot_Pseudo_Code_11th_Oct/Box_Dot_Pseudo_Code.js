


const mobile = {
    'mobile company' :"onePlus",
    cost : 300000,
    color : "blue",
}

// Accessing values inside object.
// Dot notation

console.log(mobile.cost);

let x = 'cost';

// Box notation.
// When key has space in it

console.log(mobile['mobile company']);

// when the key is stored inside another variable

console.log(mobile[x]);


// Now we will see how to add data in Objects.
// below we have added discount and camera to the Object mobile. 
// New data can be added both by dot notation and box notation.

mobile.discount = "10%";
mobile["camera"] = "16MP";
console.log(mobile);


// Practice Function

// PSEUDO CODE

// Create calculation function
//    it takes 3 parameters --> a, b , operations
//    if operation is add
//       then add a and b
//    if opeartion is sub 
//       then sub a and b
//    if operation is div
//       then divide a and b
//    if operation is mul
//       then multiply a and b

function calculation (a,b,c)
{
    switch(c)
    {
        case "add":
            console.log("The output is " + (a+b));
            break;

        case "sub":
            console.log("The output is " + (a-b));
            break;

        case "multiply":
            console.log("The output is " + (a*b));
            break;

        case "div":
            console.log("The output is " + (a/b));
            break;        
    }

}

calculation(20,30,"sub")
calculation(20,30,"multiply")
calculation(20,30,"div")
calculation(20,30,"add")



// Practice Percentage function


function percentage(a,b)

{
    console.log("You got " + ((a/b)*100) + " Percentage");
}

percentage(200,400)
