const taskEntry = document.getElementById("taskEntry");
const taskList = document.getElementById("task-list");

function addTask()
{
	if (taskEntry.value == "")
	{
		alert("Enter a Task first.......");
	}
	else
	{
		let li = document.createElement("li");
		li.innerHTML = taskEntry.value;
		taskList.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "&#10060;";
		li.appendChild(span);
		saveData();
	}
	taskEntry.value = "";
}


taskList.addEventListener(
	"click",
	function (event) 
	{
		if (event.target.tagName==="LI")
		{
			event.target.classList.toggle("checked");
			saveData();
		}
		else if (event.target.tagName === "SPAN")
		{
			event.target.parentElement.remove();
			saveData();
		}
		console.log(event);
	},
	false
	);

function saveData()
{
	localStorage.setItem("myTask", taskList.innerHTML);
}

function displayData()
{
	taskList.innerHTML = localStorage.getItem("myTask");
}
displayData();



// const taskEntry = document.getElementById("taskEntry");
//         const taskList = document.getElementById("task-list");

//         function addTask() {
//             const taskText = taskEntry.value.trim();

//             if (taskText === "") {
//                 alert("Enter a task first.......");
//             } else {
//                 const li = document.createElement("li");
//                 li.textContent = taskText;

//                 const span = document.createElement("span");
//                 span.innerHTML = "&#10060;";
//                 span.classList.add("delete");

//                 li.appendChild(span);
//                 taskList.appendChild(li);

//                 saveData();
//             }

//             taskEntry.value = "";
//         }

//         taskList.addEventListener(
//             "click",
//             function (event) {
//                 if (event.target.classList.contains("delete")) {
//                     event.target.parentElement.remove();
//                 } else if (event.target.tagName === "LI") {
//                     event.target.classList.toggle("checked");
//                 }

//                 saveData();
//             },
//             false
//         );

//         function saveData() {
//             localStorage.setItem("myTask", taskList.innerHTML);
//         }

//         function displayData() {
//             const savedData = localStorage.getItem("myTask");
//             if (savedData) {
//                 taskList.innerHTML = savedData;
//             }
//         }

//         displayData();







//*****************************************************8
/*
function addTask() {
  const taskEntry = document.getElementById("taskEntry");
  const taskList = document.getElementById("taskList");

  if (taskEntry.value.trim() !== "") {
    // Create a new <li> element
    const newTask = document.createElement("li");

    // Create a checkbox for the task
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task" + (taskList.children.length + 1);

    // Create a label for the task
    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = taskEntry.value;

    // Append the checkbox and label to the new task <li>
    newTask.appendChild(checkbox);
    newTask.appendChild(label);

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    taskEntry.value = "";
  }
}
*/
