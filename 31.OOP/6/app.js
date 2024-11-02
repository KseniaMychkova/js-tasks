// Реализуйте класс, который находит полное число метров по заданному числу сантиметров. Добавьтепроверкуна вводтолькочисел. Входные: 345 →Результат: 3 метров Входные: 100 → Результат: 1 метр Входные: 99 →Результат: 0 метров Входные: 750 →Результат: 7 метров Входные: 10 →Результат: 0 метров Входные: hi → Результат: Вы ввелине число!

// class Meters {
//     sm;
//     metre;
//     constructor(sm) {
//         this.sm = sm
//     }
//     isValid = () => {
//         if (isNaN(this.sm)) return 'Вы ввели не число'
//     }

//     generateMetres = () => {
//         return this.metre = `${Math.floor(this.sm / 100)} метр(a, ов)`
//     }

// }

// const meters = new Meters(+prompt())
// console.log(meters.generateMetres());

// class Meters {
//     sm = 100;
//     metre;

//     isValid = () => {
//         if (isNaN(this.sm)) return 'Вы ввели не число'
//     }

//     generateMetres = () => {
//         return this.metre = `${Math.floor(this.sm / 100)} метр(a, ов)`
//     }

// }

// const meters = new Meters()
// console.log(meters.generateMetres());

// class Meters {
//     isValid = (sm) => {
//         if (isNaN(sm)) return 'Вы ввели не число'
//     }
//     generateMetres = (sm) => {
//         const check = this.isValid(sm)
//         let metre;
//         if (check === undefined) return metre = `${Math.floor(sm / 100)} метр(a, ов)`
//         else {
//             return check
//         }
//     }

// }

// const meters = new Meters()
// console.log(meters.generateMetres(+prompt()));

class Meters {
    sm = +prompt()


    isValid = () => {
        if (isNaN(this.sm)) return 'Вы ввели не число'
    }
    generateMetres = () => {
        const check = this.isValid()
        let metre;
        if (check === undefined) return metre = `${Math.floor(this.sm / 100)} метр(a, ов)`
        else {
            return check
        }
    }

}

const meters = new Meters()
console.log(meters.generateMetres());