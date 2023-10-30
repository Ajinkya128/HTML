


var isOrderAbove500 = true;
var isBigMacPresent = true;
var isOfferRunning = false;

// AND
// if order is aboce 500 and order contains bigMac
console.log( isOrderAbove500&&isBigMacPresent);

// if orffer is running and order is above 500 and order contains bigmac
console.log(isOfferRunning && isOrderAbove500 && isBigMacPresent);


// OR
// if order is above 500 or order contains bigMac
console.log(isOrderAbove500 || isBigMacPresent);

// if offer is running or order is above 500 and bigmac present
console.log(isOfferRunning || ( isOrderAbove500 && isBigMacPresent));

// String Concanate

var fname = "Ajinkya";
var email = "ajinkya@gmail";
var greet = "Hello";

console.log( greet + fname);

console.log("Hiiii " + "How are you " + fname + " This is your email " + email)


var x = 10;
var y = 20;

console.log( "Addition of " + x  + " and " + y + " is " + (x+y))

console.log( "Subtraction of " + x  + " and " + y + " is " + (x-y))

console.log( "Multiplication of " + x  + " and " + y + " is " + (x*y))

console.log( "Division of " + x  + " and " + y + " is " + (x/y))

// CONDITIONAL STATEMENTS

// IF ELSE statement 

var x = true;

if (x = true)
{
    console.log("The condition is true")
}

else{
    console.log("The condition is false")
};

// Using the Burger reference
if (isOrderAbove500 && isBigMacPresent)
{
    console.log("you got free fries")
}

else{
    console.log("Better luck next time")
};


// if orffer is running and order is above 500 and order contains bigmac

if (isOfferRunning && isOrderAbove500 && isBigMacPresent)
{
    console.log("you got free fries")
}

else{
    console.log("Better luck next time")
};

// IF ELSEIF ELSE

var dayOfWeek = 2;
var dayOfWeek = 3;

if( dayOfWeek == 1)
{
    console.log("It is Monday")
}
else if (dayOfWeek == 2)
{
    console.log("It is Tuesday")
}

else if (dayOfWeek == 3)
{
    console.log("It is Wednesday")
}

else if (dayOfWeek == 4)
{
    console.log("It is Thursday")
}

else if (dayOfWeek == 5)
{
    console.log("It is Friday")
}

else{
    console.log("Invalid day of the week")
};






// FOR A WHOLE MONTH

var monthnumber = 10;

if( monthnumber == 1)
{
    console.log("It is January")
}
else if (monthnumber == 2)
{
    console.log("It is Febrauary")
}
else if (monthnumber == 3)
{
    console.log("It is March")
}
else if (monthnumber == 4)
{
    console.log("It is April")
}
else if (monthnumber == 5)
{
    console.log("It is May")
}
else if (monthnumber == 6)
{
    console.log("It is June")
}
else if (monthnumber == 7)
{
    console.log("It is July")
}
else if (monthnumber == 8)
{
    console.log("It is August")
}
else if (monthnumber == 9)
{
    console.log("It is Febrauary")
}
else if (monthnumber == 10)
{
    console.log("It is October")
}
else if (monthnumber == 11)
{
    console.log("It is November")
}
else if (monthnumber == 12)
{
    console.log("It is December")
}

else{
    console.log("Invalid day of the week")
};

