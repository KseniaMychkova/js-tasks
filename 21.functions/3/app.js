// 3. Напишите функцию, которая принимает строку в маленьком регистре и возаращает строку, где каждое слово начинается с большого регистра hschool company -> Hschool Company 

function doUpper(a) {
    let arr = a.split(' ');
    let arrNew = []
    for (let i = 0; i < arr.length; i++) {
        arrNew.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return arrNew.join(' ');
}
let str = prompt();
const result = doUpper(str);
console.log(result);