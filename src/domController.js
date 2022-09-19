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


    taskBtn.addEventListener('click', () => {loadTabs("Tasks")})

    todayBtn.addEventListener('click', () => {loadTabs("Today")})
    
    importantBtn.addEventListener('click', () => {loadTabs("Important")})

    completedBtn.addEventListener('click', () => {loadTabs("Completed")})

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
    const headingHTML = `<div id="main-heading"><h1>${tabname}</h1>
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
                            <div class="taskcontainer"></div>`  
    maincontent.innerHTML += headingHTML
    
    
    if (tabname == "Important" || tabname == "Completed" || tabname == "Today") {
        document.querySelector('#displayformbtn').style.display = "none"
    }

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
                            <input type="checkbox" class="taskcompleted" data-listname=${task.listname} data-displayorder=${index}>
                            <span class="taskname"  data-listname=${task.listname} data-displayorder=${index}>${task.name}</span>
                            <input type="date" class="taskdate" value=${task.date} data-listname=${task.listname} data-displayorder=${index}></button>
                            <button class="${task.important? "taskimportant true" : "taskimportant"}" data-listname=${task.listname} data-displayorder=${index}>
                                <span class="material-symbols-outlined">star</span>
                            </button>
                            </div>`
        taskContainer.insertAdjacentHTML('beforeend', taskTemplate);

        //add functionality to task buttons
        document.querySelector(`[data-displayorder="${index}"].taskdate`).addEventListener('input', (event) => {
            console.log(task.name)
            toggleTask(event, task.name)
         })

        document.querySelector(`[data-displayorder="${index}"].taskimportant`).addEventListener('click', (event) => {
            toggleTask(event, task.name)
            event.currentTarget.classList.toggle("true")

        })

        document.querySelector(`[data-displayorder="${index}"].taskcompleted`).addEventListener('change', (event) => {
            toggleTask(event, task.name)
        })
    })
    


}

export {
    sidebarBtnFunction,
    loadMainContent,
    displayTasks,
    loadLists
}