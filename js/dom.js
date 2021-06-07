const uncompletedTodo = "todos";

//add todo
function addTodo() {
  const uncompletedTodoList = document.getElementById(uncompletedTodo);
  const inputTodo = document.getElementById("add-new-todo").value;

  const todo = makeTodo(inputTodo);
  uncompletedTodoList.append(todo);
}

// create element todo
function makeTodo(list) {
  const li = document.createElement("li");
  li.classList.add("dark:text-white");
  li.innerText = list;

  const image = document.createElement("img");
  image.setAttribute("src", "src/images/trash.png");
  image.classList.add("w-6", "transform", "hover:scale-95");

  const deleteBtn = document.createElement("button");
  deleteBtn.id = "btn";
  deleteBtn.classList.add("delete", "outline-none", "flex");
  deleteBtn.append(image);

  const ul = document.createElement("ul");
  ul.classList.add("list-todos", "flex", "justify-between", "py-2");
  ul.append(li, deleteBtn);

  return ul;
}

// delete todo
document.addEventListener("click", myFunction);
function myFunction() {
  let btn = document.getElementsByClassName("delete");
  let i;
  for (i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
      let btn = this.parentElement;
      btn.remove();
    };
  }
}

// chance mode
function chanceMode() {
  const btnChanceToDarkMode = document.querySelector(".chance-mode > button");

  btnChanceToDarkMode.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
  });
}
