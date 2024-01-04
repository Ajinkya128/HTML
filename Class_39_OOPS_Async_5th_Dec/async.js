


// CALLBACK FUNCTION

function orderFood(foodItem,callback){

    console.log(`Ordering ${foodItem}`);
    // User will decide what to do with the food.
    callback(foodItem)
}

function eatFood(foodItem){

    console.log(`Eating ${foodItem}`);
}

function takeParcel(foodItem)
{
    console.log(`Taking ${foodItem} as parcel`);
}

function eatAndPack(foodItem){

    console.log(`I ll eat ${foodItem} half. and pack rest`)
}

orderFood("Burger",eatFood)  //new function callback

orderFood("Dosa",takeParcel)

orderFood("Pizza",eatAndPack)

// COMPILED and INTERPRETED language
// Javascript is an Interpreted Language. That means it runs each line of code individually and stops when it encounters an error 
// on a particular line and does not execute the rest of the code.

// Compiled means the language will first convert the entire code in machine code and if entire code is correct 
// then only it will run the code.

// Lets see an example of Interpreted language

console.log("Line 1")
console.log("Line 2")

for( let i=0; i<=10; i++)
{
    console.log(j);
}

console.log("Line 3")

// Javascript is a SingleThreaded language. That means it will execute one line at a time before moving on to the next line.



