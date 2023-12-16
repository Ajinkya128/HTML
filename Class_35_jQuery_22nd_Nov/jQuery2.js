


const addParaBtn = $("#addParaBtn")
const parent = $("#parent")

$(addParaBtn).click(function(e){


    // $(parent).append("<p>Para Tag</p>")
    // $(parent).prepend("<p>Para Tag</p>")
    // $(parent).before("<p>Para Tag</p>")
    $(parent).after("<p>Para Tag</p>")
})



// Make calculator

const add = $("#add")
const sub = $("#sub")
const div = $("#div")
const mul = $("#mul")

const value1 = $("#value1")
const value2 = $("#value2")
const tag = $("#tag")

$(add).click(function(e){

    let a = value1.val()
    let b = value2.val()
    let c = parseInt(a) + parseInt(b);
    $(tag).text("The addition of " + a +" & "+ b + " is " + c)

})


// Palindrome

const heading1 = $("#heading1")
const value = $("#value")
const check = $("#check")

$(check).click(function(e){

    //  let c = value.val()
    //  console.log(c)

    function compareArrays(a){

         return a.split("").reverse().join("") === a;

     }
    let b = compareArrays(value.val())

    if(b){
        $(heading1).text(value.val() + " is a Palindrome")
    }
    else{

        $(heading1).text(value.val() + " is NOT a Palindrome")

    }
 
})

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");


// if(value.val()){

    //     for(i=0; i<=value.val();i++){
    //         console.log(i)
    //     }
    //     for(i<=value.val(); i>=0;i--){
    //         console.log(i)
    //     }







