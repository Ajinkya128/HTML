

const registrationForm = document.getElementById("registrationForm")
const fnameInput = document.getElementById("fnameInput")
const mobileInput = document.getElementById("mobileInput")
const emailInput = document.getElementById("emailInput")


const fnameRegex = /^[a-zA-Z]{2,20}$/
const phoneRegex = /^[0-9]{10}$/
const emailRegex = /^([a-zA-Z0-9\.\_]{2,50})([@]{1})([a-z0-9]{2,40})([.]{1})([a-z]{2,10})$/

registrationForm.addEventListener("submit",function(e){

    e.preventDefault(); //to prevent the default action
    // console.log("form submitted");

    let fname = fnameInput.value;
    let mobileNo = mobileInput.value;
    let emailId = emailInput.value;


    if(fnameRegex.test(fname)==true)
    {
        if(phoneRegex.test(mobileNo) == true)
        {
            if(emailRegex.test(emailId) == true)
            {
                registrationForm.submit();
                
            }
            else{
                error.innerText = "email ID is invalid"
            }

        }  
        else{
            // console.log("mobile no invalid....")
            error.innerText = "mobile no invalid"
        }
    }
    else{
        // console.log("First name is invalid")
        error.innerText = "First name is invalid"
    }

})
