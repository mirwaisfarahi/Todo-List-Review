import Todo from './todo.js';
import LocalStorage from './storage.js';
import Status from './status.js';

class Operation {
  // Add task function
  static addTodo = (task) => {
    if (task) {
      // get data from localstorage
      let todoList = LocalStorage.getData();
      if (todoList == null) {
        todoList = [];
      }

      // increment the value of index
      const index = todoList.length + 1;

      // create an object of index, description and completed
      const todo = new Todo(index, task);

      // push newTask object to the array
      todoList.push(todo);

      // add array to the local storage
      LocalStorage.setData(todoList);

      // refresh the window
      LocalStorage.reloadPage();
    }
  }

  // renderTodo function
  static renderTodo = () => {
    // select todo list
    const todoListItems = document.querySelector('#todo-list');

    // clean up tolistItems
    todoListItems.innerHTML = '';

    const list = LocalStorage.getData();

    // loop through the todo list
    if (list) {
      list.forEach((item) => {
        // check if the task is completed
        const checked = item.completed ? 'checked' : null;

        // create an li element with class="item"
        const li = document.createElement('li');
        li.setAttribute('class', 'item');

        // if task completed then add checked class to the li to cross over the activity
        if (checked === 'checked') {
          li.classList.add('checked');
        }

        // add data, checkbox and delete button to li
        li.innerHTML = `<input type = "checkbox" class="checkbox" ${checked}> ${item.description} <button class="edit"><i class="fa fa-edit" aria-hidden="true"></i></button> <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>`;

        todoListItems.appendChild(li);
      });
    }

    // select delete from the list
    const deleteTodo = document.querySelectorAll('.delete');
    deleteTodo.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.remove(index);
      });
    });

    // select edit from the list
    const edit = document.querySelectorAll('.edit');
    edit.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.edit(index);
      });
    });

    // select the checkbox
    const checkmarked = document.querySelectorAll('.checkbox');
    checkmarked.forEach((btn, index) => {
      btn.addEventListener('click', () => Status.completedCheck(index));
    });
  }

  // edit todo
  static edit = (i) => {
    const todos = LocalStorage.getData();
    const newDescription = prompt('Please Edit Activity', todos[i].description);

    // store the edit to local storage
    if (newDescription) {
      todos[i].description = newDescription;
      LocalStorage.setData(todos);
    }

    // refresh the page
    LocalStorage.reloadPage();
  }

  // remove Todo
  static remove = (index) => {
    // get data from local storage
    let todos = LocalStorage.getData();

    // remove the specific item
    todos.splice(index, 1);

    // store back the updated array to local storage
    todos = LocalStorage.updateIndex(todos);
    LocalStorage.setData(todos);

    // refresh the page
    LocalStorage.reloadPage();
  }
}

export default Operation;