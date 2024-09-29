// 4. На вход подается число n– количество элементов массива. Необходимо заполнить массив случайными элементами вдиапазоне 0<n<100. Добавить проверки наввод n.


let n = prompt('Введите количество элементов массива');

const doArr = () => {
    try {
        let arr = [];
        if (isNaN(n)) throw new Error('Вы ввели не число');
        for (let i = 0; i < n; i++) {
            arr.push(Math.round(Math.random() * 100));
        }
        return arr

    } catch (error) {
        return error
    }



}
const result = doArr();
console.log(result);