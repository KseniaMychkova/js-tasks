// Напишите код, который сделает из массива объект [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
const arr_of_obj_9 = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }];
let obj_9 = {};
arr_of_obj_9.forEach((el) => {
    obj_9[el.name] = el.value;
});
console.log(obj_9);
