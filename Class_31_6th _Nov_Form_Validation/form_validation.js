// ([a-zA-Z]{2,20}) //First Name
// ([a-zA-Z]{2,40}) //Full Name

// Escape character
// will have"\" before every character you need
// eg. \- \* \? \+ \)

// For email BELOW most IMPORTANT
// /([a-zA-Z0-9\.\_]{2,50})([@]{1})([a-z0-9]{2,40})([.]{1})([a-z]{2,10})/gm


// /[a-zA-Z0-9\-\s\,\/\.\']{2,100}/gm
// Hello How are you ,.,/.''.

// /[a-zA-Z0-9\-\s\,\/\.\'\+]{2,100}/gm
//Mobile +919299299299-990292

// Form Validation code to prevent the from from submitting the data to the client
// Before submitting we need to verify the FOrm using Regression Expression Regex


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

            // if(emailRegex(emailId) == true){

            // }
            // else{
            //     error.innerText = "emailID is invalid"
            // }
        {
            registrationForm.submit();
            
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
