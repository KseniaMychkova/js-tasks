// Создайте класс StringManipulator, который будет иметьтри метода: • reverseString(str) — разворачиваетстроку, • isPalindrome(str) — проверяет,является ли строка палиндромом, • countVowels(str) — подсчитываетколичествогласных буквв строке. 
// Входные: let manipulator = new StringManipulator(); manipulator.reverseString('hello'); → Результат: 'olleh 
// Входные: let manipulator = new StringManipulator(); manipulator.isPalindrome('madam'); → Результат: true 
class StringManipulator {
    reverseString(str) {
        return str.split('').reverse().join('');
    }
    isPalindrome(str) {
        if (str === str.split('').reverse().join(''))
            return true;
        return false;
    }
    countVowels(str) {
        return str.length;
    }
}
const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString('hello'));
console.log(stringManipulator.isPalindrome('madam'));
console.log(stringManipulator.countVowels('hschool'));
