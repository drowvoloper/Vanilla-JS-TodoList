//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo"); 

//event listeners       
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions
function addTodo(event){
    //prevent from submitting
    event.preventDefault() 
    
    //Create DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check Mark
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)
    //Check Trash
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)    
    //Append to list 
    todoList.appendChild(todoDiv);
    //clear input value
    todoInput.value = ""
}
function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
          const todo = item.parentElement;
          todo.classList.add("fall")
          todo.addEventListener("transitionend", function(){
            todo.remove();
          });  
    }
     //the check button 
     if (item.classList[0] === "complete-btn") {
         const todo = item.parentElement;
         todo.classList.toggle("completed")
     }
}  


/*
this part
function filterTodo(e){
 
    todoList.childNodes.forEach(function(todo){
        switch(e.target.value){
            case"all":
            todo.style.display = "flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }else{
                    todo.style.display= "none"; 
                }
        }
    });
}
*/
 