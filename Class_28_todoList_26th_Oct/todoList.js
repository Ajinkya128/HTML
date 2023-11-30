

const input =document.getElementById("todoInput")
const button = document.getElementById("addTodoBtn")
const todoListParent = document.getElementById("todoList")

const newtodo = document.getElementById("addTodoBetter")


// add ev listn on btn
    // get input value from ip tag
    // create new li tag
    // add ip value to li tag
    // add the new li tag to the ordered List


// Here we have learned two important functions "createElement" and "appendChild"

button.addEventListener("click",function(){

    let todo = input.value;
    const newLi= document.createElement("li");
    newLi.innerText = todo;
    todoListParent.appendChild(newLi);
});

// Here we learned how to make list better 

newtodo.addEventListener("click",function(){

    let todo= input.value;
    // let layout = "<li>"+todo+"<button>Delete</button></li>"

    let layout = `<li>
                        ${todo}
                        <button>
                            Delete
                        </button>
                  </li>`;
    todoListParent.insertAdjacentHTML("beforeend",layout)
})

// const addParaBtn = document.getElementById("addParaBtn")
// const parent = document.getElementById("parent")

// addParaBtn.addEventListener("click",function(){

//     let layout = "<p>Hello<p>";
//     parent.insertAdjacentHTML("afterbegin",layout);
//     parent.insertAdjacentHTML("beforebegin",layout);
//     parent.insertAdjacentHTML("afterend",layout);
//     parent.insertAdjacentHTML("beforeend",layout);
// })

// SIngle quote and double quote has to be written in one line

// To avoid this we introduce TEMPLATE LITERAL

// let a = 20;
// let b = 10;

// console.log("Addition of " +a+ "and" +b+ "is" (a+b))

// console.log(`Addition of ${a} and ${b} is ${a+b}`)



// Adding Event to Dynamically created Elements

todoListParent.addEventListener("click",function(e){

    console.dir(e.target.tagName);
    if(e.target.tagName=="BUTTON")
    {
        // Below COde is deleting just the delete button.
        // But we want to delete the list. To do so we use parentElement
        // e.target.remove();

        e.target.parentElement.remove()
    }
})



// DOM TRaversing
// To access elements near to the element which is described in JS.

// Below we will access parent. But only Myself is defined in JS.
// Similarly adjacent elements can be accessed


const myself = document.getElementById("myself")

console.log(myself);

// The below will be used
console.log(myself.parentElement);

console.log(myself.previousElementSibling)

console.log(myself.nextElementSibling)

