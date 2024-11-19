// Напишите программу, которая находит и выводит наиболее часто встречающийся символ в заданной строке.
const str_14 = 'aabbccccccccdfff';
let object = {};
for (let i = 0; i < str_14.length; i++) {
    if (object[str_14[i]]) {
        object[str_14[i]] += 1;
    }
    else {
        object[str_14[i]] = 1;
    }
}
let test_num = 0;
let res_key = '';
for (let el in object) {
    if (object[el] > test_num) {
        test_num = object[el];
        res_key = el;
    }
}
console.log(res_key);
