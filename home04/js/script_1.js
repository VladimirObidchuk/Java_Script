// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

let num1 = +prompt(`Enter first num`);
let num2 = +prompt(`Enter second num`);

function getCompare() {
    if (num1 === num2) {
        return '0';
    }
    if (num1 > num2) {
        return '1';
    }
    else { return '-1'; }
}

alert(getCompare(num1, num2));
