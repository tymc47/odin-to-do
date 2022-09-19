import { addTask, toggleTask, createList, loadTabs } from "./index"

const maincontent = document.querySelector('.maincontent')

const sidebarBtnFunction = () => {
    const taskBtn = document.querySelector('#tasksbtn')
    const todayBtn = document.querySelector('#todaybtn')
    const importantBtn = document.querySelector('#importantbtn')
    const completedBtn = document.querySelector('#completedbtn')
    const listFormBtn = document.querySelector('#addlistbtn')
    const addListBtn = document.querySelector('#addlist')
    const closeListFormBtn = document.querySelector('#closelistform')


    taskBtn.addEventListener('click', () => {loadTabs("tasks")})

    todayBtn.addEventListener('click', () => {loadTabs("today")})
    
    importantBtn.addEventListener('click', () => {loadTabs("important")})

    completedBtn.addEventListener('click', () => {loadTabs("completed")})

    listFormBtn.addEventListener('click', () => {
        document.querySelector('#addlistform').style.display = "block";
    })

    addListBtn.addEventListener('click', () => {
        const listname = document.querySelector('#addlistform > input[type="text"]')
        if (listname == "") {alert("Please enter list name"); return;}

        createList(listname.value);
        listname.value = ""
        document.querySelector('#addlistform').style.display = "none";
    })

    closeListFormBtn.addEventListener('click', () => {
        document.querySelector('#addlistform').style.display = "none";
    })
    
}

const loadLists = (listArray) => {
    console.log(listArray);
    if (listArray == null) {return}

    //clear list container
    const listContainer = document.querySelector('#listcontainer')
    listContainer.innerHTML = "";

    //add list button for each list
    listArray.forEach((list, index) => {
        if (list == "defaulted") {return}
        listContainer.innerHTML += `<button class="list" data-list=${index}>
        <span class="material-symbols-outlined">list</span>
        ${list}
        </button>`
    })

    //add functionality to list buttons
    const listBtns = document.querySelectorAll(".list")
    listBtns.forEach(btn => btn.addEventListener('click', (event) => {
        loadTabs(event.currentTarget.dataset.list)
    }))

}


const loadMainContent = (tabname) => {
    // maincontent.removeAttribute('class')
    // maincontent.classList.add('maincontent')
    
    //load display
    maincontent.innerHTML = ""   
    const template = `<div id="main-heading">
    <h1>${tabname}</h1>
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
        const taskList = tabname == "Tasks" ? "defaulted" : tabname; 
        if (taskName.value == "") {alert("Please enter a tilte for your task!"); return;}

        addTaskForm.style.display = "none";
        addTask(taskName.value, taskDate.value, taskList, taskImportant.checked)
        taskName.value = ""
        taskDate.value = ""
        taskImportant.checked = false
    })

    document.querySelector('#canceladd').addEventListener('click', () => {
        addTaskForm.style.display = "none";
    })

}

const displayTasks = (storage) => {
    const taskContainer = document.querySelector('.taskcontainer')
    taskContainer.innerHTML = ""

    //display all task
    console.log(storage)
    storage.forEach((task, index) => {
        if (task.completed) {return}
        const taskTemplate = `<div class="task">
                            <input type="checkbox" class="taskcompleted" data-task=${index} data-listname=${task.listname}>
                            <span class="taskname" data-task=${index} data-listname=${task.listname}>${task.name}</span>
                            <input type="date" class="taskdate" data-task=${index} value=${task.date} data-listname=${task.listname}></button>
                            <button class="${task.important? "taskimportant true" : "taskimportant"}" data-task=${index} data-listname=${task.listname}>
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
    loadMainContent,
    displayTasks,
    loadLists
}