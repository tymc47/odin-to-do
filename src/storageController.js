import {list} from "./objectController";

const storageController = {
    newList: (name) => {
        localStorage.setItem(name, JSON.stringify([]))
    },

    saveList: (listToSave) => {
        console.log(listToSave)
        localStorage.setItem(listToSave.name, JSON.stringify(listToSave.getTasks()))
    },

    getList: (listName) => {
        if (localStorage.getItem(listName) == null) {return null}
        const tasks = JSON.parse(localStorage.getItem(listName)) || []
        const calledList = list(listName)
        tasks.forEach(task => calledList.addToList(task))
        return calledList
    },

    getAllListName: () => {
        const listArray = []
        for(let i = 0; i < localStorage.length; i++){
            listArray.push(localStorage.key(i))
        }
        return listArray
    }
}

export default storageController;