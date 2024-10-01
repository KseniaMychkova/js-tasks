// 5. На вход подается строка в виде url. Необходимо написать регулярное выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать

let url = 'https://hostiq.ua/blog/what-is-url/'

const checkUrl = (url) => {
    try {
        if (/^https\:\/\/[a-zA-Z0-9\_\-]+\.[a-z]{2,6}\/[a-z0-9\-\_]+\/[a-z0-9\-\_]+\//gm.test(url)) return true
        else throw new Error('не подходит по д условия')
    } catch (error) {
        return error
    }
}
const result = checkUrl(url)
console.log(result);