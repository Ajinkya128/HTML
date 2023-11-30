

const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const yellow = document.getElementById("yellow")
const box = document.getElementById("box")


red.addEventListener("click",function(){

    box.classList.add("colorred")
    box.classList.remove("colorblue","colorgreen","coloryellow")
})

blue.addEventListener("click",function(){

    box.classList.add("colorblue")
    box.classList.remove("colorred","colorgreen","coloryellow")
})

green.addEventListener("click",function(){

    box.classList.add("colorgreen")
    box.classList.remove("colorblue","colorred","coloryellow")
})

yellow.addEventListener("click",function(){

    box.classList.add("coloryellow")
    box.classList.remove("colorblue","colorgreen","colorred")
})


