// 7. Напишите программу, вычисляющую объем куба и площадь его полной поверхности, по введённомузначениюдлиныребра.
// Используйтеформулы:V=a^3,S=6∙a^2(V = a3, S = 6∙a2). 
// Входные: длина ребра3→Результат:Объем=27,Площадь=54 
// Входные: длина ребра5→Результат:Объем=125, Площадь=150

let a = 5;
let V = a ** 3;
let S = 6 * a ** 2;

console.log('Объем=', V, 'Площадь=', S);