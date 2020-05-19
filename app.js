//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo"); 

//event listeners       
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//filterOption.addEventListener("click", filterTodo);

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


// #1 I would use a different trigger for your listener, because now it triggers each time you click the <select> input. You want the event to be triggered not when the input is clicked but when its value has changed. You can make this using the "change" event.

// #2 If you check the 'todo' parameter inside the forEach loop, you will find the first element is "#text", which is not a HTML element. This can cause unexpected behaviour. 

// You can use todoList.children instead. This, however, returns a HTML Collection and if you wanna loop through it with forEach you must transform it in an array before. Since ES6 it's really easy because you just need to use what is called as "spread syntax".

// To use the spread syntax write "..." before the object you wanna transform into an array. For example:
// let children = [...todoList.children];

filterOption.addEventListener("change", filterTodo);

function filterTodo(e) {
	let children = [...todoList.children];
	children.forEach(todo => {
		switch(e.target.value) {
			case "all": todo.style.display = "flex";
				break;
			case "completed": 
				if (todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				};
				break;
		}
	});
}
