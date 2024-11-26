// Создайте класс TodoList, который содержит свойство tasks (список задач) и методы addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks() (получение списка задач). Создайте экземпляр класса TodoList и выполните несколько операций.

interface List{
    tasks: string[]
    addTask(str:string):void
    removeTask():void
    getTasks():void
}

class TodoList {
    tasks: string[]

    constructor (tasks: string[]){
        this.tasks = tasks
    }

    addTask(str:string){
        this.tasks.push(str)
        console.log(this.tasks);
         
    }
   
    removeTask(){
        this.tasks.pop()
        console.log(this.tasks);
    }
    
    getTasks(){
        console.log(this.tasks);
    }
}

const todoList:List = new TodoList(['ghghgh', 'fgggggh', 'ghhhh'])
console.log(todoList.addTask(prompt()));
console.log(todoList.removeTask());
console.log(todoList.getTasks());
