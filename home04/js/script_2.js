// Написать функцию, которая вычисляет факториал переданного ей числа.

const numFactorial = +prompt(`Enter num `);

function getFactorial(n1) {
    if (n1 < 1) { return "1"; }
    let result = 1;
    for (let i = 1; i <= n1; i++) {
        result *= i;
        console.log(result);
    }
    return result;
}
alert(getFactorial(numFactorial));