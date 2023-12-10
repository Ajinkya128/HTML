

const saveTodoBtn =document.getElementById("saveTodoBtn");
const addTodoIp =document.getElementById("addTodoIp");

// const todos = ["a","b","c"];



saveTodoBtn.addEventListener("click",function(){


    if(localStorage.getItem("todoList") !=null)
    {

        let todoString = localStorage.getItem("todoList");
        const todoArray = JSON.parse(todoString);
        todoArray.push(addTodoIp.value);
        let todosString = JSON.stringify(todoArray);
        localStorage.setItem("todoList",todoString)
    }

    else{
        // create ne todolist.
        const allTodos =[];
        let todo = addTodoIp.value;
        allTodos.push(todo);
        let todosString = JSON.stringify(allTodos);
        localStorage.setItem("todoList", todosString)
    }

    // let todoString = JSON.stringify(todos);
    // localStorage.setItem("todoList",todoString);
})



const clearLS = document.getElementById("clearLS")
const deleteStudent = document.getElementById("deleteStudent")

clearLS.addEventListener("click",function(e){
    localStorage.clear();
})

deleteStudent.addEventListener("click",function(e){

    localStorage.removeItem("")
})