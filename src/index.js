 import { sidebarBtnFunction, loadTasks, displayTasks, loadLists, loadMainContent } from "./domController";
 import { task, list } from "./objectController";  
 import storageController from "./storageController";


const createList = (name) => {
    storageController.newList(name)

    //call list display
    loadLists(storageController.getAllListName())
}

 const addTask = (name, date, listname = "defaulted", important,) => {
     //create new task object
     const newTask = task(name, date, listname, important, false)

     //add task to list
     const listToAdd = storageController.getList(listname)
     listToAdd.addToList(newTask)
     
     //save it somewhere
    storageController.saveList(listToAdd)

     
    displayTasks(listToAdd.getTasks())
    }

const toggleTask = (event, taskName) => {
    const button = event.currentTarget.classList[0];
    const listName = event.currentTarget.dataset.listname;
    const targetList = storageController.getList(listName);

    console.log(button)
    console.log(targetList)
    console.log(taskName)
    switch (button) {
        case 'taskdate':
            targetList.updateTask(taskName, "date", event.currentTarget.value)
            break;   
        case 'taskimportant':
            targetList.updateTask(taskName, "important", "true")
            break;   
        case 'taskcompleted':
            targetList.updateTask(taskName, "completed", "true")
            displayTasks(targetList.getTasks());
            break;   
        }  

    storageController.saveList(targetList)
}

const loadTabs = (tabName) => {
    
    const loadTasksTab = () => {
        const listName = "defaulted"
        
        console.log("Loading Task Tab")
        loadMainContent(tabName)

        if (storageController.getList(listName) == null){return}
        displayTasks(storageController.getList(listName).getTasks())
        
    }

    const loadTodayTab = () => {
        let displayArray = []
        const listArray = storageController.getAllListName()

        listArray.forEach(list => {
            displayArray = displayArray.concat(storageController.getList(list).getTodayTasks())
        })

        loadMainContent(tabName)
        displayTasks(displayArray)

    }

    const loadImportantTab = () => {
        let displayArray = []
        const listArray = storageController.getAllListName()

        listArray.forEach(list => {
            displayArray = displayArray.concat(storageController.getList(list).getImportantTasks())
        })

        loadMainContent(tabName)
        displayTasks(displayArray)
    }

    const loadCompletedTab = () => {
        let displayArray = []
        const listArray = storageController.getAllListName()

        listArray.forEach(list => {
            displayArray = displayArray.concat(storageController.getList(list).getCompletedTasks())
        })

        loadMainContent(tabName)
        displayTasks(displayArray)
    }

    const loadListTab = () => {
        const listName = storageController.getAllListName()[tabName]
        loadMainContent(listName)
        displayTasks(storageController.getList(listName).getTasks())
        
    }

    switch (tabName) {
        case "Tasks":
            loadTasksTab();
            break;
        case "Today":
            loadTodayTab();
            break
        case "Important":
            loadImportantTab();
            break;
        case "Completed":
            loadCompletedTab ();
            break;
        default:
            loadListTab();
    }
}

sidebarBtnFunction();
loadLists(storageController.getAllListName())
loadTabs("Tasks")

//create defualt list
if (storageController.getList("defaulted") == null) {
    createList("defaulted");
    console.log("created defaulted list")
    addTask("first task", "2022-10-22", "defaulted", true)
    addTask("second task", "2022-09-22", "defaulted", false)
}



export {
    addTask,
    toggleTask,
    createList,
    loadTabs
}