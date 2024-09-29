// 15. Напишите функцию, генерирующую пароль из 8 символов с использованием замыкния. (Math.random)

function doPass() {
    let pass = ''
    return function() {

        pass += Math.round(Math.random() * 8);
        console.log(pass);
    }
}
const result = doPass();
result()
result()
result()
result()
result()