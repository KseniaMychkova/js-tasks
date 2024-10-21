// У вас есть объект, представляющий собой список студентов и их оценок (например, { Анна: 95, Иван: 88, Мария: 92 }). Используйте Object.values() и filter() для фильтрациистудентов, у которых оценки вышеопределенного порога.

const studentsCard = { Анна: 95, Иван: 88, Мария: 92 }

const filterStudents = () => {
    const studentsArr = Object.entries(studentsCard)
    const testValue = (+prompt())
    const result = []

    studentsArr.forEach(el => {
        if (el[1] > testValue) result.push(el)
    })
    return result
}
console.log(filterStudents());