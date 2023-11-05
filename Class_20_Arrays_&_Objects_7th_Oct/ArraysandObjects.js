// Array
// An array is made of strings

var student = ["Ajinkya","Abrar","Prasad","Prashant","Abdul"];

// Will print the entire array
console.log(student);

// If we need to access a particular name we can access by indexing
console.log(student[1]);

// Array are used to store "similar data types" in one variable.
var students = ["Ajinkya","Abrar","Prasad","Prashant","Abdul"];
console.log(students)

students[0] = "Nitin"
console.log(students)

// Accessing length of Array
console.log(students.length);

// You can use students.length-1 to access the last index
console.log(students[students.length-1]);

// Looping through array using a for loop
var student1 = ["Ajinkya","Abrar","Prasad","Prashant","Abdul"];

for(var i =0; i < student1.length; i++)
{
    console.log(student1[i]);
}

// Print in Reverse....REMEMBER the middle i is point until which the loop should go.
var student2 = ["Ajinkya","Abrar","Prasad","Prashant","Abdul"];

for(var i = student2.length; i >= 0; i--)
{
    console.log(student2[i]);
}


// Primitive Data Type and Non Primitive Data Type

// Ask prashant to share on Group the above
// var a = [10]  var = [10] are non pritive data types. Arrays and Objects are non primitive data types.
// Int, float, boolean etc are primitive data types

var a = [10];

var b = [10];

console.log(a==b); //false

console.log(a[0]==b[0]); //true

var a = [10];

var b = ["10"];

console.log(a[0]==b[0]); //true

console.log(a[0]===b[0]); //false

// Pass by value and Pass by reference
var a = [10];

var b = [10];

var c = a

console.log(c == a)


// OBJECT, anything which has Key and Value is an Object

var mobile = {
    brand: "Samsung",
    cost: 30000,
    color:"blue"

}

console.log(mobile.cost);

console.log(mobile.brand);


var subject_Marks = {
    Maths: 10,
    History: 40,
    Geography: 45,
    Physics: 33,
    Biology: 100,
    Chemsity: 75,
    Hindi: 89,
    Marathi: 67,
    name: "Ajinkya",
    email: "ajinkya128@gmail.com",
    id: 702,
}

console.log(subject_Marks.id);

// My name is, I have studied... etc but in Object.

