// 7. Пользователь вводит три числа: a, b и c. Напишите класс, которая определяет, является ли тройка чиселсторонами треугольника. Для этого следует проверитьследующиеусловия: 1. Суммадвухсторондолжнабытьбольшетретьейстороны.(a+b>c,a+c>b,b+c>a) 2. Если это так,то далее определить,какой тип треугольника можно построить: • Есливсетристороныравны,выведитеРавностороннийтреугольник. • Еслидвестороныравны,выведитеРавнобедренныйтреугольник. • Есливсетристороныразные,выведитеРазностороннийтреугольник. 3. Если треугольник не существует (условие не выполняется), выведите Треугольник не существует. Добавьтепроверкуна вводтолькочисел. Входные: 5, 5, 5 → Результат: Равностороннийтреугольник Входные: 3, 4, 5 → Результат: Разностороннийтреугольник Входные: 6, 6, 10 → Результат: Равнобедренный треугольник Входные: 1, 2, 3 → Результат: Треугольникне существует Входные: 10, 15, 25 → Результат: Треугольник не существует Входные: 7, 7, 14 → Результат: Треугольник не существует

// class Triangle {
//     a = 7;
//     b = 7;
//     c = 14;

//     isValid = () => {
//         if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c)) return 'Вы ввели не число'
//     }
//     checkTriangle = () => {
//         const valid = this.isValid()
//         if (valid === undefined) {
//             if (this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a) {
//                 if (this.a === this.b && this.b === this.c) return 'Треугольник равносторонний'
//                 if (this.a === this.b || this.b === this.c || this.a === this.c) return 'Треугольник равнобедренный'
//                 if (this.a !== this.b || this.b !== this.c || this.a !== this.c) return 'Треугольник разносторонний'
//             } else {
//                 return 'Треугольник не существует'
//             }
//         } else {
//             return valid
//         }
//     }
// }
// const triangle = new Triangle()
// console.log(triangle.checkTriangle());



// class Triangle {
//     a;
//     b;
//     c;
//     constructor(a, b, c) {
//         this.a = a
//         this.b = b
//         this.c = c
//     }

//     isValid = () => {
//         if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c)) return 'Вы ввели не число'
//     }
//     checkTriangle = () => {
//         const valid = this.isValid()
//         if (valid === undefined) {
//             if (this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a) {
//                 if (this.a === this.b && this.b === this.c) return 'Треугольник равносторонний'
//                 if (this.a === this.b || this.b === this.c || this.a === this.c) return 'Треугольник равнобедренный'
//                 if (this.a !== this.b || this.b !== this.c || this.a !== this.c) return 'Треугольник разносторонний'
//             } else {
//                 return 'Треугольник не существует'
//             }
//         } else {
//             return valid
//         }
//     }
// }
// const triangle = new Triangle(7, 7, 14)
// console.log(triangle.checkTriangle());




class Triangle {
    checkTriangle = (a, b, c) => {
        if (isNaN(a) || isNaN(b) || isNaN(c)) return 'Вы ввели не число'
        else {
            if (a + b > c && a + c > b && b + c > a) {
                if (a === b && b === c) return 'Треугольник равносторонний'
                if (a === b || b === c || a === c) return 'Треугольник равнобедренный'
                if (a !== b || b !== c || a !== c) return 'Треугольник разносторонний'
            } else {
                return 'Треугольник не существует'
            }
        }
    }
}

const triangle = new Triangle()
console.log(triangle.checkTriangle(7, 7, 14));