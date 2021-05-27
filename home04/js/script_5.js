
// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

let num1 = +prompt(`Enter number`);

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
if (!checkNumberIsPerfect(num1)) {
    alert(`${num1} -Not Perfect`);
}
else {
    alert(`${num1} -  perfect`);

}