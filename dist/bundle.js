/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createForm: () => (/* binding */ createForm)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nconst content = document.querySelector('.form-holder');\n\nfunction createForm() {\n    const form = document.createElement('form');\n    form.classList.add('form', 'form-open');\n\n    form.style.width = \"50vw\";\n    const name = document.createElement('input');\n    const desc = document.createElement('textarea');\n    desc.rows = 6;\n    const date = document.createElement('input');\n    const prio = document.createElement('input');\n    const prlb = document.createElement('label');\n    name.placeholder = \"Task...\";\n    desc.placeholder = \"Description...\";\n    date.type = \"date\";\n    prio.type = \"checkbox\";\n    prio.style.marginInline = \"3vw\";\n    prio.id = \"prCh\";\n    prlb.innerHTML = \"Prioritise?\";\n    prlb.htmlFor = \"prCh\";\n\n    [name, desc, date].forEach(input => {\n        input.classList.add(\"form-input\"); \n        form.appendChild(input);\n    });\n\n    const checkboxCont = document.createElement('div');\n    checkboxCont.classList.add('form-checkbox');\n    form.appendChild(checkboxCont);\n    checkboxCont.appendChild(prlb);\n    checkboxCont.appendChild(prio);\n\n\n\n    const btnCont = document.createElement('div');\n    btnCont.classList.add(\"form-buttons\")\n    form.appendChild(btnCont)\n\n    const submit = document.createElement('button');\n    submit.innerHTML = \"Add task!\";\n    submit.disabled = true;\n    submit.classList.add(\"submit-button\");\n    btnCont.appendChild(submit);\n\n    const cancel = document.createElement('button');\n    cancel.innerHTML= \"Cancel\";\n    cancel.classList.add(\"submit-button\");\n    btnCont.appendChild(cancel);\n\n    content.appendChild(form);\n\n    form.addEventListener('input', () => {\n        validateForm(submit, name, desc, date)\n    });\n\n    cancel.addEventListener('click', (e) => {\n        e.preventDefault();\n        content.style.visibility = 'hidden';\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)(_task__WEBPACK_IMPORTED_MODULE_0__.taskArray);\n    })\n\n    submit.addEventListener('click', (e) => {\n        let priority\n        if (prio.checked) {\n            priority = \"Yes\"\n        } else {\n            priority = \"No\"\n        }\n\n        e.preventDefault();\n        const task = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(name.value, desc.value, date.value, priority);\n        _task__WEBPACK_IMPORTED_MODULE_0__.taskArray.push(task);\n        content.style.visibility = 'hidden'\n        localStorage.setItem('taskArray', JSON.stringify(_task__WEBPACK_IMPORTED_MODULE_0__.taskArray));\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)(_task__WEBPACK_IMPORTED_MODULE_0__.taskArray);\n    }\n    )\n}\n\n\nfunction validateForm(button, a, b, c) {\n    if (a.value !== '' && b.value !== '' && c.value !== '') {\n        button.disabled = false;\n    } else {\n        button.disabled = true;\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/form.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nconst content = document.querySelector('.content');\n\nfunction loadHome(array) {\n  // Clear the existing content\n  console.log(array);\n  content.style.filter = \"blur(0)\";\n  content.innerHTML = '';\n\n  const taskTable = document.createElement('table');\n  taskTable.style.margin = \"2vh\";\n  taskTable.style.textAlign = 'center';\n\n  const taskTableTitle = document.createElement('td');\n  taskTableTitle.textContent = \"Task List\"\n  taskTableTitle.setAttribute('colspan', '5');\n  taskTable.appendChild(taskTableTitle)\n\n  // Create the header row\n  const headerRow = document.createElement('tr');\n\n  // Column labels\n  const nameLabel = document.createElement('th');\n  nameLabel.textContent = 'Name';\n  nameLabel.style.borderTop = \"2px solid black\";\n  headerRow.appendChild(nameLabel);\n\n  const descLabel = document.createElement('th');\n  descLabel.textContent = 'Description';\n  descLabel.style.borderTop = \"2px solid black\";\n  headerRow.appendChild(descLabel);\n\n  const dateLabel = document.createElement('th');\n  dateLabel.textContent = 'Date';\n  dateLabel.style.borderTop = \"2px solid black\";\n  headerRow.appendChild(dateLabel);\n\n  const prioLabel = document.createElement('th');\n  prioLabel.textContent = 'Priority';\n  prioLabel.style.borderTop = \"2px solid black\";\n  headerRow.appendChild(prioLabel);\n\n  // Append the header row to the table\n  taskTable.appendChild(headerRow);\n\n  array.forEach((task, index) => {\n    const row = document.createElement('tr');\n\n    // Create and append columns for each value\n    const nameCell = document.createElement('td');\n    nameCell.textContent = task.name;\n    row.appendChild(nameCell);\n\n    const descCell = document.createElement('td');\n    descCell.textContent = task.description;\n    row.appendChild(descCell);\n\n    const dateCell = document.createElement('td');\n    dateCell.textContent = task.date;\n    row.appendChild(dateCell);\n\n    const prioCell = document.createElement('td');\n    prioCell.textContent = task.priority;\n    row.appendChild(prioCell);\n    \n    const deltCell = document.createElement('td');\n    deltCell.style.width = \"5vw\";\n    row.appendChild(deltCell);\n    const deltBtn = document.createElement('button');\n    deltBtn.innerHTML = \"X\";\n    deltBtn.setAttribute('n', index)\n    deltBtn.classList.add('delete-button');\n\n    deltBtn.addEventListener('click', () => {\n        deleteTask(deltBtn.getAttribute('n'));\n    })\n\n    deltCell.appendChild(deltBtn);\n\n    [nameCell, descCell, dateCell, prioCell].forEach(input => {\n        input.classList.add('table-cell')\n    })\n    // Append the row to the table\n    taskTable.appendChild(row);\n  });\n\n  // Append the table to the content\n  content.appendChild(taskTable);\n}\n\nfunction deleteTask(index) {\n    _task__WEBPACK_IMPORTED_MODULE_0__.taskArray.splice(index, 1);\n    localStorage.setItem('taskArray', JSON.stringify(_task__WEBPACK_IMPORTED_MODULE_0__.taskArray));\n    console.log(_task__WEBPACK_IMPORTED_MODULE_0__.taskArray);\n    loadHome(_task__WEBPACK_IMPORTED_MODULE_0__.taskArray);\n}\n\n\n//# sourceURL=webpack://todolist/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBtn: () => (/* binding */ addBtn)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\nconst content = document.querySelector('.content');\nconst formHolder = document.querySelector('.form-holder');\n\n\n\nconst addBtn = document.querySelector('.add-task-btn');\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_2__.loadHome)(getTaskArrayFromLocalStorage());\nfunction getTaskArrayFromLocalStorage() {\n    const taskArrayString = localStorage.getItem('taskArray');\n    return taskArrayString ? JSON.parse(taskArrayString) : [];\n  }\n\naddBtn.addEventListener('click', () => {\n    formHolder.style.visibility = \"visible\";\n    content.style.filter = \"blur(0.3vh)\";\n    (0,_form__WEBPACK_IMPORTED_MODULE_0__.createForm)();\n})\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const overviewBtn = document.querySelector('.overview-button');\n    overviewBtn.addEventListener('click', () => {\n        formHolder.style.visibility = \"hidden\";\n        (0,_home__WEBPACK_IMPORTED_MODULE_2__.loadHome)(_task__WEBPACK_IMPORTED_MODULE_1__.taskArray);\n    })\n})\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   taskArray: () => (/* binding */ taskArray)\n/* harmony export */ });\nfunction getTaskArray() {\n    const taskArrayString = localStorage.getItem('taskArray');\n    let taskArray;\n    if (taskArrayString && taskArrayString !== \"null\") {\n      taskArray = JSON.parse(taskArrayString);\n    } else {\n      taskArray = [];\n    }\n    return taskArray;\n  }\n  \n  const taskArray = getTaskArray();\n\n  class Task {\n    constructor(name, description, date, priority) {\n      this.name = name;\n      this.description = description;\n      this.date = date;\n      this.priority = priority;\n    }\n  }\n  \n\n//# sourceURL=webpack://todolist/./src/task.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;