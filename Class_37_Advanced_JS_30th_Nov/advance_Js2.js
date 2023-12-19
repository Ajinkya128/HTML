

// Object Destructuring
// Spread operator

const mobile = {

    name: "OnePlus",
    cost: 20000,
    color: "black",
    camera: "64Mp"
};

//  const mobile2 = {...mobile}

// console.log(mobile,mobile2);

// To update the property we have to specify the key value after the ...mobile

const mobile2 = {
    ...mobile,
    cost:25000,
}

console.log(mobile,mobile2);
// In the above you will see the cost has been updated.
// Similary you can do the same for color and othe rproperties

// THIS keyword.

// Lets see Method function and normal function
//  The function inside of a Object is called a METHOD FUNCTION
// The function outside is a normal function

const calc = {

    a:10,
    b:20,
    add:function(){
        // METHOD FUNCTION
        console.log("Inner add function")
    }
}

function add1()
{
    // function
    console.log("outer add function")
}

calc.add()
add1(); 

// This points to current Object
// THIS does not point to a function

// Now we will see how to use the THIS keyword.
// SUppose we want to change the name of the Object in the future. In this case we will have to change the name in the entire function
// Which can be 200 lines Long. To avoid this we can simply use the THIS keyword.
//  In the below example if you do not use the This keyword then it will give an error.

var a =100; var b =200;
const calc1 = {

    a:10,
    b:20,
    add:function(){
        // METHOD FUNCTION
        console.log(this.a + this.b) //calculator Object
    }
}

function add()
{
    // function
    console.log(a+b)
    console.log(this); //global object....Will return the Windows Object since this is in the global scope
}

calc1.add()
add();

console.log(this)// Will return the Windows Object since this is in the global scope

// **********//
// Adding THIS on a button

const btn = document.getElementById("btn")

btn.addEventListener("click",function(e){

    console.log(this) //current element on which this is attached
    // the above will return the btn object
    console.log(btn.innerText) //This will return "Click me" in the console.
})

// NESTED OBJECT
// We will see an object inside of an object
// And how to access the value inside of nested Object
// NOTE when using THIS inside a Object it will always return a OBJECT inside which it is

const outer = {
    a: 10,
    b: 20,
    outerAdd: function(){
        console.log(this);
    },

    inner : {
        x: 100,
        y: 200,
        innerAdd : function(){
            console.log(this);
        }
    }
}

outer.outerAdd();
outer.inner.innerAdd()

// Undefined + Undefined will always give an NAN
// Undefined when the variable is not mentioned (no value)

const outer1 = {
    a: 10,
    b: 20,
    outerAdd: function(){
        console.log(this.x);
    },

    inner : {
        x: 100,
        y: 200,
        innerAdd : function(){
            console.log(this.x);
        }
    }
}

outer1.outerAdd();
outer1.inner.innerAdd()


// Call() , apply() and bind() functions
// Lets see an example
// call() will always take the actual parameters
// apply() will take the parameters inside of an Array


const calc2 = {

    a: 10,
    b: 20,
    add: function(x,y,l,m)
    {
        console.log(this.a + this.b + x+y+l+m);
    }
}

const calc3 = {

    a: 30,
    b: 40
}

calc2.add.call(calc2,100, 200, 300, 400);
calc2.add.apply(calc2,[100,200,300,400]);

// bind() function can be stored in a variable. WHich can be used on a later time as a function to be called.

const newAdd = calc2.add.bind(calc2)  //later point in time
newAdd(100,200,300,400)

// call() apply() and bind() are used to change the context(values) of THIS keyword while running the function
// Difference between call and apply is call() takes all the parameters required to a function in comma seperated values.
// apply() takes all the parameters required to the function in a single array.

// bind() returns a brand new function which has the context change to the new object and can be run later point in time. 