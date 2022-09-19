/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "loadLists": () => (/* binding */ loadLists),
/* harmony export */   "loadMainContent": () => (/* binding */ loadMainContent),
/* harmony export */   "sidebarBtnFunction": () => (/* binding */ sidebarBtnFunction)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const maincontent = document.querySelector('.maincontent')

const sidebarBtnFunction = () => {
    const taskBtn = document.querySelector('#tasksbtn')
    const todayBtn = document.querySelector('#todaybtn')
    const importantBtn = document.querySelector('#importantbtn')
    const completedBtn = document.querySelector('#completedbtn')
    const listFormBtn = document.querySelector('#addlistbtn')
    const addListBtn = document.querySelector('#addlist')
    const closeListFormBtn = document.querySelector('#closelistform')


    taskBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("Tasks")})

    todayBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("Today")})
    
    importantBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("Important")})

    completedBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("Completed")})

    listFormBtn.addEventListener('click', () => {
        document.querySelector('#addlistform').style.display = "block";
    })

    addListBtn.addEventListener('click', () => {
        const listname = document.querySelector('#addlistform > input[type="text"]')
        if (listname == "") {alert("Please enter list name"); return;}

        (0,_index__WEBPACK_IMPORTED_MODULE_0__.createList)(listname.value);
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
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)(event.currentTarget.dataset.list)
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
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.addTask)(taskName.value, taskDate.value, taskList, taskImportant.checked)
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
    dateBtns.forEach(btn => btn.oninput = _index__WEBPACK_IMPORTED_MODULE_0__.toggleTask)
    importantBtns.forEach(btn => btn.onclick = (event) => {
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.toggleTask)(event)
        event.currentTarget.classList.toggle("true")
    })
    completedBtns.forEach(btn => btn.addEventListener("change", _index__WEBPACK_IMPORTED_MODULE_0__.toggleTask))


}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "loadTabs": () => (/* binding */ loadTabs),
/* harmony export */   "toggleTask": () => (/* binding */ toggleTask)
/* harmony export */ });
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ "./src/domController.js");
/* harmony import */ var _objectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectController */ "./src/objectController.js");
/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageController */ "./src/storageController.js");
 
   
 


const createList = (name) => {
    _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].newList(name)

    //call list display
    ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadLists)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getAllListName())
}

 const addTask = (name, date, listname = "defaulted", important,) => {
     //create new task object
     const newTask = (0,_objectController__WEBPACK_IMPORTED_MODULE_1__.task)(name, date, listname, important, false)

     //add task to list
     const listToAdd = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listname)
     listToAdd.addToList(newTask)
     
     //save it somewhere
    _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].saveList(listToAdd)

     
    ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(listToAdd.getTasks())
    }

const toggleTask = (event) => {
    const button = event.currentTarget.classList[0];
    const listName = event.currentTarget.dataset.listname;
    const targetList = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listName);
    const taskIndex = event.currentTarget.dataset.task

    console.log(button)
    console.log(targetList)
    console.log(taskIndex)
    switch (button) {
        case 'taskdate':
            targetList.updateTask(taskIndex, "date", event.currentTarget.value)
            break;   
        case 'taskimportant':
            targetList.updateTask(taskIndex, "important", "true")
            break;   
        case 'taskcompleted':
            targetList.updateTask(taskIndex, "completed", "true")
            ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(targetList.getTasks());
            break;   
        }  

    _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].saveList(targetList)
}

const loadTabs = (tabName) => {
    
    const loadTasksTab = () => {
        const listName = "defaulted"
        
        console.log("Loading Task Tab")
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)

        if (_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listName) == null){return}
        (0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listName).getTasks())
        
    }

    const loadTodayTab = () => {
        let displayArray = []
        const listArray = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getAllListName()

        listArray.forEach(list => {
            displayArray = displayArray.concat(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(list).getTodayTasks())
        })

        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(displayArray)

    }

    const loadImportantTab = () => {
        console.log("Loading Important Tab")
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)
    }

    const loadCompletedTab = () => {
        console.log("Loading Completed Tab")
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)
    }

    const loadListTab = () => {
        const listName = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getAllListName()[tabName]
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(listName)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listName).getTasks())
        
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

;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.sidebarBtnFunction)();
(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadLists)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getAllListName())
loadTabs("Tasks")

//create defualt list
if (_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList("defaulted") == null) {
    createList("defaulted");
    console.log("created defaulted list")
    addTask("first task", "2022-10-22", "defaulted", true)
    addTask("second task", "2022-09-22", "defaulted", false)
}





/***/ }),

/***/ "./src/objectController.js":
/*!*********************************!*\
  !*** ./src/objectController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
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

    const getTodayTasks = () => {
        const today = "2022-09-19"
        return tasks.filter(task => task.date == today)
    }

    return {name, addToList, getTasks, updateTask, getTodayTasks}
}



/***/ }),

/***/ "./src/storageController.js":
/*!**********************************!*\
  !*** ./src/storageController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _objectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectController */ "./src/objectController.js");


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
        const calledList = (0,_objectController__WEBPACK_IMPORTED_MODULE_0__.list)(listName)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageController);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9vYmplY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL3N0b3JhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZFRhc2ssIHRvZ2dsZVRhc2ssIGNyZWF0ZUxpc3QsIGxvYWRUYWJzIH0gZnJvbSBcIi4vaW5kZXhcIlxuXG5jb25zdCBtYWluY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluY29udGVudCcpXG5cbmNvbnN0IHNpZGViYXJCdG5GdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzYnRuJylcbiAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheWJ0bicpXG4gICAgY29uc3QgaW1wb3J0YW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltcG9ydGFudGJ0bicpXG4gICAgY29uc3QgY29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZGJ0bicpXG4gICAgY29uc3QgbGlzdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkbGlzdGJ0bicpXG4gICAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRsaXN0JylcbiAgICBjb25zdCBjbG9zZUxpc3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlbGlzdGZvcm0nKVxuXG5cbiAgICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2xvYWRUYWJzKFwiVGFza3NcIil9KVxuXG4gICAgdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bG9hZFRhYnMoXCJUb2RheVwiKX0pXG4gICAgXG4gICAgaW1wb3J0YW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2xvYWRUYWJzKFwiSW1wb3J0YW50XCIpfSlcblxuICAgIGNvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkVGFicyhcIkNvbXBsZXRlZFwiKX0pXG5cbiAgICBsaXN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3Rmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KVxuXG4gICAgYWRkTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkbGlzdGZvcm0gPiBpbnB1dFt0eXBlPVwidGV4dFwiXScpXG4gICAgICAgIGlmIChsaXN0bmFtZSA9PSBcIlwiKSB7YWxlcnQoXCJQbGVhc2UgZW50ZXIgbGlzdCBuYW1lXCIpOyByZXR1cm47fVxuXG4gICAgICAgIGNyZWF0ZUxpc3QobGlzdG5hbWUudmFsdWUpO1xuICAgICAgICBsaXN0bmFtZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3Rmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbiAgICBjbG9zZUxpc3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkbGlzdGZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcbiAgICBcbn1cblxuY29uc3QgbG9hZExpc3RzID0gKGxpc3RBcnJheSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGxpc3RBcnJheSk7XG4gICAgaWYgKGxpc3RBcnJheSA9PSBudWxsKSB7cmV0dXJufVxuXG4gICAgLy9jbGVhciBsaXN0IGNvbnRhaW5lclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdGNvbnRhaW5lcicpXG4gICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy9hZGQgbGlzdCBidXR0b24gZm9yIGVhY2ggbGlzdFxuICAgIGxpc3RBcnJheS5mb3JFYWNoKChsaXN0LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAobGlzdCA9PSBcImRlZmF1bHRlZFwiKSB7cmV0dXJufVxuICAgICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgPGJ1dHRvbiBjbGFzcz1cImxpc3RcIiBkYXRhLWxpc3Q9JHtpbmRleH0+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmxpc3Q8L3NwYW4+XG4gICAgICAgICR7bGlzdH1cbiAgICAgICAgPC9idXR0b24+YFxuICAgIH0pXG5cbiAgICAvL2FkZCBmdW5jdGlvbmFsaXR5IHRvIGxpc3QgYnV0dG9uc1xuICAgIGNvbnN0IGxpc3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0XCIpXG4gICAgbGlzdEJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGxvYWRUYWJzKGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5saXN0KVxuICAgIH0pKVxuXG59XG5cblxuY29uc3QgbG9hZE1haW5Db250ZW50ID0gKHRhYm5hbWUpID0+IHtcbiAgICAvLyBtYWluY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgICAvLyBtYWluY29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluY29udGVudCcpXG4gICAgXG4gICAgLy9sb2FkIGRpc3BsYXlcbiAgICBtYWluY29udGVudC5pbm5lckhUTUwgPSBcIlwiICAgXG4gICAgY29uc3QgaGVhZGluZ0hUTUwgPSBgPGRpdiBpZD1cIm1haW4taGVhZGluZ1wiPjxoMT4ke3RhYm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGlzcGxheWZvcm1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhZGR0YXNrZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInN0YXJcIiB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImFkZHRhc2tcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbGFkZFwiPkNhbmNlbDwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza2NvbnRhaW5lclwiPjwvZGl2PmAgIFxuICAgIG1haW5jb250ZW50LmlubmVySFRNTCArPSBoZWFkaW5nSFRNTFxuICAgIFxuICAgIFxuICAgIGlmICh0YWJuYW1lID09IFwiSW1wb3J0YW50XCIgfHwgdGFibmFtZSA9PSBcIkNvbXBsZXRlZFwiIHx8IHRhYm5hbWUgPT0gXCJUb2RheVwiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5Zm9ybWJ0bicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cblxuICAgIC8vZm9ybSBmdW5jdGlvbmFsaXR5IGFuZCBkaXNwbGF5XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFza2Zvcm0nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5Zm9ybWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfSkgICBcblxuICAgIC8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gZm9ybSBidXR0b25zXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFza2Zvcm0gPiBpbnB1dFt0eXBlPVwidGV4dFwiXScpXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2tmb3JtID4gaW5wdXRbdHlwZT1cImRhdGVcIl0nKVxuICAgICAgICBjb25zdCB0YXNrSW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2tmb3JtID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSB0YWJuYW1lID09IFwiVGFza3NcIiA/IFwiZGVmYXVsdGVkXCIgOiB0YWJuYW1lOyBcbiAgICAgICAgaWYgKHRhc2tOYW1lLnZhbHVlID09IFwiXCIpIHthbGVydChcIlBsZWFzZSBlbnRlciBhIHRpbHRlIGZvciB5b3VyIHRhc2shXCIpOyByZXR1cm47fVxuXG4gICAgICAgIGFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWRkVGFzayh0YXNrTmFtZS52YWx1ZSwgdGFza0RhdGUudmFsdWUsIHRhc2tMaXN0LCB0YXNrSW1wb3J0YW50LmNoZWNrZWQpXG4gICAgICAgIHRhc2tOYW1lLnZhbHVlID0gXCJcIlxuICAgICAgICB0YXNrRGF0ZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGFza0ltcG9ydGFudC5jaGVja2VkID0gZmFsc2VcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbGFkZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcblxufVxuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoc3RvcmFnZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2NvbnRhaW5lcicpXG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXG5cbiAgICAvL2Rpc3BsYXkgYWxsIHRhc2tcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlKVxuICAgIHN0b3JhZ2UuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7cmV0dXJufVxuICAgICAgICBjb25zdCB0YXNrVGVtcGxhdGUgPSBgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0YXNrY29tcGxldGVkXCIgZGF0YS10YXNrPSR7aW5kZXh9IGRhdGEtbGlzdG5hbWU9JHt0YXNrLmxpc3RuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tuYW1lXCIgZGF0YS10YXNrPSR7aW5kZXh9IGRhdGEtbGlzdG5hbWU9JHt0YXNrLmxpc3RuYW1lfT4ke3Rhc2submFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0YXNrZGF0ZVwiIGRhdGEtdGFzaz0ke2luZGV4fSB2YWx1ZT0ke3Rhc2suZGF0ZX0gZGF0YS1saXN0bmFtZT0ke3Rhc2subGlzdG5hbWV9PjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke3Rhc2suaW1wb3J0YW50PyBcInRhc2tpbXBvcnRhbnQgdHJ1ZVwiIDogXCJ0YXNraW1wb3J0YW50XCJ9XCIgZGF0YS10YXNrPSR7aW5kZXh9IGRhdGEtbGlzdG5hbWU9JHt0YXNrLmxpc3RuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+c3Rhcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IHRhc2tUZW1wbGF0ZTtcbiAgICB9KVxuICAgIFxuICAgIC8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gdGFzayBidXR0b25zXG4gICAgY29uc3QgZGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tkYXRlXCIpXG4gICAgY29uc3QgaW1wb3J0YW50QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza2ltcG9ydGFudFwiKVxuICAgIGNvbnN0IGNvbXBsZXRlZEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tjb21wbGV0ZWRcIilcbiAgICBkYXRlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4ub25pbnB1dCA9IHRvZ2dsZVRhc2spXG4gICAgaW1wb3J0YW50QnRucy5mb3JFYWNoKGJ0biA9PiBidG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICB0b2dnbGVUYXNrKGV2ZW50KVxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJ0cnVlXCIpXG4gICAgfSlcbiAgICBjb21wbGV0ZWRCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRvZ2dsZVRhc2spKVxuXG5cbn1cblxuZXhwb3J0IHtcbiAgICBzaWRlYmFyQnRuRnVuY3Rpb24sXG4gICAgbG9hZE1haW5Db250ZW50LFxuICAgIGRpc3BsYXlUYXNrcyxcbiAgICBsb2FkTGlzdHNcbn0iLCIgaW1wb3J0IHsgc2lkZWJhckJ0bkZ1bmN0aW9uLCBsb2FkVGFza3MsIGRpc3BsYXlUYXNrcywgbG9hZExpc3RzLCBsb2FkTWFpbkNvbnRlbnQgfSBmcm9tIFwiLi9kb21Db250cm9sbGVyXCI7XG4gaW1wb3J0IHsgdGFzaywgbGlzdCB9IGZyb20gXCIuL29iamVjdENvbnRyb2xsZXJcIjsgIFxuIGltcG9ydCBzdG9yYWdlQ29udHJvbGxlciBmcm9tIFwiLi9zdG9yYWdlQ29udHJvbGxlclwiO1xuXG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobmFtZSkgPT4ge1xuICAgIHN0b3JhZ2VDb250cm9sbGVyLm5ld0xpc3QobmFtZSlcblxuICAgIC8vY2FsbCBsaXN0IGRpc3BsYXlcbiAgICBsb2FkTGlzdHMoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0QWxsTGlzdE5hbWUoKSlcbn1cblxuIGNvbnN0IGFkZFRhc2sgPSAobmFtZSwgZGF0ZSwgbGlzdG5hbWUgPSBcImRlZmF1bHRlZFwiLCBpbXBvcnRhbnQsKSA9PiB7XG4gICAgIC8vY3JlYXRlIG5ldyB0YXNrIG9iamVjdFxuICAgICBjb25zdCBuZXdUYXNrID0gdGFzayhuYW1lLCBkYXRlLCBsaXN0bmFtZSwgaW1wb3J0YW50LCBmYWxzZSlcblxuICAgICAvL2FkZCB0YXNrIHRvIGxpc3RcbiAgICAgY29uc3QgbGlzdFRvQWRkID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0bmFtZSlcbiAgICAgbGlzdFRvQWRkLmFkZFRvTGlzdChuZXdUYXNrKVxuICAgICBcbiAgICAgLy9zYXZlIGl0IHNvbWV3aGVyZVxuICAgIHN0b3JhZ2VDb250cm9sbGVyLnNhdmVMaXN0KGxpc3RUb0FkZClcblxuICAgICBcbiAgICBkaXNwbGF5VGFza3MobGlzdFRvQWRkLmdldFRhc2tzKCkpXG4gICAgfVxuXG5jb25zdCB0b2dnbGVUYXNrID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3RbMF07XG4gICAgY29uc3QgbGlzdE5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGlzdG5hbWU7XG4gICAgY29uc3QgdGFyZ2V0TGlzdCA9IHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3QobGlzdE5hbWUpO1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YXNrXG5cbiAgICBjb25zb2xlLmxvZyhidXR0b24pXG4gICAgY29uc29sZS5sb2codGFyZ2V0TGlzdClcbiAgICBjb25zb2xlLmxvZyh0YXNrSW5kZXgpXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgICAgY2FzZSAndGFza2RhdGUnOlxuICAgICAgICAgICAgdGFyZ2V0TGlzdC51cGRhdGVUYXNrKHRhc2tJbmRleCwgXCJkYXRlXCIsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgY2FzZSAndGFza2ltcG9ydGFudCc6XG4gICAgICAgICAgICB0YXJnZXRMaXN0LnVwZGF0ZVRhc2sodGFza0luZGV4LCBcImltcG9ydGFudFwiLCBcInRydWVcIilcbiAgICAgICAgICAgIGJyZWFrOyAgIFxuICAgICAgICBjYXNlICd0YXNrY29tcGxldGVkJzpcbiAgICAgICAgICAgIHRhcmdldExpc3QudXBkYXRlVGFzayh0YXNrSW5kZXgsIFwiY29tcGxldGVkXCIsIFwidHJ1ZVwiKVxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKHRhcmdldExpc3QuZ2V0VGFza3MoKSk7XG4gICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgfSAgXG5cbiAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlTGlzdCh0YXJnZXRMaXN0KVxufVxuXG5jb25zdCBsb2FkVGFicyA9ICh0YWJOYW1lKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbG9hZFRhc2tzVGFiID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IFwiZGVmYXVsdGVkXCJcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBUYXNrIFRhYlwiKVxuICAgICAgICBsb2FkTWFpbkNvbnRlbnQodGFiTmFtZSlcblxuICAgICAgICBpZiAoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0TmFtZSkgPT0gbnVsbCl7cmV0dXJufVxuICAgICAgICBkaXNwbGF5VGFza3Moc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0TmFtZSkuZ2V0VGFza3MoKSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFRvZGF5VGFiID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGlzcGxheUFycmF5ID0gW11cbiAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0QWxsTGlzdE5hbWUoKVxuXG4gICAgICAgIGxpc3RBcnJheS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgZGlzcGxheUFycmF5ID0gZGlzcGxheUFycmF5LmNvbmNhdChzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3QpLmdldFRvZGF5VGFza3MoKSlcbiAgICAgICAgfSlcblxuICAgICAgICBsb2FkTWFpbkNvbnRlbnQodGFiTmFtZSlcbiAgICAgICAgZGlzcGxheVRhc2tzKGRpc3BsYXlBcnJheSlcblxuICAgIH1cblxuICAgIGNvbnN0IGxvYWRJbXBvcnRhbnRUYWIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBJbXBvcnRhbnQgVGFiXCIpXG4gICAgICAgIGxvYWRNYWluQ29udGVudCh0YWJOYW1lKVxuICAgIH1cblxuICAgIGNvbnN0IGxvYWRDb21wbGV0ZWRUYWIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBDb21wbGV0ZWQgVGFiXCIpXG4gICAgICAgIGxvYWRNYWluQ29udGVudCh0YWJOYW1lKVxuICAgIH1cblxuICAgIGNvbnN0IGxvYWRMaXN0VGFiID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IHN0b3JhZ2VDb250cm9sbGVyLmdldEFsbExpc3ROYW1lKClbdGFiTmFtZV1cbiAgICAgICAgbG9hZE1haW5Db250ZW50KGxpc3ROYW1lKVxuICAgICAgICBkaXNwbGF5VGFza3Moc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0TmFtZSkuZ2V0VGFza3MoKSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3dpdGNoICh0YWJOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJUYXNrc1wiOlxuICAgICAgICAgICAgbG9hZFRhc2tzVGFiKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlRvZGF5XCI6XG4gICAgICAgICAgICBsb2FkVG9kYXlUYWIoKTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJJbXBvcnRhbnRcIjpcbiAgICAgICAgICAgIGxvYWRJbXBvcnRhbnRUYWIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQ29tcGxldGVkXCI6XG4gICAgICAgICAgICBsb2FkQ29tcGxldGVkVGFiICgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsb2FkTGlzdFRhYigpO1xuICAgIH1cbn1cblxuc2lkZWJhckJ0bkZ1bmN0aW9uKCk7XG5sb2FkTGlzdHMoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0QWxsTGlzdE5hbWUoKSlcbmxvYWRUYWJzKFwiVGFza3NcIilcblxuLy9jcmVhdGUgZGVmdWFsdCBsaXN0XG5pZiAoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChcImRlZmF1bHRlZFwiKSA9PSBudWxsKSB7XG4gICAgY3JlYXRlTGlzdChcImRlZmF1bHRlZFwiKTtcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQgZGVmYXVsdGVkIGxpc3RcIilcbiAgICBhZGRUYXNrKFwiZmlyc3QgdGFza1wiLCBcIjIwMjItMTAtMjJcIiwgXCJkZWZhdWx0ZWRcIiwgdHJ1ZSlcbiAgICBhZGRUYXNrKFwic2Vjb25kIHRhc2tcIiwgXCIyMDIyLTA5LTIyXCIsIFwiZGVmYXVsdGVkXCIsIGZhbHNlKVxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBhZGRUYXNrLFxuICAgIHRvZ2dsZVRhc2ssXG4gICAgY3JlYXRlTGlzdCxcbiAgICBsb2FkVGFic1xufSIsIi8vdGFzayBmYWN0b3J5IGZ1bmN0aW9uc1xuY29uc3QgdGFzayA9IChuYW1lLCBkYXRlLCBsaXN0bmFtZSwgaW1wb3J0YW50LCBjb21wbGV0ZWQpID0+IHtcbiAgICByZXR1cm4ge25hbWUsIGRhdGUsIGxpc3RuYW1lLCBpbXBvcnRhbnQsIGNvbXBsZXRlZH1cbn1cblxuY29uc3QgbGlzdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXVxuXG4gICAgY29uc3QgYWRkVG9MaXN0ID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKVxuICAgIH0gXG5cbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tzXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVGFzayA9IChpbmRleCwga2V5LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09IFwiZGF0ZVwiKSB7dGFza3NbaW5kZXhdW2tleV0gPSBuZXdWYWx1ZX1cbiAgICAgICAgaWYgKGtleSA9PSBcImltcG9ydGFudFwiKSB7dGFza3NbaW5kZXhdW2tleV0gPyB0YXNrc1tpbmRleF1ba2V5XSA9IGZhbHNlIDogdGFza3NbaW5kZXhdW2tleV0gPSB0cnVlfVxuICAgICAgICBpZiAoa2V5ID09IFwiY29tcGxldGVkXCIpIHt0YXNrc1tpbmRleF1ba2V5XSA/IHRhc2tzW2luZGV4XVtrZXldID0gZmFsc2UgOiB0YXNrc1tpbmRleF1ba2V5XSA9IHRydWV9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kYXlUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBcIjIwMjItMDktMTlcIlxuICAgICAgICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5kYXRlID09IHRvZGF5KVxuICAgIH1cblxuICAgIHJldHVybiB7bmFtZSwgYWRkVG9MaXN0LCBnZXRUYXNrcywgdXBkYXRlVGFzaywgZ2V0VG9kYXlUYXNrc31cbn1cblxuZXhwb3J0IHtcbiAgICB0YXNrLFxuICAgIGxpc3Rcbn0iLCJpbXBvcnQge2xpc3R9IGZyb20gXCIuL29iamVjdENvbnRyb2xsZXJcIjtcblxuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSB7XG4gICAgbmV3TGlzdDogKG5hbWUpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoW10pKVxuICAgIH0sXG5cbiAgICBzYXZlTGlzdDogKGxpc3RUb1NhdmUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdFRvU2F2ZSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlzdFRvU2F2ZS5uYW1lLCBKU09OLnN0cmluZ2lmeShsaXN0VG9TYXZlLmdldFRhc2tzKCkpKVxuICAgIH0sXG5cbiAgICBnZXRMaXN0OiAobGlzdE5hbWUpID0+IHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxpc3ROYW1lKSA9PSBudWxsKSB7cmV0dXJuIG51bGx9XG4gICAgICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkpIHx8IFtdXG4gICAgICAgIGNvbnN0IGNhbGxlZExpc3QgPSBsaXN0KGxpc3ROYW1lKVxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gY2FsbGVkTGlzdC5hZGRUb0xpc3QodGFzaykpXG4gICAgICAgIHJldHVybiBjYWxsZWRMaXN0XG4gICAgfSxcblxuICAgIGdldEFsbExpc3ROYW1lOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RBcnJheSA9IFtdXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGlzdEFycmF5LnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdEFycmF5XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlQ29udHJvbGxlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9