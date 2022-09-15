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
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks),
/* harmony export */   "sidebarBtnFunction": () => (/* binding */ sidebarBtnFunction)
/* harmony export */ });
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
                            <button id="addtaskbtn">
                                <span class="material-symbols-outlined">add</span>
                            </button>
                        </div>    
                        <div class="taskcontainer">
                            
                        </div>`

    maincontent.innerHTML += template

    //add button function
    const addTaskbtn = document.querySelector('#addtaskbtn')
    addTaskbtn.addEventListener('click', () => {
        //call form
        //call add task logic
        //call display task
    })

    
}

const loadToday = () => {
    console.log("In today")
}

const loadImportant = () => {
    console.log("In Important")
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ "./src/domController.js");
 

 (0,_domController__WEBPACK_IMPORTED_MODULE_0__.sidebarBtnFunction)();
 (0,_domController__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNwREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLENBQWlFOztBQUVqRSxDQUFDLGtFQUFrQjtBQUNuQixDQUFDLHlEQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWFpbmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbmNvbnRlbnQnKVxuXG5jb25zdCBzaWRlYmFyQnRuRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrc2J0bicpXG4gICAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXlidG4nKVxuICAgIGNvbnN0IGltcG9ydGFudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRhbnRidG4nKVxuICAgIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkbGlzdGJ0bicpXG5cbiAgICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFRhc2tzKVxuXG4gICAgdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkVG9kYXkpXG5cbiAgICBpbXBvcnRhbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSW1wb3J0YW50KVxuXG59XG5cbmNvbnN0IGxvYWRUYXNrcyA9ICgpID0+IHtcbiAgICAvLyBtYWluY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgICAvLyBtYWluY29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluY29udGVudCcpXG5cbiAgICAvL2xvYWQgZGlzcGxheVxuICAgIG1haW5jb250ZW50LmlubmVySFRNTCA9IFwiXCJcblxuICAgIGNvbnN0IHRlbXBsYXRlID0gYDxkaXYgaWQ9XCJ0YXNrLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+VGFza3M8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGR0YXNrYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICBtYWluY29udGVudC5pbm5lckhUTUwgKz0gdGVtcGxhdGVcblxuICAgIC8vYWRkIGJ1dHRvbiBmdW5jdGlvblxuICAgIGNvbnN0IGFkZFRhc2tidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFza2J0bicpXG4gICAgYWRkVGFza2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy9jYWxsIGZvcm1cbiAgICAgICAgLy9jYWxsIGFkZCB0YXNrIGxvZ2ljXG4gICAgICAgIC8vY2FsbCBkaXNwbGF5IHRhc2tcbiAgICB9KVxuXG4gICAgXG59XG5cbmNvbnN0IGxvYWRUb2RheSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkluIHRvZGF5XCIpXG59XG5cbmNvbnN0IGxvYWRJbXBvcnRhbnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJJbiBJbXBvcnRhbnRcIilcbn1cblxuZXhwb3J0IHtcbiAgICBzaWRlYmFyQnRuRnVuY3Rpb24sXG4gICAgbG9hZFRhc2tzXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIgaW1wb3J0IHsgc2lkZWJhckJ0bkZ1bmN0aW9uLCBsb2FkVGFza3MgfSBmcm9tIFwiLi9kb21Db250cm9sbGVyXCI7XG5cbiBzaWRlYmFyQnRuRnVuY3Rpb24oKTtcbiBsb2FkVGFza3MoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=