// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

let num1 = +prompt(`Enter initial range number`);
let num2 = +prompt(`Enter finite number of range`);

function getNumberIsPerfec(n2, n3) {
    let result = '';
    if (n2 > n3) {
        let temp = n3;
        n3 = n2;
        n2 = temp;
    }
    for (let i = n2; i < n3; i++) {
        if (checkNumberIsPerfect(i) == true) {
            result += i + ', ';
            console.log(result);
        }
    }
}
function checkNumberIsPerfect(n1) {
    let result = 0;
    for (let i = 1; i < n1; i++) {
        if (n1 % i == 0) {
            result += i;
            console.log(i);
        }
    }
    if (result == n1) {
        return true;
    }
    return false;
}
alert(getNumberIsPerfec(num1, num2));