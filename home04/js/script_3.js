// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

let num1 = prompt(`Enter number`);
let num2 = prompt(`Enter number`);
let num3 = prompt(`Enter number`);

function sumNumMerger(n1, n2, n3) {
    return n1 + n2 + n3;
}
alert(sumNumMerger(num1, num2, num3));