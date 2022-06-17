import LocalStorage from './storage.js';

class Status {
    // check mark
    static completedCheck = (i) => {
      const todos = LocalStorage.getData();
      const todo = todos[i];

      todos.forEach((item) => {
        if (item.index === todo.index) {
          if (item.completed === false) {
            item.completed = true;
          } else {
            item.completed = false;
          }
        }
      });

      // store the data to local storage
      LocalStorage.setData(todos);

      // refresh the page
      LocalStorage.reloadPage();
    }

    // clear all the completed tasks from the local storage
    static clearCompleted = () => {
      // get the data from local storage
      const todos = LocalStorage.getData();

      // filter all compelted todos where the completed status is false
      const filteredTodo = todos.filter((x) => x.completed === false);

      // stora the filtered data back to local storage with updated index
      LocalStorage.setData(LocalStorage.updateIndex(filteredTodo));

      // refresh the page
      LocalStorage.reloadPage();
    }
}

export default Status;