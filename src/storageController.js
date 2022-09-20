import {list} from "./objectController";

const storageController = {
    initiateStorage: () => {
        if (localStorage.length == 0){
            const listArray = [{listId: 0, name: "defaulted"}]
            localStorage.setItem("listArray", JSON.stringify(listArray))
            localStorage.setItem("currentIndex", 0)
            localStorage.setItem(0, JSON.stringify([]))
        }
    },

    getListArray: () => {
        return JSON.parse(localStorage.getItem("listArray"))   
    },

    findListNamebyId: (listId) => {
        const listArray = storageController.getListArray();
        for (let i = 0; i < listArray.length; i++){
            if (listArray[i].listId == listId) {return listArray[i].name}
        }
    },

    newList: (name) => {
        const listArray = JSON.parse(localStorage.getItem("listArray"))
        
        const listId = parseInt(localStorage.getItem("currentIndex")) + 1
        localStorage.setItem("currentIndex", listId)
        localStorage.setItem(listId, JSON.stringify([]))
        
        //create new list in localStorage
        //updateListArray
        const newList = {listId, name}
        // newList.index = listArray.length
        // newList.name = name
        listArray.push(newList)
        localStorage.setItem("listArray", JSON.stringify(listArray))
    },

    saveList: (listToSave, listId) => {
        console.log(listId)
        localStorage.setItem(listId, JSON.stringify(listToSave.getTasks()))
    },

    getList: (listId) => {
        const listName = storageController.findListNamebyId(listId)
        if (localStorage.getItem(listId) == null) {return null}
        const tasks = JSON.parse(localStorage.getItem(listId)) || []
        const calledList = list(listName)
        tasks.forEach(task => calledList.addToList(task))
        return calledList
    },

    deleteList: (listId) => {
        localStorage.removeItem(listId)

        const listArray = JSON.parse(localStorage.getItem("listArray"))
        listArray.forEach((list,index) => {
            if (list.listId == listId){listArray.splice(index,1)}
        })
        localStorage.setItem("listArray", JSON.stringify(listArray))
    }

}

export default storageController;