
// For printing the numbers from 1 to 5
// Always use i++ and <=the end point 

for(var start=1; start <=5; start++)
 {
     console.log(start);
}

// For printing numbers from 10 to 1
// Alwya use i-- and >=the end point
for(var start=10; start>=1; start--)

{
     console.log(start);

 }

// WHILE LOOP
// Below code will also print numbers from 1 to 5
// Var i has to be declared outside

var i = 1;

while (i<=5){
    console.log(i);
   i++;
}

 
//  Below code will also print numbers from 5 to 1 using While Loop
var i =5;
 while(i>=1)
{
    console.log(i);
     i--;
  }

// DO WHILE LOOP
// To print numbers from 1 to 5
var i = 1;
do{
     console.log(i);
     i++;
 }
  while(i <=5)

// DO WHILE LOOP
// To print numbers uin reverse Order
var i = 5;
do{
    console.log(i);
     i--;
 }
 while(i >=1)

// Implicit Conversion
// Below Javascript converts a and b directly to string
// The output it will give is 1020.

var a = 10;
var b = 20;
console.log("Addition =" +a+b)


var a = 40;
var b = 20;
var c = 30;

// WAP to check which variable is greater and print message accordingly


if (a > b && a > c)
{
    console.log("Print a is greater than b and c")
}
else if (b > a && b > c)
{
    console.log("Print b is greater than a and c")
}
else if (c > a && c> b)
{
    print("Print c is greater than b & a")
}
else {
    print("All parameters are equal")
};