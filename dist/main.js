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
/* harmony export */   "displayAll": () => (/* binding */ displayAll),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks),
/* harmony export */   "sidebarBtnFunction": () => (/* binding */ sidebarBtnFunction)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


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
        if (taskName.value == "") {alert("Please enter a tilte for your task!"); return;}

        addTaskForm.style.display = "none";
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.addTask)(taskName.value, taskDate.value, taskImportant.checked)
        taskName.value = ""
        taskDate.value = ""
        taskImportant.checked = false
    })

    document.querySelector('#canceladd').addEventListener('click', () => {
        addTaskForm.style.display = "none";
    })
}

const loadToday = () => {
    console.log("In today")
}

const loadImportant = () => {
    console.log("In Important")
}

const displayAll = (storage) => {
    const taskContainer = document.querySelector('.taskcontainer')
    taskContainer.innerHTML = ""

    //display all task
    console.log(storage)
    storage.forEach((task, index) => {
        if (task.completed) {return}
        const taskTemplate = `<div class="task">
                            <input type="checkbox" class="taskcompleted" data-task=${index}>
                            <span class="taskname" data-task=${index}>${task.name}</span>
                            <input type="date" class="taskdate" data-task=${index} value=${task.date}></button>
                            <button class="${task.important? "taskimportant true" : "taskimportant"}" data-task=${index}>
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
/* harmony export */   "toggleTask": () => (/* binding */ toggleTask)
/* harmony export */ });
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ "./src/domController.js");
/* harmony import */ var _taskObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskObj */ "./src/taskObj.js");
 
   

 const tempStorage = [{name: 'first task', date: '2022-09-16', important: true, completed: false},{name: 'second task', date: '2022-09-17', important: false, completed: false} ]
 
 const addTask = (name, date, important) => {
     //create new task object
     const newTask = (0,_taskObj__WEBPACK_IMPORTED_MODULE_1__.task)(name, date, important, false)
     
     //save it somewhere
     tempStorage.push(newTask)
     
     //call display
     ;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayAll)(tempStorage)
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
            (0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayAll)(tempStorage);
            break;   
    }
    
}

;(0,_domController__WEBPACK_IMPORTED_MODULE_0__.sidebarBtnFunction)();
(0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();
(0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayAll)(tempStorage)



/***/ }),

/***/ "./src/taskObj.js":
/*!************************!*\
  !*** ./src/taskObj.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
//task factory functions
const task = (name, date, important, completed) => {
    return {name, date, important, completed}
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUE4Qzs7QUFFakY7QUFDQSxRQUFRLCtDQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHFGQUFxRixNQUFNO0FBQzNGLCtEQUErRCxNQUFNLEdBQUcsVUFBVTtBQUNsRiw0RUFBNEUsT0FBTyxRQUFRLFVBQVU7QUFDckcsNkNBQTZDLHVEQUF1RCxjQUFjLE1BQU07QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw4Q0FBVTtBQUNwRDtBQUNBLFFBQVEsbURBQVU7QUFDbEI7QUFDQSxLQUFLO0FBQ0wsZ0VBQWdFLDhDQUFVOzs7QUFHMUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0EsQ0FBNkU7QUFDN0UsQ0FBa0M7O0FBRWxDLHVCQUF1QiwwRUFBMEUsRUFBRSw2RUFBNkU7QUFDaEw7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJEQUFVO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1FQUFrQjtBQUNsQix5REFBUztBQUNULDBEQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FDckNWO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7O1VDSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL3Rhc2tPYmouanMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkVGFzaywgdG9nZ2xlVGFza30gZnJvbSBcIi4vaW5kZXhcIlxuXG5jb25zdCBtYWluY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluY29udGVudCcpXG5cbmNvbnN0IHNpZGViYXJCdG5GdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzYnRuJylcbiAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheWJ0bicpXG4gICAgY29uc3QgaW1wb3J0YW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltcG9ydGFudGJ0bicpXG4gICAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRsaXN0YnRuJylcblxuICAgIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkVGFza3MpXG5cbiAgICB0b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRUb2RheSlcbiAgICBcbiAgICBpbXBvcnRhbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSW1wb3J0YW50KVxuICAgIFxufVxuXG5jb25zdCBsb2FkVGFza3MgPSAoKSA9PiB7XG4gICAgLy8gbWFpbmNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgLy8gbWFpbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbmNvbnRlbnQnKVxuICAgIFxuICAgIC8vbG9hZCBkaXNwbGF5XG4gICAgbWFpbmNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIiAgIFxuICAgIGNvbnN0IHRlbXBsYXRlID0gYDxkaXYgaWQ9XCJ0YXNrLWhlYWRpbmdcIj5cbiAgICA8aDE+VGFza3M8L2gxPlxuICAgIDxidXR0b24gaWQ9XCJkaXNwbGF5Zm9ybWJ0blwiPlxuICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiYWRkdGFza2Zvcm1cIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJzdGFyXCIgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGR0YXNrXCI+QWRkPC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWxhZGRcIj5DYW5jZWw8L2J1dHRvbj4gXG4gICAgPC9kaXY+ICAgIFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrY29udGFpbmVyXCI+XG4gICAgPC9kaXY+YCAgXG4gICAgbWFpbmNvbnRlbnQuaW5uZXJIVE1MICs9IHRlbXBsYXRlXG5cbiAgICAvL2Zvcm0gZnVuY3Rpb25hbGl0eSBhbmQgZGlzcGxheVxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2tmb3JtJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheWZvcm1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH0pICAgXG5cbiAgICAvL2FkZCBmdW5jdGlvbmFsaXR5IHRvIGZvcm0gYnV0dG9uc1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2tmb3JtID4gaW5wdXRbdHlwZT1cInRleHRcIl0nKVxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrZm9ybSA+IGlucHV0W3R5cGU9XCJkYXRlXCJdJylcbiAgICAgICAgY29uc3QgdGFza0ltcG9ydGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrZm9ybSA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgIGlmICh0YXNrTmFtZS52YWx1ZSA9PSBcIlwiKSB7YWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB0aWx0ZSBmb3IgeW91ciB0YXNrIVwiKTsgcmV0dXJuO31cblxuICAgICAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGFkZFRhc2sodGFza05hbWUudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB0YXNrSW1wb3J0YW50LmNoZWNrZWQpXG4gICAgICAgIHRhc2tOYW1lLnZhbHVlID0gXCJcIlxuICAgICAgICB0YXNrRGF0ZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGFza0ltcG9ydGFudC5jaGVja2VkID0gZmFsc2VcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbGFkZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcbn1cblxuY29uc3QgbG9hZFRvZGF5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiSW4gdG9kYXlcIilcbn1cblxuY29uc3QgbG9hZEltcG9ydGFudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkluIEltcG9ydGFudFwiKVxufVxuXG5jb25zdCBkaXNwbGF5QWxsID0gKHN0b3JhZ2UpID0+IHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tjb250YWluZXInKVxuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuXG4gICAgLy9kaXNwbGF5IGFsbCB0YXNrXG4gICAgY29uc29sZS5sb2coc3RvcmFnZSlcbiAgICBzdG9yYWdlLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge3JldHVybn1cbiAgICAgICAgY29uc3QgdGFza1RlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFza2NvbXBsZXRlZFwiIGRhdGEtdGFzaz0ke2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tuYW1lXCIgZGF0YS10YXNrPSR7aW5kZXh9PiR7dGFzay5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cInRhc2tkYXRlXCIgZGF0YS10YXNrPSR7aW5kZXh9IHZhbHVlPSR7dGFzay5kYXRlfT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHt0YXNrLmltcG9ydGFudD8gXCJ0YXNraW1wb3J0YW50IHRydWVcIiA6IFwidGFza2ltcG9ydGFudFwifVwiIGRhdGEtdGFzaz0ke2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+c3Rhcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IHRhc2tUZW1wbGF0ZTtcbiAgICB9KVxuICAgIFxuICAgIC8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gdGFzayBidXR0b25zXG4gICAgY29uc3QgZGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tkYXRlXCIpXG4gICAgY29uc3QgaW1wb3J0YW50QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza2ltcG9ydGFudFwiKVxuICAgIGNvbnN0IGNvbXBsZXRlZEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tjb21wbGV0ZWRcIilcbiAgICBkYXRlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4ub25pbnB1dCA9IHRvZ2dsZVRhc2spXG4gICAgaW1wb3J0YW50QnRucy5mb3JFYWNoKGJ0biA9PiBidG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICB0b2dnbGVUYXNrKGV2ZW50KVxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJ0cnVlXCIpXG4gICAgfSlcbiAgICBjb21wbGV0ZWRCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRvZ2dsZVRhc2spKVxuXG5cbn1cblxuZXhwb3J0IHtcbiAgICBzaWRlYmFyQnRuRnVuY3Rpb24sXG4gICAgbG9hZFRhc2tzLFxuICAgIGRpc3BsYXlBbGxcbn0iLCIgaW1wb3J0IHsgc2lkZWJhckJ0bkZ1bmN0aW9uLCBsb2FkVGFza3MsIGRpc3BsYXlBbGwgfSBmcm9tIFwiLi9kb21Db250cm9sbGVyXCI7XG4gaW1wb3J0IHsgdGFzayB9IGZyb20gXCIuL3Rhc2tPYmpcIjsgIFxuXG4gY29uc3QgdGVtcFN0b3JhZ2UgPSBbe25hbWU6ICdmaXJzdCB0YXNrJywgZGF0ZTogJzIwMjItMDktMTYnLCBpbXBvcnRhbnQ6IHRydWUsIGNvbXBsZXRlZDogZmFsc2V9LHtuYW1lOiAnc2Vjb25kIHRhc2snLCBkYXRlOiAnMjAyMi0wOS0xNycsIGltcG9ydGFudDogZmFsc2UsIGNvbXBsZXRlZDogZmFsc2V9IF1cbiBcbiBjb25zdCBhZGRUYXNrID0gKG5hbWUsIGRhdGUsIGltcG9ydGFudCkgPT4ge1xuICAgICAvL2NyZWF0ZSBuZXcgdGFzayBvYmplY3RcbiAgICAgY29uc3QgbmV3VGFzayA9IHRhc2sobmFtZSwgZGF0ZSwgaW1wb3J0YW50LCBmYWxzZSlcbiAgICAgXG4gICAgIC8vc2F2ZSBpdCBzb21ld2hlcmVcbiAgICAgdGVtcFN0b3JhZ2UucHVzaChuZXdUYXNrKVxuICAgICBcbiAgICAgLy9jYWxsIGRpc3BsYXlcbiAgICAgZGlzcGxheUFsbCh0ZW1wU3RvcmFnZSlcbiAgICB9XG5cbmNvbnN0IHRvZ2dsZVRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdFswXTtcbiAgICBjb25zdCB0YXJnZXQgPSB0ZW1wU3RvcmFnZVtldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFza11cbiAgICBjb25zb2xlLmxvZyhidXR0b24pXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgICAgY2FzZSAndGFza2RhdGUnOlxuICAgICAgICAgICAgdGFyZ2V0LmRhdGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgY2FzZSAndGFza2ltcG9ydGFudCc6XG4gICAgICAgICAgICB0YXJnZXQuaW1wb3J0YW50ID8gdGFyZ2V0LmltcG9ydGFudCA9IGZhbHNlIDogdGFyZ2V0LmltcG9ydGFudCA9IHRydWU7XG4gICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgY2FzZSAndGFza2NvbXBsZXRlZCc6XG4gICAgICAgICAgICB0YXJnZXQuY29tcGxldGVkID8gdGFyZ2V0LmNvbXBsZXRlZCA9IGZhbHNlIDogdGFyZ2V0LmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBkaXNwbGF5QWxsKHRlbXBTdG9yYWdlKTtcbiAgICAgICAgICAgIGJyZWFrOyAgIFxuICAgIH1cbiAgICBcbn1cblxuc2lkZWJhckJ0bkZ1bmN0aW9uKCk7XG5sb2FkVGFza3MoKTtcbmRpc3BsYXlBbGwodGVtcFN0b3JhZ2UpXG5cbmV4cG9ydCB7XG4gICAgYWRkVGFzayxcbiAgICB0b2dnbGVUYXNrXG59IiwiLy90YXNrIGZhY3RvcnkgZnVuY3Rpb25zXG5jb25zdCB0YXNrID0gKG5hbWUsIGRhdGUsIGltcG9ydGFudCwgY29tcGxldGVkKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lLCBkYXRlLCBpbXBvcnRhbnQsIGNvbXBsZXRlZH1cbn1cblxuZXhwb3J0IHtcbiAgICB0YXNrXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==