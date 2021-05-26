
// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

const num1 = +prompt(`Enter five-digit number`);
let num2, num3, num4, num5, num6;

num6 = num1 % 10;
num5 = (num1 % 100 - num6) / 10;
num4 = ((num1 % 1000) - (num1 % 100)) / 100;
num3 = ((num1 % 10000) - (num1 % 1000)) / 1000;
num2 = ((num1 % 100000) - (num1 % 10000)) / 10000;

result = (num6 === num2 && num3 === num5) ? alert(`Number is palindrome`) : alert(`Number is't palindrome`);
