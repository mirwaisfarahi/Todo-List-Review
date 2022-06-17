import Operation from './utils.js';
import Status from './status.js';
import LocalStorage from './storage.js';

import './style.css';

// select the refresh button
const refreshList = document.querySelector('#refresh-list');

// Select Todo form
const todoForm = document.querySelector('#todo-form');

// select the input of todo form
let newTask = document.querySelector('#new-task');

// select the clear all completed todos
const clearCompleted = document.querySelector('#clear-completed');

// add an event listener for the page refresh
refreshList.addEventListener('click', () => LocalStorage.reloadPage());

// add an event Listener to the form and listen to the submit button
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // call the add function
  Operation.addTodo(newTask.value);

  // clear the input box
  newTask = '';
});

// add event Listener to the clear completed todos
clearCompleted.addEventListener('click', () => Status.clearCompleted());

document.addEventListener('loadContent', Operation.renderTodo());
