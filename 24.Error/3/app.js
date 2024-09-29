// 3. Дан массив.Вывести те элементы массива, id которых– четное значение.Добавить проверки
// [{ "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 }, { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 }, { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 }, { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 }, { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }]

let array = [{ "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 }, { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 }, { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 }, { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 }, { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }];

function checkArr(arr) {
    let newArr = []
    arr.forEach((el, i) => {
        if (el.id % 2 === 0) newArr.push(el)
    })
    return newArr
}
const result = checkArr(array);
console.log(result);