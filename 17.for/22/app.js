// Дан массив с названиями дней недели ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]. 
// Вам нужно с помощью цикла for пройти по каждому элементу массива и с помощью конструкции switch определить, 
// будний это день или выходной, а затем вывести соответствующуюинформациюнаэкран.

const arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
        case 'Monday':
            console.log(`${arr[i]} будни`);
            break;
        case 'Tuesday':
            console.log(`${arr[i]} будни`);
            break;
        case 'Wednesday':
            console.log(`${arr[i]} будни`);
            break;
        case 'Thursday':
            console.log(`${arr[i]} будни`);
            break;
        case 'Friday':
            console.log(`${arr[i]} будни`);
            break;
        case 'Saturday':
            console.log(`${arr[i]} выходные`);
            break;
        case 'Sunday':
            console.log(`${arr[i]} выходные`);
            break;
    }

}