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
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.toggleTask)(event, task.name)
         })

        document.querySelector(`[data-displayorder="${index}"].taskimportant`).addEventListener('click', (event) => {
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.toggleTask)(event, task.name)
            event.currentTarget.classList.toggle("true")

        })

        document.querySelector(`[data-displayorder="${index}"].taskcompleted`).addEventListener('change', (event) => {
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.toggleTask)(event, task.name)
        })
    })
    


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

const toggleTask = (event, taskName) => {
    const button = event.currentTarget.classList[0];
    const listName = event.currentTarget.dataset.listname;
    const targetList = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listName);

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
        let displayArray = []
        const listArray = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getAllListName()

        listArray.forEach(list => {
            displayArray = displayArray.concat(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(list).getImportantTasks())
        })

        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(displayArray)
    }

    const loadCompletedTab = () => {
        let displayArray = []
        const listArray = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getAllListName()

        listArray.forEach(list => {
            displayArray = displayArray.concat(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(list).getCompletedTasks())
        })

        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(displayArray)
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

    const updateTask = (taskName, key, newValue) => {
        let taskIndex = "";
        tasks.forEach((task, index) => task.name == taskName ?  taskIndex = index : false)
        if (key == "date") {tasks[taskIndex][key] = newValue}
        if (key == "important") {tasks[taskIndex][key] ? tasks[taskIndex][key] = false : tasks[taskIndex][key] = true}
        if (key == "completed") {tasks[taskIndex][key] ? tasks[taskIndex][key] = false : tasks[taskIndex][key] = true}
    }

    const getTodayTasks = () => {
        //need to fix this date
        const today = "2022-09-19"
        return tasks.filter(task => task.date == today)
    }

    const getImportantTasks = () => {
        return tasks.filter(task => task.important == true)
    }

    const getCompletedTasks = () => {
        return tasks.filter(task => task.completed == true)
    }

    return {name, addToList, getTasks, updateTask, getTodayTasks, getImportantTasks, getCompletedTasks}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBLGlFQUFlLGlCQUFpQjs7Ozs7O1VDN0JoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcG9zLy4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvb2JqZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9zdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRUYXNrLCB0b2dnbGVUYXNrLCBjcmVhdGVMaXN0LCBsb2FkVGFicyB9IGZyb20gXCIuL2luZGV4XCJcblxuY29uc3QgbWFpbmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbmNvbnRlbnQnKVxuXG5jb25zdCBzaWRlYmFyQnRuRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrc2J0bicpXG4gICAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXlidG4nKVxuICAgIGNvbnN0IGltcG9ydGFudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRhbnRidG4nKVxuICAgIGNvbnN0IGNvbXBsZXRlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWRidG4nKVxuICAgIGNvbnN0IGxpc3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3RidG4nKVxuICAgIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkbGlzdCcpXG4gICAgY29uc3QgY2xvc2VMaXN0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZWxpc3Rmb3JtJylcblxuXG4gICAgdGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkVGFicyhcIlRhc2tzXCIpfSlcblxuICAgIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2xvYWRUYWJzKFwiVG9kYXlcIil9KVxuICAgIFxuICAgIGltcG9ydGFudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkVGFicyhcIkltcG9ydGFudFwiKX0pXG5cbiAgICBjb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bG9hZFRhYnMoXCJDb21wbGV0ZWRcIil9KVxuXG4gICAgbGlzdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRsaXN0Zm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSlcblxuICAgIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3Rmb3JtID4gaW5wdXRbdHlwZT1cInRleHRcIl0nKVxuICAgICAgICBpZiAobGlzdG5hbWUgPT0gXCJcIikge2FsZXJ0KFwiUGxlYXNlIGVudGVyIGxpc3QgbmFtZVwiKTsgcmV0dXJuO31cblxuICAgICAgICBjcmVhdGVMaXN0KGxpc3RuYW1lLnZhbHVlKTtcbiAgICAgICAgbGlzdG5hbWUudmFsdWUgPSBcIlwiXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRsaXN0Zm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuXG4gICAgY2xvc2VMaXN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3Rmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG4gICAgXG59XG5cbmNvbnN0IGxvYWRMaXN0cyA9IChsaXN0QXJyYXkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuICAgIGlmIChsaXN0QXJyYXkgPT0gbnVsbCkge3JldHVybn1cblxuICAgIC8vY2xlYXIgbGlzdCBjb250YWluZXJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Rjb250YWluZXInKVxuICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vYWRkIGxpc3QgYnV0dG9uIGZvciBlYWNoIGxpc3RcbiAgICBsaXN0QXJyYXkuZm9yRWFjaCgobGlzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGxpc3QgPT0gXCJkZWZhdWx0ZWRcIikge3JldHVybn1cbiAgICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxidXR0b24gY2xhc3M9XCJsaXN0XCIgZGF0YS1saXN0PSR7aW5kZXh9PlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5saXN0PC9zcGFuPlxuICAgICAgICAke2xpc3R9XG4gICAgICAgIDwvYnV0dG9uPmBcbiAgICB9KVxuXG4gICAgLy9hZGQgZnVuY3Rpb25hbGl0eSB0byBsaXN0IGJ1dHRvbnNcbiAgICBjb25zdCBsaXN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdFwiKVxuICAgIGxpc3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBsb2FkVGFicyhldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGlzdClcbiAgICB9KSlcblxufVxuXG5cbmNvbnN0IGxvYWRNYWluQ29udGVudCA9ICh0YWJuYW1lKSA9PiB7XG4gICAgLy8gbWFpbmNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgLy8gbWFpbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbmNvbnRlbnQnKVxuICAgIFxuICAgIC8vbG9hZCBkaXNwbGF5XG4gICAgbWFpbmNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIiAgIFxuICAgIGNvbnN0IGhlYWRpbmdIVE1MID0gYDxkaXYgaWQ9XCJtYWluLWhlYWRpbmdcIj48aDE+JHt0YWJuYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImRpc3BsYXlmb3JtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+YWRkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWRkdGFza2Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzdGFyXCIgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGR0YXNrXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWxhZGRcIj5DYW5jZWw8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tjb250YWluZXJcIj48L2Rpdj5gICBcbiAgICBtYWluY29udGVudC5pbm5lckhUTUwgKz0gaGVhZGluZ0hUTUxcbiAgICBcbiAgICBcbiAgICBpZiAodGFibmFtZSA9PSBcIkltcG9ydGFudFwiIHx8IHRhYm5hbWUgPT0gXCJDb21wbGV0ZWRcIiB8fCB0YWJuYW1lID09IFwiVG9kYXlcIikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheWZvcm1idG4nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG5cbiAgICAvL2Zvcm0gZnVuY3Rpb25hbGl0eSBhbmQgZGlzcGxheVxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2tmb3JtJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheWZvcm1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH0pICAgXG5cbiAgICAvL2FkZCBmdW5jdGlvbmFsaXR5IHRvIGZvcm0gYnV0dG9uc1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2tmb3JtID4gaW5wdXRbdHlwZT1cInRleHRcIl0nKVxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrZm9ybSA+IGlucHV0W3R5cGU9XCJkYXRlXCJdJylcbiAgICAgICAgY29uc3QgdGFza0ltcG9ydGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrZm9ybSA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gdGFibmFtZSA9PSBcIlRhc2tzXCIgPyBcImRlZmF1bHRlZFwiIDogdGFibmFtZTsgXG4gICAgICAgIGlmICh0YXNrTmFtZS52YWx1ZSA9PSBcIlwiKSB7YWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB0aWx0ZSBmb3IgeW91ciB0YXNrIVwiKTsgcmV0dXJuO31cblxuICAgICAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGFkZFRhc2sodGFza05hbWUudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB0YXNrTGlzdCwgdGFza0ltcG9ydGFudC5jaGVja2VkKVxuICAgICAgICB0YXNrTmFtZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGFza0RhdGUudmFsdWUgPSBcIlwiXG4gICAgICAgIHRhc2tJbXBvcnRhbnQuY2hlY2tlZCA9IGZhbHNlXG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxhZGQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbn1cblxuY29uc3QgZGlzcGxheVRhc2tzID0gKHN0b3JhZ2UpID0+IHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tjb250YWluZXInKVxuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuXG4gICAgLy9kaXNwbGF5IGFsbCB0YXNrXG4gICAgY29uc29sZS5sb2coc3RvcmFnZSlcbiAgICBzdG9yYWdlLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge3JldHVybn1cbiAgICAgICAgY29uc3QgdGFza1RlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFza2NvbXBsZXRlZFwiIGRhdGEtbGlzdG5hbWU9JHt0YXNrLmxpc3RuYW1lfSBkYXRhLWRpc3BsYXlvcmRlcj0ke2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tuYW1lXCIgIGRhdGEtbGlzdG5hbWU9JHt0YXNrLmxpc3RuYW1lfSBkYXRhLWRpc3BsYXlvcmRlcj0ke2luZGV4fT4ke3Rhc2submFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0YXNrZGF0ZVwiIHZhbHVlPSR7dGFzay5kYXRlfSBkYXRhLWxpc3RuYW1lPSR7dGFzay5saXN0bmFtZX0gZGF0YS1kaXNwbGF5b3JkZXI9JHtpbmRleH0+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7dGFzay5pbXBvcnRhbnQ/IFwidGFza2ltcG9ydGFudCB0cnVlXCIgOiBcInRhc2tpbXBvcnRhbnRcIn1cIiBkYXRhLWxpc3RuYW1lPSR7dGFzay5saXN0bmFtZX0gZGF0YS1kaXNwbGF5b3JkZXI9JHtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnN0YXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGFza1RlbXBsYXRlKTtcblxuICAgICAgICAvL2FkZCBmdW5jdGlvbmFsaXR5IHRvIHRhc2sgYnV0dG9uc1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kaXNwbGF5b3JkZXI9XCIke2luZGV4fVwiXS50YXNrZGF0ZWApLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLm5hbWUpXG4gICAgICAgICAgICB0b2dnbGVUYXNrKGV2ZW50LCB0YXNrLm5hbWUpXG4gICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRpc3BsYXlvcmRlcj1cIiR7aW5kZXh9XCJdLnRhc2tpbXBvcnRhbnRgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlVGFzayhldmVudCwgdGFzay5uYW1lKVxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwidHJ1ZVwiKVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZGlzcGxheW9yZGVyPVwiJHtpbmRleH1cIl0udGFza2NvbXBsZXRlZGApLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlVGFzayhldmVudCwgdGFzay5uYW1lKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgXG5cblxufVxuXG5leHBvcnQge1xuICAgIHNpZGViYXJCdG5GdW5jdGlvbixcbiAgICBsb2FkTWFpbkNvbnRlbnQsXG4gICAgZGlzcGxheVRhc2tzLFxuICAgIGxvYWRMaXN0c1xufSIsIiBpbXBvcnQgeyBzaWRlYmFyQnRuRnVuY3Rpb24sIGxvYWRUYXNrcywgZGlzcGxheVRhc2tzLCBsb2FkTGlzdHMsIGxvYWRNYWluQ29udGVudCB9IGZyb20gXCIuL2RvbUNvbnRyb2xsZXJcIjtcbiBpbXBvcnQgeyB0YXNrLCBsaXN0IH0gZnJvbSBcIi4vb2JqZWN0Q29udHJvbGxlclwiOyAgXG4gaW1wb3J0IHN0b3JhZ2VDb250cm9sbGVyIGZyb20gXCIuL3N0b3JhZ2VDb250cm9sbGVyXCI7XG5cblxuY29uc3QgY3JlYXRlTGlzdCA9IChuYW1lKSA9PiB7XG4gICAgc3RvcmFnZUNvbnRyb2xsZXIubmV3TGlzdChuYW1lKVxuXG4gICAgLy9jYWxsIGxpc3QgZGlzcGxheVxuICAgIGxvYWRMaXN0cyhzdG9yYWdlQ29udHJvbGxlci5nZXRBbGxMaXN0TmFtZSgpKVxufVxuXG4gY29uc3QgYWRkVGFzayA9IChuYW1lLCBkYXRlLCBsaXN0bmFtZSA9IFwiZGVmYXVsdGVkXCIsIGltcG9ydGFudCwpID0+IHtcbiAgICAgLy9jcmVhdGUgbmV3IHRhc2sgb2JqZWN0XG4gICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKG5hbWUsIGRhdGUsIGxpc3RuYW1lLCBpbXBvcnRhbnQsIGZhbHNlKVxuXG4gICAgIC8vYWRkIHRhc2sgdG8gbGlzdFxuICAgICBjb25zdCBsaXN0VG9BZGQgPSBzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3RuYW1lKVxuICAgICBsaXN0VG9BZGQuYWRkVG9MaXN0KG5ld1Rhc2spXG4gICAgIFxuICAgICAvL3NhdmUgaXQgc29tZXdoZXJlXG4gICAgc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUxpc3QobGlzdFRvQWRkKVxuXG4gICAgIFxuICAgIGRpc3BsYXlUYXNrcyhsaXN0VG9BZGQuZ2V0VGFza3MoKSlcbiAgICB9XG5cbmNvbnN0IHRvZ2dsZVRhc2sgPSAoZXZlbnQsIHRhc2tOYW1lKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3RbMF07XG4gICAgY29uc3QgbGlzdE5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGlzdG5hbWU7XG4gICAgY29uc3QgdGFyZ2V0TGlzdCA9IHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3QobGlzdE5hbWUpO1xuXG4gICAgY29uc29sZS5sb2coYnV0dG9uKVxuICAgIGNvbnNvbGUubG9nKHRhcmdldExpc3QpXG4gICAgY29uc29sZS5sb2codGFza05hbWUpXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgICAgY2FzZSAndGFza2RhdGUnOlxuICAgICAgICAgICAgdGFyZ2V0TGlzdC51cGRhdGVUYXNrKHRhc2tOYW1lLCBcImRhdGVcIiwgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIGJyZWFrOyAgIFxuICAgICAgICBjYXNlICd0YXNraW1wb3J0YW50JzpcbiAgICAgICAgICAgIHRhcmdldExpc3QudXBkYXRlVGFzayh0YXNrTmFtZSwgXCJpbXBvcnRhbnRcIiwgXCJ0cnVlXCIpXG4gICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgY2FzZSAndGFza2NvbXBsZXRlZCc6XG4gICAgICAgICAgICB0YXJnZXRMaXN0LnVwZGF0ZVRhc2sodGFza05hbWUsIFwiY29tcGxldGVkXCIsIFwidHJ1ZVwiKVxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKHRhcmdldExpc3QuZ2V0VGFza3MoKSk7XG4gICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgfSAgXG5cbiAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlTGlzdCh0YXJnZXRMaXN0KVxufVxuXG5jb25zdCBsb2FkVGFicyA9ICh0YWJOYW1lKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbG9hZFRhc2tzVGFiID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IFwiZGVmYXVsdGVkXCJcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBUYXNrIFRhYlwiKVxuICAgICAgICBsb2FkTWFpbkNvbnRlbnQodGFiTmFtZSlcblxuICAgICAgICBpZiAoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0TmFtZSkgPT0gbnVsbCl7cmV0dXJufVxuICAgICAgICBkaXNwbGF5VGFza3Moc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0TmFtZSkuZ2V0VGFza3MoKSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFRvZGF5VGFiID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGlzcGxheUFycmF5ID0gW11cbiAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0QWxsTGlzdE5hbWUoKVxuXG4gICAgICAgIGxpc3RBcnJheS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgZGlzcGxheUFycmF5ID0gZGlzcGxheUFycmF5LmNvbmNhdChzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3QpLmdldFRvZGF5VGFza3MoKSlcbiAgICAgICAgfSlcblxuICAgICAgICBsb2FkTWFpbkNvbnRlbnQodGFiTmFtZSlcbiAgICAgICAgZGlzcGxheVRhc2tzKGRpc3BsYXlBcnJheSlcblxuICAgIH1cblxuICAgIGNvbnN0IGxvYWRJbXBvcnRhbnRUYWIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkaXNwbGF5QXJyYXkgPSBbXVxuICAgICAgICBjb25zdCBsaXN0QXJyYXkgPSBzdG9yYWdlQ29udHJvbGxlci5nZXRBbGxMaXN0TmFtZSgpXG5cbiAgICAgICAgbGlzdEFycmF5LmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5QXJyYXkgPSBkaXNwbGF5QXJyYXkuY29uY2F0KHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3QobGlzdCkuZ2V0SW1wb3J0YW50VGFza3MoKSlcbiAgICAgICAgfSlcblxuICAgICAgICBsb2FkTWFpbkNvbnRlbnQodGFiTmFtZSlcbiAgICAgICAgZGlzcGxheVRhc2tzKGRpc3BsYXlBcnJheSlcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkQ29tcGxldGVkVGFiID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGlzcGxheUFycmF5ID0gW11cbiAgICAgICAgY29uc3QgbGlzdEFycmF5ID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0QWxsTGlzdE5hbWUoKVxuXG4gICAgICAgIGxpc3RBcnJheS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgZGlzcGxheUFycmF5ID0gZGlzcGxheUFycmF5LmNvbmNhdChzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3QpLmdldENvbXBsZXRlZFRhc2tzKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbG9hZE1haW5Db250ZW50KHRhYk5hbWUpXG4gICAgICAgIGRpc3BsYXlUYXNrcyhkaXNwbGF5QXJyYXkpXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZExpc3RUYWIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0QWxsTGlzdE5hbWUoKVt0YWJOYW1lXVxuICAgICAgICBsb2FkTWFpbkNvbnRlbnQobGlzdE5hbWUpXG4gICAgICAgIGRpc3BsYXlUYXNrcyhzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3ROYW1lKS5nZXRUYXNrcygpKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRhYk5hbWUpIHtcbiAgICAgICAgY2FzZSBcIlRhc2tzXCI6XG4gICAgICAgICAgICBsb2FkVGFza3NUYWIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiVG9kYXlcIjpcbiAgICAgICAgICAgIGxvYWRUb2RheVRhYigpO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBcIkltcG9ydGFudFwiOlxuICAgICAgICAgICAgbG9hZEltcG9ydGFudFRhYigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJDb21wbGV0ZWRcIjpcbiAgICAgICAgICAgIGxvYWRDb21wbGV0ZWRUYWIgKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxvYWRMaXN0VGFiKCk7XG4gICAgfVxufVxuXG5zaWRlYmFyQnRuRnVuY3Rpb24oKTtcbmxvYWRMaXN0cyhzdG9yYWdlQ29udHJvbGxlci5nZXRBbGxMaXN0TmFtZSgpKVxubG9hZFRhYnMoXCJUYXNrc1wiKVxuXG4vL2NyZWF0ZSBkZWZ1YWx0IGxpc3RcbmlmIChzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KFwiZGVmYXVsdGVkXCIpID09IG51bGwpIHtcbiAgICBjcmVhdGVMaXN0KFwiZGVmYXVsdGVkXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZCBkZWZhdWx0ZWQgbGlzdFwiKVxuICAgIGFkZFRhc2soXCJmaXJzdCB0YXNrXCIsIFwiMjAyMi0xMC0yMlwiLCBcImRlZmF1bHRlZFwiLCB0cnVlKVxuICAgIGFkZFRhc2soXCJzZWNvbmQgdGFza1wiLCBcIjIwMjItMDktMjJcIiwgXCJkZWZhdWx0ZWRcIiwgZmFsc2UpXG59XG5cblxuXG5leHBvcnQge1xuICAgIGFkZFRhc2ssXG4gICAgdG9nZ2xlVGFzayxcbiAgICBjcmVhdGVMaXN0LFxuICAgIGxvYWRUYWJzXG59IiwiLy90YXNrIGZhY3RvcnkgZnVuY3Rpb25zXG5jb25zdCB0YXNrID0gKG5hbWUsIGRhdGUsIGxpc3RuYW1lLCBpbXBvcnRhbnQsIGNvbXBsZXRlZCkgPT4ge1xuICAgIHJldHVybiB7bmFtZSwgZGF0ZSwgbGlzdG5hbWUsIGltcG9ydGFudCwgY29tcGxldGVkfVxufVxuXG5jb25zdCBsaXN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdXG5cbiAgICBjb25zdCBhZGRUb0xpc3QgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKHRhc2spXG4gICAgfSBcblxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3NcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUYXNrID0gKHRhc2tOYW1lLCBrZXksIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBcIlwiO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4gdGFzay5uYW1lID09IHRhc2tOYW1lID8gIHRhc2tJbmRleCA9IGluZGV4IDogZmFsc2UpXG4gICAgICAgIGlmIChrZXkgPT0gXCJkYXRlXCIpIHt0YXNrc1t0YXNrSW5kZXhdW2tleV0gPSBuZXdWYWx1ZX1cbiAgICAgICAgaWYgKGtleSA9PSBcImltcG9ydGFudFwiKSB7dGFza3NbdGFza0luZGV4XVtrZXldID8gdGFza3NbdGFza0luZGV4XVtrZXldID0gZmFsc2UgOiB0YXNrc1t0YXNrSW5kZXhdW2tleV0gPSB0cnVlfVxuICAgICAgICBpZiAoa2V5ID09IFwiY29tcGxldGVkXCIpIHt0YXNrc1t0YXNrSW5kZXhdW2tleV0gPyB0YXNrc1t0YXNrSW5kZXhdW2tleV0gPSBmYWxzZSA6IHRhc2tzW3Rhc2tJbmRleF1ba2V5XSA9IHRydWV9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kYXlUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgLy9uZWVkIHRvIGZpeCB0aGlzIGRhdGVcbiAgICAgICAgY29uc3QgdG9kYXkgPSBcIjIwMjItMDktMTlcIlxuICAgICAgICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5kYXRlID09IHRvZGF5KVxuICAgIH1cblxuICAgIGNvbnN0IGdldEltcG9ydGFudFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pbXBvcnRhbnQgPT0gdHJ1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wbGV0ZWRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suY29tcGxldGVkID09IHRydWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtuYW1lLCBhZGRUb0xpc3QsIGdldFRhc2tzLCB1cGRhdGVUYXNrLCBnZXRUb2RheVRhc2tzLCBnZXRJbXBvcnRhbnRUYXNrcywgZ2V0Q29tcGxldGVkVGFza3N9XG59XG5cbmV4cG9ydCB7XG4gICAgdGFzayxcbiAgICBsaXN0XG59IiwiaW1wb3J0IHtsaXN0fSBmcm9tIFwiLi9vYmplY3RDb250cm9sbGVyXCI7XG5cbmNvbnN0IHN0b3JhZ2VDb250cm9sbGVyID0ge1xuICAgIG5ld0xpc3Q6IChuYW1lKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KFtdKSlcbiAgICB9LFxuXG4gICAgc2F2ZUxpc3Q6IChsaXN0VG9TYXZlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RUb1NhdmUpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpc3RUb1NhdmUubmFtZSwgSlNPTi5zdHJpbmdpZnkobGlzdFRvU2F2ZS5nZXRUYXNrcygpKSlcbiAgICB9LFxuXG4gICAgZ2V0TGlzdDogKGxpc3ROYW1lKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkgPT0gbnVsbCkge3JldHVybiBudWxsfVxuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpKSB8fCBbXVxuICAgICAgICBjb25zdCBjYWxsZWRMaXN0ID0gbGlzdChsaXN0TmFtZSlcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IGNhbGxlZExpc3QuYWRkVG9MaXN0KHRhc2spKVxuICAgICAgICByZXR1cm4gY2FsbGVkTGlzdFxuICAgIH0sXG5cbiAgICBnZXRBbGxMaXN0TmFtZTogKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0QXJyYXkgPSBbXVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxpc3RBcnJheS5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RBcnJheVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZUNvbnRyb2xsZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==