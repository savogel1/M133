document.getElementById("addTodo").onclick = addTask;

function lineThroughText(isChecked, label) {
    console.log(isChecked);
    console.log(label);
    if (isChecked == true) {
        label.style.textDecoration = 'line-through';
    } else {
        label.style.textDecoration = '';
    }
}

function addTask() {
    var list = document.getElementById("todoList");
    var listItem = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click", function() {
        if(checkbox.checked == true) {
            label.style.textDecoration = 'line-through';
        } else {
            label.style.textDecoration = '';
        }
    });

    listItem.appendChild(checkbox);
    label.innerText = document.getElementById("newTask").value;
    listItem.appendChild(label);
    list.appendChild(listItem);

    document.getElementById("newTask").value = "";
}