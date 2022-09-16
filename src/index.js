 import { sidebarBtnFunction, loadTasks, displayAll } from "./domController";
 import { task } from "./taskObj";  

 const tempStorage = [{name: 'first task', date: '2022-09-16', important: true, completed: false},{name: 'second task', date: '2022-09-17', important: false, completed: false} ]
 
 const addTask = (name, date, important) => {
     //create new task object
     const newTask = task(name, date, important, false)
     
     //save it somewhere
     tempStorage.push(newTask)
     
     //call display
     displayAll(tempStorage)
    }

const toggleTask = (event) => {
    const button = event.currentTarget.classList[0];
    const target = tempStorage[event.currentTarget.dataset.task]
    console.log(button)
    switch (button) {
        case 'taskdate':
            target.date = event.currentTarget.value
            break;   
        case 'taskimportant':
            target.important ? target.important = false : target.important = true;
            break;   
        case 'taskcompleted':
            target.completed ? target.completed = false : target.completed = true;
            displayAll(tempStorage);
            break;   
    }
    
}

sidebarBtnFunction();
loadTasks();
displayAll(tempStorage)

export {
    addTask,
    toggleTask
}