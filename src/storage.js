class LocalStorage {
    // stora array data to local storage
    static setData = (item) => localStorage.setItem('todoList', JSON.stringify(item));

    // get local storage data
    static getData = () => JSON.parse(localStorage.getItem('todoList'));

    // reload the page
    static reloadPage = () => {
      window.location.reload();
      return false;
    }

    // update the index
    static updateIndex = (todos) => {
      todos.forEach((todo, i) => {
        todos[i].index = i + 1;
      });

      return todos;
    }
}

export default LocalStorage;