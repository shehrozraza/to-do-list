function add_item() {
    var MyInput = document.getElementById('input').value;
    if (MyInput !== "") {
        var todoList = document.getElementById('todoList');
        
        // Create new checkbox
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.id = "checkbox" + (todoList.childElementCount + 1);
        checkbox.onclick = check;

        // Create new label
        var label = document.createElement('label');
        label.className = "labels";
        label.htmlFor = checkbox.id;
        label.id = "label" + (todoList.childElementCount + 1);
        label.innerHTML = MyInput;

        // Create a container div for checkbox and label
        var cBox = document.createElement('div');
        cBox.className = "cBoxes";
        cBox.appendChild(checkbox);
        cBox.appendChild(label);

        // Append the container to the todo list
        todoList.appendChild(cBox);
    }
    document.getElementById('input').value = "";  // Clear the input field
}

function check() {
    var labels = document.getElementsByClassName('labels');
    for (let i = 0; i < labels.length; i++) {
        var checkbox = document.getElementById('checkbox' + (i + 1));
        if (checkbox.checked) {
            labels[i].style.textDecorationLine = "line-through";
        } else {
            labels[i].style.textDecorationLine = "none";
        }
    }
}
// to clear the list
function myClear(){
        var todoList=document.getElementById('todoList')
        todoList.innerHTML=''
        }
