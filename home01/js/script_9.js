// 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
const num = +prompt(`Enter three digit number:`);
const firstNum = num % 10;
let secondTemp = num % 100;
alert(`Revert three digit number: ${(firstNum * 100) + (((secondTemp - firstNum) / 10) * 10) + ((num - secondTemp) / 100)}`);