// Создайте класс Student, который содержит свойства name (имя) и age (возраст). Инициализация свойств name, age происходит с помощью экземпляра класса. Создайте экземплярклассаStudentивыведитеихсвойства.

interface Person_2{
    name: string
    age: number
}
class Students {
    name:string = 'Kseniya';
    age:number = 34
}

const students_2: Person_2 = new Students()
console.log(students_2.age, students_2.name);
