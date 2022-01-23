function addTodo() {
    let input = document.getElementById("todoInput").value;
    let todoListContainer = document.getElementById("todoListContainer");

    if(localStorage.getItem("todos")) {
        let currentTodos = localStorage.getItem("todos");
        currentTodos = JSON.parse(currentTodos);
        currentTodos.data.push(input);
        localStorage.setItem("todos",JSON.stringify(currentTodos));

    } else {

        let data = {
            "data":[input]
        };

        localStorage.setItem("todos",JSON.stringify(data));
    }
    
    let currentTodos = localStorage.getItem("todos");
    currentTodos = JSON.parse(currentTodos);

    let dataIndex = currentTodos.data.length-1;
    todoListContainer.innerHTML += `<li id="${dataIndex}">${input} <button onclick="removeTodo(${dataIndex})">x</button></li>`;
    document.getElementById("todoInput").value = "";

}

function removeTodo(dataIndex) {
console.log(dataIndex);
if(localStorage.getItem("todos")) {
    let currentTodos = localStorage.getItem("todos");
    currentTodos = JSON.parse(currentTodos);
    currentTodos.data.splice(dataIndex,1);
    localStorage.setItem("todos",JSON.stringify(currentTodos));
    document.getElementById(dataIndex).remove();
    loadTodoOnPageLoad();
}

}

function loadTodoOnPageLoad() {
    document.getElementById("todoListContainer").innerHTML = "";
    if(localStorage.getItem("todos")) {
        let currentTodos = localStorage.getItem("todos");
        currentTodos = JSON.parse(currentTodos);
        currentTodos.data.forEach((item,index) => {
            todoListContainer.innerHTML += `<li id="${index}">${item} <button onclick="removeTodo(${index})">x</button></li>`;
        });

    }
}

window.onload = function() {
    loadTodoOnPageLoad();
};