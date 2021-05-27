// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let a = +prompt(`Enter first num`);
let b = +prompt(`Enter second num`);

// let i = 0,
//     result = 0;
// if (a > 0 && b > 0) {
//     if (a > b) {
//         while (i <= a) {
//             result += (b + i);
//             i++;
//         }
//     }
//     if (a < b) {
//         while (i <= b) {
//             result += (a + i);
//             i++;
//         }
//     }
// }
// console.log(result);
// alert(result);

// let a1, b1, result = 0;

// if (a > 0 && b > 0) {
//     if (a == b) {
//         result = a + b
//     }
//     else {
//         if (a > b) {
//             a1 = b;
//             b1 = a;
//         }
//         else {
//             a1 = a;
//             b1 = b;
//         }
//         while (a1 <= b1) {
//             result += a1;
//             a1++;
//         }
//     }
// }

let temp, result = 0;

if (a > 0 && b > 0) {
    if (a == b) {
        result = a + b;
    }
    else {
        if (a > b) {
            temp = b;
            b = a;
            a = temp;

        }
        // else {
        //     temp = a;
        //     b1 = b;
        // }
        while (a <= b) {
            result += a;
            a++;
        }
    }
}
console.log(result);
alert(result);
