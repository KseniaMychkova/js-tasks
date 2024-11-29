// Создайте абстрактный класс University, которыйсодержит: • абстрактныйметод getStudentById(id: number), 
// • поле students — массивобъектовстудентов. 
// Реализуйте класс Student, который наследуется от University иреализуетметод getStudentById, возвращающий объект студента по его ID. const students = [  new Student(1, 'Alice'),  new Student(2, 'Bob'),  new Student(3, 'Charlie') ]; 
// Входные: let university = new UniversityStudent([  new Student(1, 'Alice'),  new Student(2, 'Bob') ]); university.getStudentById(1); → Результат:{id: 1, name: 'Alice' }


interface iStudents {
    id: number;
    name:string
}

interface iStudent{
    students: iStudents[];
    getStudentById(id: number):iStudents []

}


abstract class University {
    abstract getStudentById(id: number):iStudents[]
    abstract students: iStudents[]
}


class Student extends University implements iStudent {
    students: iStudents[] = [{id: 1, name:'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}]
    getStudentById(id: number):iStudents [] {
        let result: iStudents [] = []
        this.students.forEach((el:iStudents) =>{
            if(el.id === id)
                result.push(el)
        })
        return result
    }
}

const student = new Student()
console.log(student.getStudentById(3));
console.log(student.getStudentById(1));
console.log(student.getStudentById(2));
