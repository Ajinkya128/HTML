

// CHanging Content using JS

// const h1Tag = document.getElementById("heading");

// console.log(h1Tag.innerText);

// For Changing Text content

// h1Tag.innerText = "Hiiii World";

// const parent = document.getElementById(parent);

// console.log( parent.innerText);
// console.log( parent.innerHTML);


// for changing HTML conetnt

// parent.innerHTML = "<h3>Hello</h3>";

// How to Add a EVENT
// To know when the user click on a particular Button is called an EVENT.
// We use the addEventListener
// This is also called CAll back function
// When you pass a function to another Function. The passed function is called Call Back Function


// const btn = document.getElementById("btn");

// btn.addEventListener("click", printMessage)

// function printMessage(){

//     console.group("You clicked the button")
// }

// Now we will convert the above Function in Anonymos Function

const btn = document.getElementById("btn")

btn.addEventListener("click",function(){
    console.log("You have pressed the button")
});

// Now we will create 3 more Buttons

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    console.log("You have pressed the button1")
});

// Second button for Practice

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(){
    console.log("You have pressed the button2")
});

// Third button for Practice

const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function(){
    console.log("You have pressed the button3")
});


//  We will create a new button and see othe functions
// dblclick, mousemove, mouseout, mouseover

const btn4 = document.getElementById("btn4")

btn4.addEventListener("dblclick",function(){
    console.log("You double clicked the mouse")
});

btn4.addEventListener("mousemove",function(){
    console.log("You moved the mouse")
});

btn4.addEventListener("mouseout",function(){
    console.log("The mouse is Out")
});

btn4.addEventListener("mouseover",function(){
    console.log("The Mouse is Over")
});









