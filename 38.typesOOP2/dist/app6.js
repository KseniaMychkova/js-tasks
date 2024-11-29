// Создайте интерфейс iValidation, который будет описывать методы для проверки: isValidEmail(), isValidDate(), isValidPath(). Создайте класс Validation, который реализует интерфейс iValidation. Класс будет иметь публичные методы: isValidEmail(), isValidDate(), isValidPath(). Конструктор класса Validation должен приниматьпараметры email, date, path иинициализироватьихкак полякласса.
// Входные: let validation = new Validation('example@mail.com', '2023-09-10', '/usr/local/bin'); validation.isValidEmail(); → Результат: true
// Входные: let validation = new Validation('invalid-email', '2023-0910', '/usr/local/bin'); validation.isValidEmail(); → Результат: false
class Validation {
    email;
    date;
    path;
    constructor(email, date, path) {
        this.email = email;
        this.date = date;
        this.path = path;
    }
    isValidEmail() {
        if (/[a-zA-Z0-9\!\#\$\%\^\&\*\(\)\_\-\=\+]+@+[a-z]+.+[a-z]+/gm.test(this.email)) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
    isValidDate() {
        if (/[0-9][0-9][0-9][0-9]\-[0-9][0-9]\-[0-9][0-9]/gm.test(this.date)) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
    isValidPath() {
        if (/^\/[a-z]+\/[a-z]+\/[a-z]+/gm.test(this.path)) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
const validation = new Validation('example@mail.com', '2023-09-10', '/usr/local/bin');
validation.isValidEmail();
validation.isValidDate();
validation.isValidPath();
