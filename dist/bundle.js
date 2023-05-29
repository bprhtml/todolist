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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createForm: () => (/* binding */ createForm)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\nconst content = document.querySelector('.form-holder');\n\nfunction createForm() {\n    const form = document.createElement('form');\n    form.classList.add('form');\n\n    form.style.width = \"50vw\";\n    const name = document.createElement('input');\n    const desc = document.createElement('input');\n    const date = document.createElement('input');\n    const prio = document.createElement('input');\n    const prlb = document.createElement('label');\n    name.placeholder = \"Task...\";\n    desc.placeholder = \"Description...\";\n    date.type = \"date\";\n    prio.type = \"checkbox\";\n    prio.style.marginInline = \"3vw\";\n    prio.id = \"prCh\";\n    prlb.innerHTML = \"Prioritise?\";\n    prlb.htmlFor = \"prCh\";\n\n    [name, desc, date].forEach(input => {\n        input.classList.add(\"form-input\"); \n        form.appendChild(input);\n    });\n\n    const checkboxCont = document.createElement('div');\n    checkboxCont.classList.add('form-checkbox');\n    form.appendChild(checkboxCont);\n    checkboxCont.appendChild(prlb);\n    checkboxCont.appendChild(prio);\n\n\n\n    const btnCont = document.createElement('div');\n    btnCont.classList.add(\"form-buttons\")\n    form.appendChild(btnCont)\n\n    const submit = document.createElement('button');\n    submit.innerHTML = \"Add task!\";\n    submit.classList.add(\"submit-button\");\n    btnCont.appendChild(submit);\n\n    const cancel = document.createElement('button');\n    cancel.innerHTML= \"Cancel\";\n    cancel.classList.add(\"submit-button\");\n    btnCont.appendChild(cancel);\n\n    content.appendChild(form);\n\n    cancel.addEventListener('click', (e) => {\n        e.preventDefault()\n        content.style.visibility = 'hidden';\n    })\n\n    submit.addEventListener('click', (e) => {\n        e.preventDefault();\n        const task = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(name.value, desc.value, date.value, prio.value);\n        _task__WEBPACK_IMPORTED_MODULE_0__.taskArray.push(task);\n        console.log(_task__WEBPACK_IMPORTED_MODULE_0__.taskArray)\n        content.style.visibility = 'hidden'\n    }\n    )\n}\n\n//# sourceURL=webpack://todolist/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBtn: () => (/* binding */ addBtn)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nconst content = document.querySelector('.content');\nconst formHolder = document.querySelector('.form-holder')\n\n\nconst addBtn = document.createElement('button');\naddBtn.classList.add('add-task-btn');\naddBtn.innerHTML = \"Add task!\";\ncontent.appendChild(addBtn);\n\naddBtn.addEventListener('click', () => {\n    formHolder.style.visibility = \"visible\";\n})\n\ncontent.style.backgroundColor = 'red';\ncontent.style.width = \"100vw\";\ncontent.style.height = \"90vh\";\n\n(0,_form__WEBPACK_IMPORTED_MODULE_0__.createForm)();\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   taskArray: () => (/* binding */ taskArray)\n/* harmony export */ });\nlet taskArray = [];\n\nclass Task {\n    constructor (name, description, date, priority) {\n        this.name = name;\n        this.description = description;\n        this.date = date;\n        this.priority = priority;\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/task.js?");

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