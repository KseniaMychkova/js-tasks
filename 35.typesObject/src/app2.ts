// Создайте массив строк и выведите на экран все элементы, которые содержат букву 'a'.

const arrStr: string[] = ['aaa', 'gfgfh', 'bbba', "ccc"]
let newArr: string[] = []


for(let i: number = 0; i < arrStr.length; i++) {
    if(arrStr[i].includes('a')) newArr.push(arrStr[i])
}
console.log(newArr);
