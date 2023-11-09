


// Function Expression....They are not hoisted

const add = function(){
    console.log("adding using FExp")
}
add();

// IIFE- Immediately returned function Expression

// We will see first the RETURN

function calculatepercentage(marksObtained,totalMarks){

    let percent = (marksObtained / totalMarks) * 100;
    return percent;
}

let p = calculatepercentage(200,350);

console.log("Abdul got " + p + " %")

// Now we will see IIFE
//  Is used to be executed only once. for example signing In.

let x = (function(a,b){
          return a+b;

        })(100,200)


        console.log(x)



