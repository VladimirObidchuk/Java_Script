// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

let c = '';
let num1 = num2 = sumNum = 0, mathSumbol = '';
while (c !== 'N') {
    num1 = +prompt(`Enter first number`);
    num2 = +prompt(`Enter second number`);
    mathSumbol = prompt(`Enter second sumbol`);
    switch (mathSumbol) {
        case '+': sumNum = num1 + num2; break;
        case '-': sumNum = num1 - num2; break;
        case '/': sumNum = num1 / num2; break;
        case '*': sumNum = num1 * num2;
    }
    alert(sumNum);
    c = prompt('Хотите ли вы решить еще один пример? Y/N');

};

