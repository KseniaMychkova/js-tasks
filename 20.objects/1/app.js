// На входе пустой объект.Выполните следующие шаги: •Добавьте свойство id со значением 1.• Добавьте свойство name со значением "udemy".•Измените значение свойства name на "hschool".•Удалите свойство name из объекта.


let obj = {};
obj.id = 1;
obj.name = 'udemy';
console.log(obj);
obj.name = 'hschool';
console.log(obj);
delete obj.name;
console.log(obj);