"use strict";
(self["webpackChunktodo_list_review"] = self["webpackChunktodo_list_review"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ "./src/status.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



 // select the refresh button

const refreshList = document.querySelector('#refresh-list'); // Select Todo form

const todoForm = document.querySelector('#todo-form'); // select the input of todo form

let newTask = document.querySelector('#new-task'); // select the clear all completed todos

const clearCompleted = document.querySelector('#clear-completed'); // add an event listener for the page refresh

refreshList.addEventListener('click', () => _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].reloadPage()); // add an event Listener to the form and listen to the submit button

todoForm.addEventListener('submit', e => {
  e.preventDefault(); // call the add function

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(newTask.value); // clear the input box

  newTask = '';
}); // add event Listener to the clear completed todos

clearCompleted.addEventListener('click', () => _status_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearCompleted());
document.addEventListener('loadContent', _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderTodo());

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


class Status {
  // check mark
  static completedCheck = i => {
    const todos = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getData();
    const todo = todos[i];
    todos.forEach(item => {
      if (item.index === todo.index) {
        if (item.completed === false) {
          item.completed = true;
        } else {
          item.completed = false;
        }
      }
    }); // store the data to local storage

    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].setData(todos); // refresh the page

    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].reloadPage();
  }; // clear all the completed tasks from the local storage

  static clearCompleted = () => {
    // get the data from local storage
    const todos = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getData(); // filter all compelted todos where the completed status is false

    const filteredTodo = todos.filter(x => x.completed === false); // stora the filtered data back to local storage with updated index

    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].setData(_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateIndex(filteredTodo)); // refresh the page

    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].reloadPage();
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Status);

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class LocalStorage {
  // stora array data to local storage
  static setData = item => localStorage.setItem('todoList', JSON.stringify(item)); // get local storage data

  static getData = () => JSON.parse(localStorage.getItem('todoList')); // reload the page

  static reloadPage = () => {
    window.location.reload();
    return false;
  }; // update the index

  static updateIndex = todos => {
    todos.forEach((todo, i) => {
      todos[i].index = i + 1;
    });
    return todos;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorage);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.js */ "./src/status.js");




class Operation {
  // Add task function
  static addTodo = task => {
    if (task) {
      // get data from localstorage
      let todoList = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getData();

      if (todoList == null) {
        todoList = [];
      } // increment the value of index


      const index = todoList.length + 1; // create an object of index, description and completed

      const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](index, task); // push newTask object to the array

      todoList.push(todo); // add array to the local storage

      _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].setData(todoList); // refresh the window

      _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].reloadPage();
    }
  }; // renderTodo function

  static renderTodo = () => {
    // select todo list
    const todoListItems = document.querySelector('#todo-list'); // clean up tolistItems

    todoListItems.innerHTML = '';
    const list = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getData(); // loop through the todo list

    if (list) {
      list.forEach(item => {
        // check if the task is completed
        const checked = item.completed ? 'checked' : null; // create an li element with class="item"

        const li = document.createElement('li');
        li.setAttribute('class', 'item'); // if task completed then add checked class to the li to cross over the activity

        if (checked === 'checked') {
          li.classList.add('checked');
        } // add data, checkbox and delete button to li


        li.innerHTML = `<input type = "checkbox" class="checkbox" ${checked}> ${item.description} <button class="edit"><i class="fa fa-edit" aria-hidden="true"></i></button> <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>`;
        todoListItems.appendChild(li);
      });
    } // select delete from the list


    const deleteTodo = document.querySelectorAll('.delete');
    deleteTodo.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.remove(index);
      });
    }); // select edit from the list

    const edit = document.querySelectorAll('.edit');
    edit.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.edit(index);
      });
    }); // select the checkbox

    const checkmarked = document.querySelectorAll('.checkbox');
    checkmarked.forEach((btn, index) => {
      btn.addEventListener('click', () => _status_js__WEBPACK_IMPORTED_MODULE_2__["default"].completedCheck(index));
    });
  }; // edit todo

  static edit = i => {
    const todos = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getData();
    const newDescription = prompt('Please Edit Activity', todos[i].description); // store the edit to local storage

    if (newDescription) {
      todos[i].description = newDescription;
      _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].setData(todos);
    } // refresh the page


    _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].reloadPage();
  }; // remove Todo

  static remove = index => {
    // get data from local storage
    let todos = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getData(); // remove the specific item

    todos.splice(index, 1); // store back the updated array to local storage

    todos = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateIndex(todos);
    _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].setData(todos); // refresh the page

    _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].reloadPage();
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operation);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  height: 100vh;\n  background-color: #e9ecef;\n  font-family: 'Open Sans', sans-serif;\n  box-sizing: border-box;\n  padding: 130px 0;\n}\n\nmain {\n  width: 40%;\n  min-width: 450px;\n  font-size: 17px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  box-sizing: border-box;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  margin: 0 auto;\n}\n\n#header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 30px 30px 20px;\n  box-sizing: border-box;\n  margin: 0;\n}\n\n#todo-form {\n  width: 98%;\n}\n\n#new-task {\n  width: 100%;\n  font-size: 15px;\n  padding: 15px 30px;\n  border-radius: 4px;\n  border: 1px solid #e9ecef;\n  box-sizing: border-box;\n  outline: none;\n  color: #8b8c89;\n}\n\n#new-task::placeholder {\n  color: #a5a58d;\n  font-style: italic;\n}\n\n#todo-list {\n  width: 100%;\n  min-height: 67px;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  font-weight: 300;\n}\n\n.item {\n  display: flex;\n  align-items: center;\n  padding: 15px 25px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  gap: 10px;\n  position: relative;\n}\n\n.checked {\n  text-decoration: line-through;\n}\n\n.delete {\n  position: absolute;\n  right: 10px;\n}\n\n.edit {\n  position: absolute;\n  right: 30px;\n}\n\n.todo-input {\n  border: none;\n  outline: none;\n  font-size: 15px;\n  font-family: inherit;\n  align-self: flex-start;\n}\n\n.todo-task.active .todo-input {\n  text-decoration: line-through;\n}\n\n.todo-task.focus {\n  background-color: rgba(239, 211, 215, 0.2);\n}\n\n.todo-task.focus .todo-input {\n  background-color: rgba(239, 211, 215, 0.2);\n}\n\nbutton {\n  min-width: 30px;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  font-size: 1rem;\n  font-family: inherit;\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n}\n\ni {\n  font-size: 17px;\n  color: #a5a58d;\n}\n\n#clear-completed {\n  width: 100%;\n  text-align: center;\n  cursor: pointer;\n  color: #a5a58d;\n  margin: 0;\n  padding: 15px;\n  box-sizing: border-box;\n  background-color: #f5f3f4;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,aAAa;EACb,yBAAyB;EACzB,oCAAoC;EACpC,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,0CAA0C;EAC1C,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,sBAAsB;EACtB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,gCAAgC;EAChC,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,aAAa;EACb,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,8BAA8B;EAC9B,+BAA+B;AACjC","sourcesContent":["@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');\n\nbody {\n  margin: 0;\n  height: 100vh;\n  background-color: #e9ecef;\n  font-family: 'Open Sans', sans-serif;\n  box-sizing: border-box;\n  padding: 130px 0;\n}\n\nmain {\n  width: 40%;\n  min-width: 450px;\n  font-size: 17px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  box-sizing: border-box;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  margin: 0 auto;\n}\n\n#header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 30px 30px 20px;\n  box-sizing: border-box;\n  margin: 0;\n}\n\n#todo-form {\n  width: 98%;\n}\n\n#new-task {\n  width: 100%;\n  font-size: 15px;\n  padding: 15px 30px;\n  border-radius: 4px;\n  border: 1px solid #e9ecef;\n  box-sizing: border-box;\n  outline: none;\n  color: #8b8c89;\n}\n\n#new-task::placeholder {\n  color: #a5a58d;\n  font-style: italic;\n}\n\n#todo-list {\n  width: 100%;\n  min-height: 67px;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  font-weight: 300;\n}\n\n.item {\n  display: flex;\n  align-items: center;\n  padding: 15px 25px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  gap: 10px;\n  position: relative;\n}\n\n.checked {\n  text-decoration: line-through;\n}\n\n.delete {\n  position: absolute;\n  right: 10px;\n}\n\n.edit {\n  position: absolute;\n  right: 30px;\n}\n\n.todo-input {\n  border: none;\n  outline: none;\n  font-size: 15px;\n  font-family: inherit;\n  align-self: flex-start;\n}\n\n.todo-task.active .todo-input {\n  text-decoration: line-through;\n}\n\n.todo-task.focus {\n  background-color: rgba(239, 211, 215, 0.2);\n}\n\n.todo-task.focus .todo-input {\n  background-color: rgba(239, 211, 215, 0.2);\n}\n\nbutton {\n  min-width: 30px;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  font-size: 1rem;\n  font-family: inherit;\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n}\n\ni {\n  font-size: 17px;\n  color: #a5a58d;\n}\n\n#clear-completed {\n  width: 100%;\n  text-align: center;\n  cursor: pointer;\n  color: #a5a58d;\n  margin: 0;\n  padding: 15px;\n  box-sizing: border-box;\n  background-color: #f5f3f4;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=main.js.map