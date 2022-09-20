import { isToday, parseISO } from "date-fns"

//task factory functions
const task = (name, date, listId, important, completed, taskId) => {
    return {name, date, listId, important, completed, taskId}
}

const list = (name) => {
    const tasks = []

    const addToList = (task) => {
        tasks.push(task)
    } 

    const getTasks = () => {
        return tasks
    }

    const updateTask = (taskId, key, newValue) => {
        let taskIndex = "";
        tasks.forEach((task, index) => task.taskId == taskId ?  taskIndex = index : false)
        console.log(taskIndex)
        console.log(key)
        if (key == "date") {tasks[taskIndex][key] = newValue}
        if (key == "important") {tasks[taskIndex][key] ? tasks[taskIndex][key] = false : tasks[taskIndex][key] = true}
        if (key == "completed") {tasks[taskIndex][key] ? tasks[taskIndex][key] = false : tasks[taskIndex][key] = true}
    }

    const deleteTask = (taskId) => {
        let taskIndex = "";
        tasks.forEach((task, index) => task.taskId == taskId ?  taskIndex = index : false)
        tasks.splice(taskIndex,1)
    }

    const getTodayTasks = () => {
        return tasks.filter(task => isToday(parseISO(task.date)))
    }

    const getImportantTasks = () => {
        return tasks.filter(task => task.important == true)
    }

    const getCompletedTasks = () => {
        return tasks.filter(task => task.completed == true)
    }

    return {name, addToList, getTasks, updateTask, getTodayTasks, getImportantTasks, getCompletedTasks, deleteTask}
}

export {
    task,
    list
}