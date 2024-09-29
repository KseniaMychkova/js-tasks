// 3. Напишите функцию, которая принимает строку в маленьком регистре и возаращает строку, где каждое слово начинается с большого регистра hschool company -> Hschool Company 

// 1 способ

// function doUpper(a) {
//     let arr = a.split(' ');
//     let arrNew = []
//     for (let i = 0; i < arr.length; i++) {
//         arrNew.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
//     }
//     return arrNew.join(' ');
// }
// let str = prompt();
// const result = doUpper(str);
// console.log(result);


// 2 способ

const doUpperStr = (testStr) => {
    let arr = testStr.split(' ');
    let newArr = [];
    arr.forEach((el, i) => {
        newArr.push(el[0].toUpperCase() + el.slice(1))
    });
    return newArr.join(' ');
}
const result = doUpperStr('hschool company');
console.log(result);