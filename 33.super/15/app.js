// Создайте класс StringCompressor с методом compress(str), который сжимает строку, заменяя последовательности одинаковых символов на символ и количество повторений. Например, "aaabbc" превращается в "a3b2c1".

class StringCompressor {
    compress(str) {
        // count = 0
        let obj = {}
        for (let i = 0; i < str.length; i++) {
            if (obj[str[i]]) {
                obj[str[i]] += 1
            } else {
                obj[str[i]] = 1
            }

        }
        const result = Object.entries(obj).join('').split(',').join('')
        return result
    }
}

const stringCompressor = new StringCompressor()
console.log(stringCompressor.compress("aaabbc"));