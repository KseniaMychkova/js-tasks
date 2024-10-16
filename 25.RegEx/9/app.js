// 9. Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать регулярное выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать "1234“ -> true "12345“ -> false "a234“ -> false

let pin = '112344'

const checkPin = (pin) => {
    try {
        if (/[0-9]{4,6}/gm.test(pin) && pin.length === 4 || pin.length === 6) return true
        else throw new Error('false')
    } catch (error) {
        return error
    }
}
const result = checkPin(pin)
console.log(result);