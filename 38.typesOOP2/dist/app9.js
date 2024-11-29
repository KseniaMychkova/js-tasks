// Создайтеинтерфейс iPwd, который описываетметод showPwd.Реализуйтекласс Pwd, который будетсодержатьметод showPwd,возвращающийслучайносгенерированныйпарольиз8цифр. Создайте класс Validation, которыйнаследуется от Pwd ипереопределяет метод showPwd, вызывая метод родительского класса через super и дополняя его выводом результата вконсоль.
class Pwd {
    showPwd() {
        let arr = [];
        for (let i = 0; i < 8; i++) {
            arr.push(Math.round(Math.random() * 9));
        }
        return arr.join('');
    }
}
class Validation_2 extends Pwd {
    showPwd() {
        let result_9 = super.showPwd();
        return result_9;
    }
}
const validation_2 = new Validation_2();
console.log(validation_2.showPwd());
