// Создайте массив чисел и определите, является ли он строго возрастающей последовательностью.

const arr_16: number[] = [1, 5, 6, 8, 10, 12, 18]

let result_16: boolean = false

for (let i: number = 0; i < arr_16.length - 1; i++) {
    if (arr_16[i] < arr_16[i + 1]) {
        result_16 = true
    }
    else {
        result_16 = false
        break
    }
}
    console.log(result_16);