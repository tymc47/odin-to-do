import { addTask, toggleTask, createList, loadTabs, deleteList } from "./index"

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
    listArray.forEach((list) => {
        console.log(list)
        if (list.listId == 0) {return}
        listContainer.innerHTML += `<div class="list"><button class="list" data-list=${list.listId}>
        <span class="material-symbols-outlined">list</span>${list.name}</button>
        <button class="dellist" data-list=${list.listId}><span class="material-symbols-outlined">delete</span></button>
        </div>`
    })

    //add functionality to list buttons
    const listBtns = document.querySelectorAll("button.list")
    const delListBtns = document.querySelectorAll(".dellist")
    listBtns.forEach(btn => btn.addEventListener('click', (event) => {
        console.log(event.currentTarget.dataset.list)
        loadTabs(event.currentTarget.dataset.list)
    }))

    
    delListBtns.forEach(btn => btn.addEventListener('click', (event) => {
        deleteList(event.currentTarget.dataset.list)
    }))

}


const loadMainContent = (tabname, listIndex = 0) => {
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
        if (taskName.value == "") {alert("Please enter a tilte for your task!"); return;}

        console.log("adding task")
        addTaskForm.style.display = "none";
        addTask(taskName.value, taskDate.value, listIndex, taskImportant.checked)
        taskName.value = ""
        taskDate.value = ""
        taskImportant.checked = false
    })

    document.querySelector('#canceladd').addEventListener('click', () => {
        addTaskForm.style.display = "none";
    })

}

const displayTasks = (taskArray) => {
    console.log("displaying Task")
    const taskContainer = document.querySelector('.taskcontainer')
    taskContainer.innerHTML = ""

    //display all task
    console.log(taskArray)
    taskArray.forEach((task, index) => {
        const taskTemplate = `<div class="${task.completed ? "task completed" : "task"}" data-displayorder=${index}>
        <input type="checkbox" class="taskcompleted" data-displayorder=${index}>
        <span class="taskname" data-displayorder=${index}>${task.name}</span>
        <input type="date" class="taskdate" data-displayorder=${index} value=${task.date} >
        <button class="${task.important? "taskimportant true" : "taskimportant"}" data-displayorder=${index}>
        <span class="material-symbols-outlined">star</span>
        </button>
        <button class="deltask" data-displayorder=${index}><span class="material-symbols-outlined">delete</span></button>
        </div>`

        taskContainer.insertAdjacentHTML('beforeend', taskTemplate);

        console.log(task.taskId)
        console.log(task.listId)
        //add functionality to task buttons
        document.querySelector(`[data-displayorder="${index}"].taskdate`).addEventListener('input', (event) => {
            toggleTask(event, task.taskId, task.listId)
         })

        document.querySelector(`[data-displayorder="${index}"].taskimportant`).addEventListener('click', (event) => {
            toggleTask(event, task.taskId, task.listId)
            event.currentTarget.classList.toggle("true")

        })

        document.querySelector(`[data-displayorder="${index}"].taskcompleted`).addEventListener('change', (event) => {
            toggleTask(event, task.taskId, task.listId)
            //tasks disappear from the list after toggle
            document.querySelector(`[data-displayorder="${index}"].task`).style.display = "none"
        })

        document.querySelector(`[data-displayorder="${index}"].deltask`).addEventListener('click', (event) => {
            toggleTask(event, task.taskId, task.listId)
            document.querySelector(`[data-displayorder="${index}"].task`).style.display = "none"
        })
    })

}

const displayCompleted = () => {
    const tasks = document.querySelectorAll(".task.completed")
    tasks.forEach(task => {
        console.log(task)
        task.style.display = "flex"
        task.querySelector("input[type=checkbox]").checked = true;
    });
}

export {
    sidebarBtnFunction,
    loadMainContent,
    displayTasks,
    loadLists,
    displayCompleted
}