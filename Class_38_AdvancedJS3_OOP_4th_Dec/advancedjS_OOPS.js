// How to create Objects using JS
// We have to give a BLUEPRINT to JS


// We can give a blueprint to a JS using Class

// The class always takes a function called constructor() inside which key value properties are paseed


// Class is a blueprint of an OBJECT
// constructor is a function or a factory which creates new Objects.
class Mobile{

    constructor (mobileName, mobileCost, mobileColor){

        // const this = { }; The constructor works behind the scene by creating a blank Object

        this.name = mobileName; // {name: "onePlus"}
        this.cost = mobileCost; // {name: "onePlus", cost: 2000}
        this.color = mobileColor;
        // return this; {name: "OnePlus", cost: 2000}
    }
}

// now we will use a keyword NEW to pass the values in the class

const m1 = new Mobile("Oneplus", 2000, "black");
console.log(m1);

const m2 = new Mobile("Nokia", 5000, "blue");
console.log(m2);


// Name , Designation and Salary
// We have created the below CLASS for practice

class employee{
    constructor (employeeName, employeeSalary,employeeDesignation){

        this.name = employeeName;
        this.salary = employeeSalary;
        this.designation = employeeDesignation;
    
    }
}

const e1 = new employee("Ajinkya", 9000, "Engineer")

console.log(e1)

//  Lets add switchOn and switchOff functions to the mobile class
// Lets copy the class first


class Mobile1{

    constructor (mobileName, mobileCost, mobileColor){

        // const this = { }; The constructor works behind the scene by creating a blank Object

        this.name = mobileName; // {name: "onePlus"}
        this.cost = mobileCost; // {name: "onePlus", cost: 2000}
        this.color = mobileColor;
        // return this; {name: "OnePlus", cost: 2000}
    }

    switchOn(){
        console.log(`${this.name} switched ON....`)
    }

    switchOff(){
        console.log(`${this.name} switched OFF....`)
    }
}

// We can directly access the name key from the CLASS by using the switchOn() function and switchOff() function

const m3 = new Mobile1("Oneplus", 2000, "black");
console.log(m3);
m3.switchOn()

const m4 = new Mobile1("Nokia", 5000, "blue");
console.log(m4);
m4.switchOff()

// Lets create a CLASS calculator and print in the console Add sub div and mul outputs

class calculator{

    constructor(a,b){

        this.a = a;
        this.b = b;
    }

    add(){
        console.log(this.a + this.b)
    }

    sub(){
        console.log(this.a - this.b)
    }

    mul(){
        console.log(this.a * this.b)
    }

    div(){
        console.log(this.a / this.b)
    }
}

const add1 = new calculator(10,2)

add1.add()
add1.sub()
add1.mul()
add1.div()

// Every Class parent is Prototype. All class are made from this.



// INHERITANCE

class Animal{
    constructor(hands,legs){
        this.hands = hands;
        this.legs = legs;
    }
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleeping...")
    }
}

class Human extends Animal{

    constructor(hands,legs,name){
        super(hands,legs);  //used to call parent class constructor
        // {hands:2, legs:2}
        this.name = name;  //{hands:2, legs:2, name:"Askshay"}
    }
}

const h1 = new Human (2, 2, "Akshay");
const h2 = new Human (3,2, "Asshay");

console.log(h1)