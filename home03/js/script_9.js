// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
let a = 2, i = 1, result = "";
while (a <= 9) {
    while (i <= 10) {
        result = result + ` ${a} * ${i} =` + a * i + '; ';
        console.log(result);
        i++;
    }
    i = 1;
    a++;
}
alert(result)


// for (let a = 2; a <= 9; a++) {
//     //  for (let i = 1; i <= 10; i++) {
//     //         result = a * i;
//     //         console.log(result);
//     //     }
// }