


const unameInput = document.getElementById("unameInput")
const saveTools = document.getElementById("saveTools")
const lnameInput = document.getElementById("lnameInput")

saveTools.addEventListener("click",function(e){

    let username = unameInput.value;
    let lastname = lnameInput.value;
    localStorage.setItem("studentName",username)
    localStorage.setItem("LastName",lastname)

})
