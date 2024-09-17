// 7. Напишитефункцию, которая принимает строку в виде пароля и проверяет, является ли этот пароль надежным. Надежный пароль должен содержать хотя бы одну заглавную букву, цифры, аегодлинадолжнабыть не менее8символов

let pass = 'Dc1255';

const checkPass = (testPass) => {
    const arrPass = testPass.split('');

    const result_some = arrPass.some((el) => {
        const upperLetter = 'QWERTYUIOPASDFGHJKLZXCVBNM'
        if (!upperLetter.includes(el)) {
            return false
        }
        return true
    })

    const result_somelowLetter = arrPass.some((el) => {
        const lowerLetter = 'qwertyuiopasdfghjklzxcvbnm';
        if (!lowerLetter.includes(el)) {
            return false
        }
        return true
    })
    const result_someNum = arrPass.some((el) => {
        if (isNaN(el)) {
            return false
        }
        return true
    })

    return result_some === true && result_somelowLetter === true && result_someNum === true && testPass.length >= 8 ? 'Пароль надежный' : 'Пароль не надежный'
}

const globalResult = checkPass(pass);
console.log(globalResult);