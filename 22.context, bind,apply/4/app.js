// Напишите функцию, которая принимает массив строк и находит строку с максимальной длиной. Добавить проверки

const doLength = (a) => {
    let result = '';
    for (let i = 0; i < a.length; i++) {
        result.length < a[i].length ? result = a[i] : null;
    }
    return result

}
const maxStr = doLength(['jhgjh', 'hfhfh', 'hfghjojiju54545g']);
console.log(maxStr);