

// Async or NON Blocking JS.....

console.log("Hello");

setTimeout(function(){
    console.log("World")
},10);


console.log("I am JS.....");


// PROMISE web API

// How to create a new promise --> Promise 
//  getting new post from server

const p1 = new Promise(function(reject,resolve){

    let dataReceived = true;

    if( dataReceived == false)
    {
        reject("Something went wrong.....")
    }
    else{
        resolve("Data received")
    }
});

// How to use a promise..... Consuming a Promise
// then() is used when the promis is TRUE
// catch is used when the promis is REJECTED

p1.then(function(x){
    console.log(x);
})

p1.catch(function(y){
    console.log(y)
})


// Promise WEB API 2 example.

const promise2 = new Promise(function(resolve,reject){

    let dataFailed = false

    if(dataFailed == false){

        resolve("great Success")

    }
    else{

        reject("Try again later")
    }

})

promise2.then(function(a){

    console.log(a)

}).catch(function(b){

    console.log(b)
})


// PRIORITY QUEUE Microtask
// Promise functions then() and catch() are always given priority in stacking

console.log("hello")
setTimeout(function(){

    console.log("set timeout called")
},0)

const p3 = new Promise(function(resolve,reject){

    console.log("promise called");
    resolve("Promise resolved")
})

p3.then(function(msg){

    console.log(msg);
})

console.log("world");


FETCH


fetch("https://dummyjson.com/products") //This is a dummy server we have used here
.then(function(response){
    console.log(response); //We will get a data which is not readable bu JS therefore we will use the json() function and return it to then
    console.log("Fetch then called");
    return response.json() //return Promise
})
.then(function(data){
    console.log("Json then called")
    console.log(data);
})
.catch(function(err){
    console.log("catch called");
    console.log(err);
})

// In the above, the fetch() function returns a Promise, which we handle using the then() method. Inside the first then() method, we accept the response 
// from the request and convert it into an object using the json() method.

// In the second then() method, we receive the returned json data from the call to the json() method, then log that data to the console.

// We also add the catch() method to handle any error that might happen when running the request.

