// 5. Создайте родительский класс Number, который будет хранить число.Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121)→ Результат: false
// Входные: new PalindromeChecker(10)→ Результат: false
// Входные: new PalindromeChecker(12321)→ Результат: true

// class Number {
//     num = 12321
// }

// class PalindromeChecker extends Number {
//     checkPalindrom = () => {
//         const str = String(this.num)
//         if (String(this.num) === str.split('').reverse().join('')) return true
//         else return false
//     }
// }

// const palindromeChecker = new PalindromeChecker()
// console.log(palindromeChecker.checkPalindrom());


class Number {
    constructor(num) {
        this.num = num
    }

}

class PalindromeChecker extends Number {
    constructor(num) {
        super(num)
    }

    checkPalindrom = () => {
        const str = String(this.num)
        if (String(this.num) === str.split('').reverse().join('')) return true
        else return false
    }
}

const palindromeChecker = new PalindromeChecker(123)
console.log(palindromeChecker.checkPalindrom());