// Создайте массив объектов, представляющих сотрудников, с полями "имя" и "зарплата". Найдите среднюю зарплату всех сотрудников.
const employee = [{
        id: 1,
        name: 'test1',
        salary: 100
    },
    {
        id: 2,
        name: 'test2',
        salary: 200
    },
    {
        id: 3,
        name: 'test3',
        salary: 300
    },
];
let sum_22 = 0;
let count_22 = 0;
for (let i = 0; i < employee.length; i++) {
    sum_22 += employee[i].salary;
    count_22++;
}
console.log(sum_22 / count_22);
