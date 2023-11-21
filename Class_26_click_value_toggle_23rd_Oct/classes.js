
// classList.add

const addBorderBtn = document.getElementById("addBorderBtn");

const addPaddingBtn = document.getElementById("addPaddingBtn");

const box = document.getElementById("box");

addBorderBtn.addEventListener("click",function(){
   box.classList.add("border");
})

 addPaddingBtn.addEventListener("click",function(){
    box.classList.add("padding");
})

// // classList.remove

const removeBorder = document.getElementById("removeBorder");

const removePadding = document.getElementById("removePadding");
// const box2 = document.getElementById("box2");

 removeBorder.addEventListener("click",function(){
     box.classList.remove("border");
 })

 removePadding.addEventListener("click",function(){
     box.classList.remove("padding");
 })

 // toggle

 const toggleBorder = document.getElementById("toggleBorder");

 const togglePadding = document.getElementById("togglePadding");

//  const box3 = document.getElementById("box3");

 toggleBorder.addEventListener("click",function(){
     box.classList.toggle("border");
})

togglePadding.addEventListener("click",function(){
     box.classList.toggle("padding");
 })

//We will see how to use Value from the input tag
const ip = document.getElementById("ip");
const greetBtn = document.getElementById("greetBtn")
    const main = document.getElementById("main")

// How to get input value
greetBtn.addEventListener("click",function(){

     console.dir("Hello " + ip.value);
     main.innerText = ("Hello " + ip.value);
 })

// TASK2 Multiply two numbers

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const main1 = document.getElementById("main1")
const multiply = document.getElementById("multiply")


multiply.addEventListener("click", function(){
    console.dir(num1.value * num2.value);
    main1.innerText=(num1.value * num2.value)
 })

// // TASK3 DIVISION

const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const division = document.getElementById("division")


division.addEventListener("click", function(){

console.dir(num3.value / num4.value)
main1.innerText=(num3.value / num4.value)
 })

// // TASK 4 SUBTRACTION

// const num5 = document.getElementById("num5")
// const num6 = document.getElementById("num6")
// const subtraction = document.getElementById("subtraction")


// subtraction.addEventListener("click", function(){

//     console.dir(num5.value - num6.value)
// })

// // KEYUP KEYDOWN KEYPRESS

// const ip1 = document.getElementById("ip1");
// const greet1 = document.getElementById("greet1")

// ip1.addEventListener("keyup",function(){

//     console.log(ip1.value);
// })



/// 25th October
// Compare Blur and Change

// const ip = documnet.getElementById("ip")


// ip.addEventListener("focus",function(){

//     console.log("focus event fired....")
// })

// ip.addEventListener("blur",function(){

//     console.log("blur event fired...")
// })

// ip.addEventListener("change",function(){

//     console.log("Change Event Fired")
// })
