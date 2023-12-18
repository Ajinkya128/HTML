

// Timing FUnctions

// First use case if we want to do something once after a certain period of Time
// time, auto logout. In bank

// If we want to do something regularly, after a specific

// Timer functions. which run after specific time.

// setTimeout()   setInterval()


setTimeout(function(){

     console.log("Three seconds up!!")
 },3000)

 // If we want to do something regularly after a specific interval

// setInterval(function(){
//     console.log("Two seconds up!!!")
//  },2000)


const startTimeout = document.getElementById("startTimeout")
const startInterval = document.getElementById("startInterval")
const stopTimeout = document.getElementById("stopTimeout")
const stopInterval = document.getElementById("stopInterval")

let clearSetTimeout = null; let clearSetInterval = null;

startTimeout.addEventListener("click",function(e){
    clearSetTimeout = setTimeout(function(){

        console.log("Three seconds up!!")
    },3000)
})

startInterval.addEventListener("click",function(e){
    clearSetInterval = setInterval(function(){
        console.log("Two seconds up!!!")
    },2000)
})

stopTimeout.addEventListener("click",function(e){

    clearTimeout(clearSetTimeout)

})

stopInterval.addEventListener("click",function(e){

    clearInterval(clearSetInterval)
    
})








// Optional Parameter
//  you have to pass default value in a and b, Or les it returns NAN, if only one is passed a(100)

function add(a=0, b=0)
{
    console.log(a+b);   
}

add(100,200)

add(100)

add()

// Array DESTRUCTING

var nums = [10, 20, 30, 40];

let[a,b,c,d] = nums;

console.log(a,b,c,d);

// Destructuring by skipping elements.

// let [a, b, , c] = nums;


// OBJECT DESTRUCTURING

const mobile = {
    name : "OnePlus",
    cost: 20000,
    color: "black",

}

// let name = mobile.name;
// let cost = mobile.cost;
// let color = mobile.color;

let{ cost:price, color:co, name} = mobile;
// In the above we have destructured the OBJECT and we have also given alias to the Object keys 

console.log(name,price,co);

console.log(`I have ${mobile.name}. It costs ${mobile.cost} and its ${mobile.color} in color`)
// The above is the traditional way to access values in Object

// SPREAD Operator

const nums3 = [10, 20, 30]

// Spread Operator
// const nums2 =[nums[0],nums[1],nums[3]]
const nums2 = [...nums];
console.log(nums3,nums2);



