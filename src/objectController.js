//task factory functions
const task = (name, date, listname, important, completed) => {
    return {name, date, listname, important, completed}
}

const list = (name) => {
    const tasks = []

    const addToList = (task) => {
        tasks.push(task)
    } 

    const getTasks = () => {
        return tasks
    }

    const updateTask = (index, key, newValue) => {
        if (key == "date") {tasks[index][key] = newValue}
        if (key == "important") {tasks[index][key] ? tasks[index][key] = false : tasks[index][key] = true}
        if (key == "completed") {tasks[index][key] ? tasks[index][key] = false : tasks[index][key] = true}
    }

    return {name, addToList, getTasks, updateTask}
}

export {
    task,
    list
}