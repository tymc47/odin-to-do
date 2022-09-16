import { addTask, toggleTask} from "./index"

const maincontent = document.querySelector('.maincontent')

const sidebarBtnFunction = () => {
    const taskBtn = document.querySelector('#tasksbtn')
    const todayBtn = document.querySelector('#todaybtn')
    const importantBtn = document.querySelector('#importantbtn')
    const addListBtn = document.querySelector('#addlistbtn')

    taskBtn.addEventListener('click', loadTasks)

    todayBtn.addEventListener('click', loadToday)
    
    importantBtn.addEventListener('click', loadImportant)
    
}

const loadTasks = () => {
    // maincontent.removeAttribute('class')
    // maincontent.classList.add('maincontent')
    
    //load display
    maincontent.innerHTML = ""   
    const template = `<div id="task-heading">
    <h1>Tasks</h1>
    <button id="displayformbtn">
    <span class="material-symbols-outlined">add</span>
    </button>
    </div>
    <div id="addtaskform">
    <input type="text">
    <input type="date">
    <input class="star" type="checkbox">
    <button type="button" id="addtask">Add</button>
    <button type="button" id="canceladd">Cancel</button> 
    </div>    
    <div class="taskcontainer">
    </div>`  
    maincontent.innerHTML += template

    //form functionality and display
    const addTaskForm = document.querySelector('#addtaskform')
    document.querySelector('#displayformbtn').addEventListener('click', () => {
        addTaskForm.style.display = "block"
    })   

    //add functionality to form buttons
    document.querySelector('#addtask').addEventListener('click', () => {
        const taskName = document.querySelector('#addtaskform > input[type="text"]')
        const taskDate = document.querySelector('#addtaskform > input[type="date"]')
        const taskImportant = document.querySelector('#addtaskform > input[type="checkbox"]')
        if (taskName.value == "") {alert("Please enter a tilte for your task!"); return;}

        addTaskForm.style.display = "none";
        addTask(taskName.value, taskDate.value, taskImportant.checked)
        taskName.value = ""
        taskDate.value = ""
        taskImportant.checked = false
    })

    document.querySelector('#canceladd').addEventListener('click', () => {
        addTaskForm.style.display = "none";
    })
}

const loadToday = () => {
    console.log("In today")
}

const loadImportant = () => {
    console.log("In Important")
}

const displayAll = (storage) => {
    const taskContainer = document.querySelector('.taskcontainer')
    taskContainer.innerHTML = ""

    //display all task
    console.log(storage)
    storage.forEach((task, index) => {
        if (task.completed) {return}
        const taskTemplate = `<div class="task">
                            <input type="checkbox" class="taskcompleted" data-task=${index}>
                            <span class="taskname" data-task=${index}>${task.name}</span>
                            <input type="date" class="taskdate" data-task=${index} value=${task.date}></button>
                            <button class="${task.important? "taskimportant true" : "taskimportant"}" data-task=${index}>
                                <span class="material-symbols-outlined">star</span>
                            </button>
                            </div>`
        taskContainer.innerHTML += taskTemplate;
    })
    
    //add functionality to task buttons
    const dateBtns = document.querySelectorAll(".taskdate")
    const importantBtns = document.querySelectorAll(".taskimportant")
    const completedBtns = document.querySelectorAll(".taskcompleted")
    dateBtns.forEach(btn => btn.oninput = toggleTask)
    importantBtns.forEach(btn => btn.onclick = (event) => {
        toggleTask(event)
        event.currentTarget.classList.toggle("true")
    })
    completedBtns.forEach(btn => btn.addEventListener("change", toggleTask))


}

export {
    sidebarBtnFunction,
    loadTasks,
    displayAll
}