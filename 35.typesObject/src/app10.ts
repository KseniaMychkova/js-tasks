// Создайте массив строк и преобразуйте каждую строку в новую строку, содержащую только гласные буквы.


const arr_str_10: string[] = ['hanna', 'hschool', 'tim', 'ksenia']
const letter1: string[] = ['e', 'y', 'u', 'i', 'o', 'a']
const letter: string[] = ['q', 'w', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

let result_map_10 = arr_str_10.map(el => {
    return el.replaceAll(/[qwrtpsdfghjklzxcvbnm]/gm, '')
    
})
console.log(result_map_10);


