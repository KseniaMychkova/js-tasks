// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо отфильтровать значения и оставить только те, где длина строк до 2 символов. [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

//1 способ
// function doArr(arr) {
//     const result = arr.filter(function(el) {
//         if (el.length < 3) return true
//     })
//     return result
// }

// const result_doArr = doArr(["by", "belarus", "de", "ru", "germany"]);
// console.log(result_doArr);


//2 способ
const doArr = (testArr) => {
    let newArr = []
    testArr.forEach((el) => el.length < 3 ? newArr.push(el) : null);
    return newArr
}

const result = doArr(['by', 'belarus', 'de', 'ru', 'germany']);
console.log(result);