

// We will create two methods using the "id" used in HTML which are btn and heading
// Then we will add the Eventlistner on the btn and "innerText" to be displayed on the h1 tag

const btn = document.getElementById("btn")
const heading = document.getElementById("heading")

btn.addEventListener("click",function(){

    heading.innerHTML= ("You click me")
})

// Noe we will see how to chnage the heading from h2 to h3
// We will follow a similar processby creating a heading h2 and a button
// By clicking on the button we will change the 

const btn2 = document.getElementById("btn2");
const parent = document.getElementById("parent");

btn2.addEventListener("click",function(){
    parent.innerHTML = "<h3>Heading 3 <h3>";
})

// SET ATTRIBUTe and GET ATTRIBUTE

const changeImage = document.getElementById("changeImage");
const batman = document.getElementById("batman");

changeImage.addEventListener("click",function(){
    // Changing Attribute Values using JS

    batman.setAttribute("src","./tour2.jpg")
    batman.setAttribute("alt", "New Image")

// We use getAttribute function to get the source of the new image in the console.
    let srcValue = batman.getAttribute("src");

    console.log(srcValue);
})

