// Создайте класс TodoList, который содержит свойство tasks (список задач) и методы addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks() (получение списка задач). Создайте экземпляр класса TodoList и выполните несколько операций.
class TodoList {
    tasks;
    constructor(tasks) {
        this.tasks = tasks;
    }
    addTask(str) {
        this.tasks.push(str);
        console.log(this.tasks);
    }
    removeTask() {
        this.tasks.pop();
        console.log(this.tasks);
    }
    getTasks() {
        console.log(this.tasks);
    }
}
const todoList = new TodoList(['ghghgh', 'fgggggh', 'ghhhh']);
console.log(todoList.addTask(prompt()));
console.log(todoList.removeTask());
console.log(todoList.getTasks());
