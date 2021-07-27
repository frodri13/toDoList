// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions

function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  // todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // CHECK trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // Append to list
  todolist.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = "";
}
