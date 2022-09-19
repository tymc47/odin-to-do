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


    taskBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("tasks")})

    todayBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("today")})
    
    importantBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("important")})

    completedBtn.addEventListener('click', () => {;(0,_index__WEBPACK_IMPORTED_MODULE_0__.loadTabs)("completed")})

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
    const template = `<div id="main-heading">
    <h1>${tabname}</h1>
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
    <div class="taskcontainer">
    </div>`  
    maincontent.innerHTML += template

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
        const tabName = "Tasks"
        const listName = "defaulted"
        
        console.log("Loading Task Tab")
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(tabName)

        if (_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listName) == null){return}
        (0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listName).getTasks())
        
    }

    const loadTodayTab = () => {
        
    }

    const loadImportantTab = () => {

    }

    const loadCompletedTab = () => {

    }

    const loadListTab = () => {
        const listName = _storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getAllListName()[tabName]
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)(listName)
        ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getList(listName).getTasks())
        
    }

    switch (tabName) {
        case "tasks":
            loadTasksTab();
            break;
        case "today":
            loadTodayTab();
            break
        case "important":
            loadImportantTab();
            break;
        case "completed":
            loadCompletedTab ();
            break;
        default:
            loadListTab();
    }
}

;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.sidebarBtnFunction)();
(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadLists)(_storageController__WEBPACK_IMPORTED_MODULE_2__["default"].getAllListName())
loadTabs("tasks")

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

    return {name, addToList, getTasks, updateTask}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtRUFBa0I7QUFDbEIseURBQVMsQ0FBQyx5RUFBZ0M7QUFDMUM7O0FBRUE7QUFDQSxJQUFJLGtFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakM7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLDJCQUEyQix1REFBSTtBQUMvQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7O1VDN0JoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcG9zLy4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvb2JqZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9zdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRUYXNrLCB0b2dnbGVUYXNrLCBjcmVhdGVMaXN0LCBsb2FkVGFicyB9IGZyb20gXCIuL2luZGV4XCJcblxuY29uc3QgbWFpbmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbmNvbnRlbnQnKVxuXG5jb25zdCBzaWRlYmFyQnRuRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrc2J0bicpXG4gICAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXlidG4nKVxuICAgIGNvbnN0IGltcG9ydGFudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRhbnRidG4nKVxuICAgIGNvbnN0IGNvbXBsZXRlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWRidG4nKVxuICAgIGNvbnN0IGxpc3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3RidG4nKVxuICAgIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkbGlzdCcpXG4gICAgY29uc3QgY2xvc2VMaXN0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZWxpc3Rmb3JtJylcblxuXG4gICAgdGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkVGFicyhcInRhc2tzXCIpfSlcblxuICAgIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2xvYWRUYWJzKFwidG9kYXlcIil9KVxuICAgIFxuICAgIGltcG9ydGFudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkVGFicyhcImltcG9ydGFudFwiKX0pXG5cbiAgICBjb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bG9hZFRhYnMoXCJjb21wbGV0ZWRcIil9KVxuXG4gICAgbGlzdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRsaXN0Zm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSlcblxuICAgIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3Rmb3JtID4gaW5wdXRbdHlwZT1cInRleHRcIl0nKVxuICAgICAgICBpZiAobGlzdG5hbWUgPT0gXCJcIikge2FsZXJ0KFwiUGxlYXNlIGVudGVyIGxpc3QgbmFtZVwiKTsgcmV0dXJuO31cblxuICAgICAgICBjcmVhdGVMaXN0KGxpc3RuYW1lLnZhbHVlKTtcbiAgICAgICAgbGlzdG5hbWUudmFsdWUgPSBcIlwiXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRsaXN0Zm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuXG4gICAgY2xvc2VMaXN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGxpc3Rmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG4gICAgXG59XG5cbmNvbnN0IGxvYWRMaXN0cyA9IChsaXN0QXJyYXkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuICAgIGlmIChsaXN0QXJyYXkgPT0gbnVsbCkge3JldHVybn1cblxuICAgIC8vY2xlYXIgbGlzdCBjb250YWluZXJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Rjb250YWluZXInKVxuICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vYWRkIGxpc3QgYnV0dG9uIGZvciBlYWNoIGxpc3RcbiAgICBsaXN0QXJyYXkuZm9yRWFjaCgobGlzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGxpc3QgPT0gXCJkZWZhdWx0ZWRcIikge3JldHVybn1cbiAgICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxidXR0b24gY2xhc3M9XCJsaXN0XCIgZGF0YS1saXN0PSR7aW5kZXh9PlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5saXN0PC9zcGFuPlxuICAgICAgICAke2xpc3R9XG4gICAgICAgIDwvYnV0dG9uPmBcbiAgICB9KVxuXG4gICAgLy9hZGQgZnVuY3Rpb25hbGl0eSB0byBsaXN0IGJ1dHRvbnNcbiAgICBjb25zdCBsaXN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdFwiKVxuICAgIGxpc3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBsb2FkVGFicyhldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGlzdClcbiAgICB9KSlcblxufVxuXG5cbmNvbnN0IGxvYWRNYWluQ29udGVudCA9ICh0YWJuYW1lKSA9PiB7XG4gICAgLy8gbWFpbmNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgLy8gbWFpbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbmNvbnRlbnQnKVxuICAgIFxuICAgIC8vbG9hZCBkaXNwbGF5XG4gICAgbWFpbmNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIiAgIFxuICAgIGNvbnN0IHRlbXBsYXRlID0gYDxkaXYgaWQ9XCJtYWluLWhlYWRpbmdcIj5cbiAgICA8aDE+JHt0YWJuYW1lfTwvaDE+XG4gICAgPGJ1dHRvbiBpZD1cImRpc3BsYXlmb3JtYnRuXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+YWRkPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJhZGR0YXNrZm9ybVwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiPlxuICAgIDxpbnB1dCBjbGFzcz1cInN0YXJcIiB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImFkZHRhc2tcIj5BZGQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbGFkZFwiPkNhbmNlbDwvYnV0dG9uPiBcbiAgICA8L2Rpdj4gICAgXG4gICAgPGRpdiBjbGFzcz1cInRhc2tjb250YWluZXJcIj5cbiAgICA8L2Rpdj5gICBcbiAgICBtYWluY29udGVudC5pbm5lckhUTUwgKz0gdGVtcGxhdGVcblxuICAgIC8vZm9ybSBmdW5jdGlvbmFsaXR5IGFuZCBkaXNwbGF5XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFza2Zvcm0nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5Zm9ybWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfSkgICBcblxuICAgIC8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gZm9ybSBidXR0b25zXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFza2Zvcm0gPiBpbnB1dFt0eXBlPVwidGV4dFwiXScpXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2tmb3JtID4gaW5wdXRbdHlwZT1cImRhdGVcIl0nKVxuICAgICAgICBjb25zdCB0YXNrSW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2tmb3JtID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSB0YWJuYW1lID09IFwiVGFza3NcIiA/IFwiZGVmYXVsdGVkXCIgOiB0YWJuYW1lOyBcbiAgICAgICAgaWYgKHRhc2tOYW1lLnZhbHVlID09IFwiXCIpIHthbGVydChcIlBsZWFzZSBlbnRlciBhIHRpbHRlIGZvciB5b3VyIHRhc2shXCIpOyByZXR1cm47fVxuXG4gICAgICAgIGFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWRkVGFzayh0YXNrTmFtZS52YWx1ZSwgdGFza0RhdGUudmFsdWUsIHRhc2tMaXN0LCB0YXNrSW1wb3J0YW50LmNoZWNrZWQpXG4gICAgICAgIHRhc2tOYW1lLnZhbHVlID0gXCJcIlxuICAgICAgICB0YXNrRGF0ZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGFza0ltcG9ydGFudC5jaGVja2VkID0gZmFsc2VcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbGFkZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcblxufVxuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoc3RvcmFnZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2NvbnRhaW5lcicpXG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXG5cbiAgICAvL2Rpc3BsYXkgYWxsIHRhc2tcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlKVxuICAgIHN0b3JhZ2UuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7cmV0dXJufVxuICAgICAgICBjb25zdCB0YXNrVGVtcGxhdGUgPSBgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0YXNrY29tcGxldGVkXCIgZGF0YS10YXNrPSR7aW5kZXh9IGRhdGEtbGlzdG5hbWU9JHt0YXNrLmxpc3RuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tuYW1lXCIgZGF0YS10YXNrPSR7aW5kZXh9IGRhdGEtbGlzdG5hbWU9JHt0YXNrLmxpc3RuYW1lfT4ke3Rhc2submFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0YXNrZGF0ZVwiIGRhdGEtdGFzaz0ke2luZGV4fSB2YWx1ZT0ke3Rhc2suZGF0ZX0gZGF0YS1saXN0bmFtZT0ke3Rhc2subGlzdG5hbWV9PjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke3Rhc2suaW1wb3J0YW50PyBcInRhc2tpbXBvcnRhbnQgdHJ1ZVwiIDogXCJ0YXNraW1wb3J0YW50XCJ9XCIgZGF0YS10YXNrPSR7aW5kZXh9IGRhdGEtbGlzdG5hbWU9JHt0YXNrLmxpc3RuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+c3Rhcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IHRhc2tUZW1wbGF0ZTtcbiAgICB9KVxuICAgIFxuICAgIC8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gdGFzayBidXR0b25zXG4gICAgY29uc3QgZGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tkYXRlXCIpXG4gICAgY29uc3QgaW1wb3J0YW50QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza2ltcG9ydGFudFwiKVxuICAgIGNvbnN0IGNvbXBsZXRlZEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tjb21wbGV0ZWRcIilcbiAgICBkYXRlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4ub25pbnB1dCA9IHRvZ2dsZVRhc2spXG4gICAgaW1wb3J0YW50QnRucy5mb3JFYWNoKGJ0biA9PiBidG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICB0b2dnbGVUYXNrKGV2ZW50KVxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJ0cnVlXCIpXG4gICAgfSlcbiAgICBjb21wbGV0ZWRCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRvZ2dsZVRhc2spKVxuXG5cbn1cblxuZXhwb3J0IHtcbiAgICBzaWRlYmFyQnRuRnVuY3Rpb24sXG4gICAgbG9hZE1haW5Db250ZW50LFxuICAgIGRpc3BsYXlUYXNrcyxcbiAgICBsb2FkTGlzdHNcbn0iLCIgaW1wb3J0IHsgc2lkZWJhckJ0bkZ1bmN0aW9uLCBsb2FkVGFza3MsIGRpc3BsYXlUYXNrcywgbG9hZExpc3RzLCBsb2FkTWFpbkNvbnRlbnQgfSBmcm9tIFwiLi9kb21Db250cm9sbGVyXCI7XG4gaW1wb3J0IHsgdGFzaywgbGlzdCB9IGZyb20gXCIuL29iamVjdENvbnRyb2xsZXJcIjsgIFxuIGltcG9ydCBzdG9yYWdlQ29udHJvbGxlciBmcm9tIFwiLi9zdG9yYWdlQ29udHJvbGxlclwiO1xuXG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobmFtZSkgPT4ge1xuICAgIHN0b3JhZ2VDb250cm9sbGVyLm5ld0xpc3QobmFtZSlcblxuICAgIC8vY2FsbCBsaXN0IGRpc3BsYXlcbiAgICBsb2FkTGlzdHMoc3RvcmFnZUNvbnRyb2xsZXIuZ2V0QWxsTGlzdE5hbWUoKSlcbn1cblxuIGNvbnN0IGFkZFRhc2sgPSAobmFtZSwgZGF0ZSwgbGlzdG5hbWUgPSBcImRlZmF1bHRlZFwiLCBpbXBvcnRhbnQsKSA9PiB7XG4gICAgIC8vY3JlYXRlIG5ldyB0YXNrIG9iamVjdFxuICAgICBjb25zdCBuZXdUYXNrID0gdGFzayhuYW1lLCBkYXRlLCBsaXN0bmFtZSwgaW1wb3J0YW50LCBmYWxzZSlcblxuICAgICAvL2FkZCB0YXNrIHRvIGxpc3RcbiAgICAgY29uc3QgbGlzdFRvQWRkID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0TGlzdChsaXN0bmFtZSlcbiAgICAgbGlzdFRvQWRkLmFkZFRvTGlzdChuZXdUYXNrKVxuICAgICBcbiAgICAgLy9zYXZlIGl0IHNvbWV3aGVyZVxuICAgIHN0b3JhZ2VDb250cm9sbGVyLnNhdmVMaXN0KGxpc3RUb0FkZClcblxuICAgICBcbiAgICBkaXNwbGF5VGFza3MobGlzdFRvQWRkLmdldFRhc2tzKCkpXG4gICAgfVxuXG5jb25zdCB0b2dnbGVUYXNrID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3RbMF07XG4gICAgY29uc3QgbGlzdE5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGlzdG5hbWU7XG4gICAgY29uc3QgdGFyZ2V0TGlzdCA9IHN0b3JhZ2VDb250cm9sbGVyLmdldExpc3QobGlzdE5hbWUpO1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YXNrXG5cbiAgICBjb25zb2xlLmxvZyhidXR0b24pXG4gICAgY29uc29sZS5sb2codGFyZ2V0TGlzdClcbiAgICBjb25zb2xlLmxvZyh0YXNrSW5kZXgpXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgICAgY2FzZSAndGFza2RhdGUnOlxuICAgICAgICAgICAgdGFyZ2V0TGlzdC51cGRhdGVUYXNrKHRhc2tJbmRleCwgXCJkYXRlXCIsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgY2FzZSAndGFza2ltcG9ydGFudCc6XG4gICAgICAgICAgICB0YXJnZXRMaXN0LnVwZGF0ZVRhc2sodGFza0luZGV4LCBcImltcG9ydGFudFwiLCBcInRydWVcIilcbiAgICAgICAgICAgIGJyZWFrOyAgIFxuICAgICAgICBjYXNlICd0YXNrY29tcGxldGVkJzpcbiAgICAgICAgICAgIHRhcmdldExpc3QudXBkYXRlVGFzayh0YXNrSW5kZXgsIFwiY29tcGxldGVkXCIsIFwidHJ1ZVwiKVxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKHRhcmdldExpc3QuZ2V0VGFza3MoKSk7XG4gICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgfSAgXG5cbiAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlTGlzdCh0YXJnZXRMaXN0KVxufVxuXG5jb25zdCBsb2FkVGFicyA9ICh0YWJOYW1lKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbG9hZFRhc2tzVGFiID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YWJOYW1lID0gXCJUYXNrc1wiXG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gXCJkZWZhdWx0ZWRcIlxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIFRhc2sgVGFiXCIpXG4gICAgICAgIGxvYWRNYWluQ29udGVudCh0YWJOYW1lKVxuXG4gICAgICAgIGlmIChzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3ROYW1lKSA9PSBudWxsKXtyZXR1cm59XG4gICAgICAgIGRpc3BsYXlUYXNrcyhzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3ROYW1lKS5nZXRUYXNrcygpKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkVG9kYXlUYWIgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGxvYWRJbXBvcnRhbnRUYWIgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICBjb25zdCBsb2FkQ29tcGxldGVkVGFiID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZExpc3RUYWIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gc3RvcmFnZUNvbnRyb2xsZXIuZ2V0QWxsTGlzdE5hbWUoKVt0YWJOYW1lXVxuICAgICAgICBsb2FkTWFpbkNvbnRlbnQobGlzdE5hbWUpXG4gICAgICAgIGRpc3BsYXlUYXNrcyhzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KGxpc3ROYW1lKS5nZXRUYXNrcygpKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRhYk5hbWUpIHtcbiAgICAgICAgY2FzZSBcInRhc2tzXCI6XG4gICAgICAgICAgICBsb2FkVGFza3NUYWIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidG9kYXlcIjpcbiAgICAgICAgICAgIGxvYWRUb2RheVRhYigpO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBcImltcG9ydGFudFwiOlxuICAgICAgICAgICAgbG9hZEltcG9ydGFudFRhYigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjb21wbGV0ZWRcIjpcbiAgICAgICAgICAgIGxvYWRDb21wbGV0ZWRUYWIgKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxvYWRMaXN0VGFiKCk7XG4gICAgfVxufVxuXG5zaWRlYmFyQnRuRnVuY3Rpb24oKTtcbmxvYWRMaXN0cyhzdG9yYWdlQ29udHJvbGxlci5nZXRBbGxMaXN0TmFtZSgpKVxubG9hZFRhYnMoXCJ0YXNrc1wiKVxuXG4vL2NyZWF0ZSBkZWZ1YWx0IGxpc3RcbmlmIChzdG9yYWdlQ29udHJvbGxlci5nZXRMaXN0KFwiZGVmYXVsdGVkXCIpID09IG51bGwpIHtcbiAgICBjcmVhdGVMaXN0KFwiZGVmYXVsdGVkXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZCBkZWZhdWx0ZWQgbGlzdFwiKVxuICAgIGFkZFRhc2soXCJmaXJzdCB0YXNrXCIsIFwiMjAyMi0xMC0yMlwiLCBcImRlZmF1bHRlZFwiLCB0cnVlKVxuICAgIGFkZFRhc2soXCJzZWNvbmQgdGFza1wiLCBcIjIwMjItMDktMjJcIiwgXCJkZWZhdWx0ZWRcIiwgZmFsc2UpXG59XG5cblxuXG5leHBvcnQge1xuICAgIGFkZFRhc2ssXG4gICAgdG9nZ2xlVGFzayxcbiAgICBjcmVhdGVMaXN0LFxuICAgIGxvYWRUYWJzXG59IiwiLy90YXNrIGZhY3RvcnkgZnVuY3Rpb25zXG5jb25zdCB0YXNrID0gKG5hbWUsIGRhdGUsIGxpc3RuYW1lLCBpbXBvcnRhbnQsIGNvbXBsZXRlZCkgPT4ge1xuICAgIHJldHVybiB7bmFtZSwgZGF0ZSwgbGlzdG5hbWUsIGltcG9ydGFudCwgY29tcGxldGVkfVxufVxuXG5jb25zdCBsaXN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdXG5cbiAgICBjb25zdCBhZGRUb0xpc3QgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKHRhc2spXG4gICAgfSBcblxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3NcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUYXNrID0gKGluZGV4LCBrZXksIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gXCJkYXRlXCIpIHt0YXNrc1tpbmRleF1ba2V5XSA9IG5ld1ZhbHVlfVxuICAgICAgICBpZiAoa2V5ID09IFwiaW1wb3J0YW50XCIpIHt0YXNrc1tpbmRleF1ba2V5XSA/IHRhc2tzW2luZGV4XVtrZXldID0gZmFsc2UgOiB0YXNrc1tpbmRleF1ba2V5XSA9IHRydWV9XG4gICAgICAgIGlmIChrZXkgPT0gXCJjb21wbGV0ZWRcIikge3Rhc2tzW2luZGV4XVtrZXldID8gdGFza3NbaW5kZXhdW2tleV0gPSBmYWxzZSA6IHRhc2tzW2luZGV4XVtrZXldID0gdHJ1ZX1cbiAgICB9XG5cbiAgICByZXR1cm4ge25hbWUsIGFkZFRvTGlzdCwgZ2V0VGFza3MsIHVwZGF0ZVRhc2t9XG59XG5cbmV4cG9ydCB7XG4gICAgdGFzayxcbiAgICBsaXN0XG59IiwiaW1wb3J0IHtsaXN0fSBmcm9tIFwiLi9vYmplY3RDb250cm9sbGVyXCI7XG5cbmNvbnN0IHN0b3JhZ2VDb250cm9sbGVyID0ge1xuICAgIG5ld0xpc3Q6IChuYW1lKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KFtdKSlcbiAgICB9LFxuXG4gICAgc2F2ZUxpc3Q6IChsaXN0VG9TYXZlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RUb1NhdmUpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpc3RUb1NhdmUubmFtZSwgSlNPTi5zdHJpbmdpZnkobGlzdFRvU2F2ZS5nZXRUYXNrcygpKSlcbiAgICB9LFxuXG4gICAgZ2V0TGlzdDogKGxpc3ROYW1lKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0TmFtZSkgPT0gbnVsbCkge3JldHVybiBudWxsfVxuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpKSB8fCBbXVxuICAgICAgICBjb25zdCBjYWxsZWRMaXN0ID0gbGlzdChsaXN0TmFtZSlcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IGNhbGxlZExpc3QuYWRkVG9MaXN0KHRhc2spKVxuICAgICAgICByZXR1cm4gY2FsbGVkTGlzdFxuICAgIH0sXG5cbiAgICBnZXRBbGxMaXN0TmFtZTogKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0QXJyYXkgPSBbXVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxpc3RBcnJheS5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RBcnJheVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZUNvbnRyb2xsZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==