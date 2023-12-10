


const greet = document.getElementById("greet")
const greetMeBtn = document.getElementById("greetMe");



greetMeBtn.addEventListener("click",function(e){

    if(localStorage.getItem("studentName")!=null)
    {

        let sName = localStorage.getItem("studentName");
        greet.innerText=`Hello ${sName}`

        let lName = localStorage.getItem("LastName");
        greet.innerText=`Hello ${lName}`

    }
    else{
        greet.innerText = "User not saved";
    }

    
})