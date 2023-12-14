
console.log($) // To check if Jquery has been installed or not

// Accessing Elements from DOM


const heading = $("#heading");
const boxElements = $(".box");
const h1Tag = $("h1");


console.log(heading);
console.log(boxElements);
console.log(h1Tag);

// How to chnage content on JQuery

// Changing Content:
// innerText ===> text()
// innerHTML ===> html()
// value ===> val()

console.log($(heading).text());
// $(heading).text("Hello from jQuery")

// Adding Eventlisteners
const btn = $("#btn");
const box =$("#box")
const btn2 = $("#btn2");

// btn.addEventlistener("click",function(e){})

$(btn).click(function(e){
    // console.log("you clicked button....")
    $(heading).text("Hello from jQuery")
})


$(btn2).click(function(e){
    $(box).html("<h5>Heading 5</h5>");
})


const ip = $("#ip")
const btn3 = $("#btn3");

$(btn3).click(function(e){

    console.log($(ip).val());
})


// How to change attribute using Javascript

const image = $("#image")
const changeImgBtn = $("#changeImg");

$(chnageImgBtn).click(function(e){

    // attr("src") --> works as getAttribute
    // attr("src", "1.jpg") --> works as

    $(image).attr("src","./Design.png");
    $(image).attr("alt","New Batman");

})


// Adding removing Classes in jQ

const addBorder = $("#addBorder")
const addPadding = $("#addPadding")
const box5 = $("#box5")

// addClass() removeClass() toggleClass()

$(addBorder).click(function(e){
    $(box5).addClass("border")
})

$(addPadding).click(function(e){
    $(box5).addClass("padding")
})



