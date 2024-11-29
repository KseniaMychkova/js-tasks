// Создайте класс StringManipulator, который будет иметьтри метода: • reverseString(str) — разворачиваетстроку, • isPalindrome(str) — проверяет,является ли строка палиндромом, • countVowels(str) — подсчитываетколичествогласных буквв строке. 
// Входные: let manipulator = new StringManipulator(); manipulator.reverseString('hello'); → Результат: 'olleh 
// Входные: let manipulator = new StringManipulator(); manipulator.isPalindrome('madam'); → Результат: true 


interface IStringManipulator{
    reverseString(str:string):string
    isPalindrome(str:string):boolean
    countVowels(str:string):number
}

class StringManipulator {
    reverseString(str:string):string {
        return str.split('').reverse().join('')
    }

    isPalindrome(str:string):boolean{
        if(str === str.split('').reverse().join('')) return true
        return false
    }

    countVowels(str:string):number{
        return str.length
    }
}

const stringManipulator:IStringManipulator = new StringManipulator()
console.log(stringManipulator.reverseString('hello'));
console.log(stringManipulator.isPalindrome('madam'));
console.log(stringManipulator.countVowels('hschool'));
