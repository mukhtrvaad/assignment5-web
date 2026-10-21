console.log("Student: Mukhtarova Dana");
console.log("Group: SE-2530");

const helloBtn = document.getElementById("helloBtn");

if (helloBtn) {
    alert("Hello, JavaScript World!");

    helloBtn.onclick = function() {
        alert("Hello, JavaScript World!");
    };
}

const variablesBtn = document.getElementById("variablesBtn");

if (variablesBtn) {
    variablesBtn.onclick = function() {
        let product = "Notebook";
        let price = 250;
        let inStock = true;

        console.log("Product:", product);
        console.log("Price:", price);
        console.log("Available:", inStock);

        console.log("Addition:", 10 + 5);
        console.log("Subtraction:", 10 - 5);
        console.log("Multiplication:", 10 * 5);
        console.log("Division:", 10 / 5);

        console.log("Product: " + product + ", Price: " + price);
    };
}

const textBtn = document.getElementById("textBtn");

if (textBtn) {
    textBtn.onclick = function() {
        document.getElementById("text").textContent =
            "The text has been changed!";
    };
}

const styleBox = document.getElementById("styleBox");

if (styleBox) {
    document.getElementById("colorBtn").onclick = function() {
        styleBox.style.backgroundColor = "#b0b0b0";
    };

    document.getElementById("sizeBtn").onclick = function() {
        styleBox.style.fontSize = "26px";
    };
}

const itemList = document.getElementById("itemList");

if (itemList) {
    document.getElementById("addItem").onclick = function() {
        let item = document.createElement("li");
        item.textContent = "Item " + (itemList.children.length + 1);
        itemList.appendChild(item);
    };

    document.getElementById("removeItem").onclick = function() {
        if (itemList.lastElementChild) {
            itemList.lastElementChild.remove();
        }
    };
}

const hoverBox = document.getElementById("hoverBox");

if (hoverBox) {
    hoverBox.addEventListener("mouseover", function() {
        hoverBox.style.backgroundColor = "#aaaaaa";
    });

    hoverBox.addEventListener("mouseout", function() {
        hoverBox.style.backgroundColor = "#e6e6e6";
    });
}

const inputText = document.getElementById("inputText");

if (inputText) {
    inputText.addEventListener("keyup", function() {
        document.getElementById("outputText").textContent =
            inputText.value;
    });
}

const calculateBtn = document.getElementById("calculateBtn");

if (calculateBtn) {
    calculateBtn.onclick = function() {
        let first = document.getElementById("num1").value;
        let second = document.getElementById("num2").value;
        let operation = document.getElementById("operation").value;
        let result;

        if (first === "" || second === "") {
            document.getElementById("result").textContent =
                "Enter both numbers";
            return;
        }

        let a = Number(first);
        let b = Number(second);

        if (operation === "+") result = a + b;
        if (operation === "-") result = a - b;
        if (operation === "*") result = a * b;

        if (operation === "/") {
            if (b === 0) {
                document.getElementById("result").textContent =
                    "Cannot divide by zero";
                return;
            }

            result = a / b;
        }

        document.getElementById("result").textContent =
            "Result: " + result;
    };
}

const taskInput = document.getElementById("taskInput");

if (taskInput) {
    let tasks = [];
    const todoList = document.getElementById("todoList");

    function showTasks() {
        todoList.innerHTML = "";

        tasks.forEach(function(task, index) {
            let li = document.createElement("li");

            if (task.completed) {
                li.classList.add("completed");
            }

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;

            checkbox.onchange = function() {
                tasks[index].completed = checkbox.checked;
                showTasks();
            };

            let text = document.createElement("span");
            text.textContent = task.name;

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            deleteBtn.onclick = function() {
                tasks.splice(index, 1);
                showTasks();
            };

            li.appendChild(checkbox);
            li.appendChild(text);
            li.appendChild(deleteBtn);

            todoList.appendChild(li);
        });
    }

    function addNewTask() {
        let name = taskInput.value.trim();

        if (name === "") return;

        tasks.push({
            name: name,
            completed: false
        });

        taskInput.value = "";
        showTasks();
    }

    document.getElementById("addTask").onclick = addNewTask;

    taskInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addNewTask();
        }
    });
}