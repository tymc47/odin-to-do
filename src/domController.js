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
                            <button id="addtaskbtn">
                                <span class="material-symbols-outlined">add</span>
                            </button>
                        </div>    
                        <div class="taskcontainer">
                            
                        </div>`

    maincontent.innerHTML += template

    //add button function
    const addTaskbtn = document.querySelector('#addtaskbtn')
    addTaskbtn.addEventListener('click', () => {
        //call form
        //call add task logic
        //call display task
    })

    
}

const loadToday = () => {
    console.log("In today")
}

const loadImportant = () => {
    console.log("In Important")
}

export {
    sidebarBtnFunction,
    loadTasks
}