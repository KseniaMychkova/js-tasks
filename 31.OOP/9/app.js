// 9. Реализуйте класс для пересчета временного интервала, заданного в минутах, в величину, выраженнуювчасахиминутах. Входные: 150 минут →Результат: 2 часа 30 минут Входные: 240 минут→Результат:4 часа 0минут


// class Hour {
//     minutes
//     constructor(min) {
//         this.minutes = min
//     }
//     generateMin = () => {
//         const hour = Math.trunc(this.minutes / 60)
//         const min = this.minutes % 60
//         let result = `${hour} час(а)(ов) ${min} минут`
//         return result
//     }
// }

// const hour = new Hour(240)
// console.log(hour.generateMin());


// class Hour {
//     minutes = 240

//     generateMin = () => {
//         const hour = Math.trunc(this.minutes / 60)
//         const min = this.minutes % 60
//         let result = `${hour} час(а)(ов) ${min} минут`
//         return result
//     }
// }

// const hour = new Hour()
// console.log(hour.generateMin());


class Hour {
    generateMin = (minutes) => {
        return `${Math.trunc(minutes / 60)} час(а)(ов) ${minutes % 60} минут`
    }
}

const hour = new Hour()
console.log(hour.generateMin(240));