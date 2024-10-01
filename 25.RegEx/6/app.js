// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать C:\Users\Admin\Desktop\test.txt -> true C:/Users/Admin/Desktop/test.txt -> true

let way = 'C:\Users\Admin\Desktop\test.txt'

const checkWay = (way) => {
    try {
        if (/^[A-Z]\:\\[A-Z][a-z]+\\[A-Z][a-z]+\\[A-Z][a-z]+\\[a-z]+\.[a-z]{2,10}$/gm.test(way)) return true
        else throw new Error('не подходит под условия')
    } catch (error) {
        return error
    }
}
const result = checkWay(way)
console.log(result);