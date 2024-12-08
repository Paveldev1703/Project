const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#user-input");
const listContainer = document.querySelector("#list-container");

let tasks = [];

// Henter fra localStorage hvis er noe der.

const storedTasks = localStorage.getItem("tasks");
if(storedTasks){ // Gjør en if sjekk på om storedTasks er undefined eller ikke.
    tasks = JSON.parse(storedTasks);
    renderTasks();

}

taskForm.addEventListener("submit", (e) => {
    e.preventDefault(); // hindrer en automatisk refresh av nettsiden.

    const formData = new FormData(taskForm);
   

    tasks.push({
        timeStamp: new Date().toLocaleString("nn-NO"),
        description: formData.get("user-input"),
        completed: false,
    });

    saveToLocalStorage();
    renderTasks();
});

function renderTasks() {
    // Tøm list-container i HTML dokumentet.
    while (listContainer.firstChild) {
        listContainer.firstChild.remove();
    }
    // FY FY!
    // listContainer.innerHTML ="";
    tasks.forEach((task, index) => {
        // Bygg opp HTML elementer for å vise tasks på nettsiden.
        // Bygg en task-container
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        // Vis timeStamp
        const timeStampELem = document.createElement("p");
        timeStampELem.classList.add("time-stamp");
        timeStampELem.textContent = task.timeStamp;

        // Vis desecrption
        const descriptionElem = document.createElement("input");
        descriptionElem.type = "text";
        descriptionElem.classList.add("description");
        descriptionElem.textContent = task.description;
        descriptionElem.readOnly = true;

        // Vis task completed chechbox
        const taskCompletedElem = document.createElement("input");
        taskCompletedElem.type = "checkbox";
        taskCompletedElem.checked = task.completed;
        
            if (taskCompletedElem.checked) {
                descriptionElem.classList.add("checked");
                taskContainer.classList.add("checkedbg");

            }else {
                descriptionElem.classList.remove("checked");
                taskContainer.classList.remove("checkedbg");
                
            }
            
            taskCompletedElem.classList.add("completed-checkbox");
            taskCompletedElem.addEventListener("change", () => {
                if (taskCompletedElem.checked) {
                    descriptionElem.classList.add("checked");
                    taskContainer.classList.add("checkedbg");
                } else {
                    descriptionElem.classList.remove("checked");
                    taskContainer.classList.remove("checkedbg");
                    
                }
                tasks[index].completed = taskCompletedElem.checked;
                saveToLocalStorage();
            });


        // Edit button
        const editButtonElem = document.createElement("button");
        editButtonElem.textContent = "Endre";
        editButtonElem.classList.add("edit-button");
        editButtonElem.addEventListener("click", () => {
             if(descriptionElem.readOnly) {
                descriptionElem.readOnly = false;
                descriptionElem.focus(); // Setter fokus til elementet. At dette blir aktivt element.
                editButtonElem.textContent = "Lagre";
                
            } else {
                tasks[index].description = descriptionElem.value;
                saveToLocalStorage();
                descriptionElem.readOnly = true;
                editButtonElem.textContent = "Endre";
                }
        });

        // Delete button
        const deleteButtonElem = document.createElement("button");
        deleteButtonElem.textContent = "Slett";
        deleteButtonElem.classList.add("delete-button");
        deleteButtonElem.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveToLocalStorage();
            renderTasks();
        });

        // Append items 
        taskContainer.append(
            timeStampELem, 
            descriptionElem, 
            taskCompletedElem, 
            editButtonElem, 
            deleteButtonElem
        );
        listContainer.prepend(taskContainer);

    })
}

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}