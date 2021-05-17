// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
// const userName = prompt(`Enter your name:`);
// alert(`Hellow, ${userName}`);

// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
// const curreenthYear = 2021;
// const birthYear = +prompt(`Enter your year of birth:`);
// alert(`Your age:${curreenthYear - birthYear}`);

// // 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
// const sideLength = +prompt(`Enter square side length:`);
// alert(`Perimeter of the square: ${4 * sideLength}`);

// 4.Запросите у пользователя радиус окружности и выведите площадь такой окружности.
// const PI = 3.1415;
// const circleRadius = +prompt(`Enter circle radius:`);
// alert(`Area of a circle: ${PI * (circleRadius ** 2)}`);

// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
// const distanceWay = +prompt(`Enter distance way:`);
// const travelTime = +prompt(`Enter travel time:`);
// alert(`Required travel speed: ${distanceWay / travelTime} km / h`);

// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
// const coefficient = 0.83;
// const sumDollar = +prompt(`Enter number of dollars:`);
// alert(`Amount of euros: ${sumDollar * coefficient}`);

// 7.Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
// const sizecont = 1024;
// const sizeSsd = +prompt(`Enter media volume:`);
// alert(`Number of files: ${Math.trunc((sizeSsd * sizecont) / 820)}`);

// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
// const sumManey = +prompt(`Enter the amount of money in the wallet:`);
// const numChokolat = +prompt(`Enter number of chocolates:`);
// alert(`Number of chocolates: ${Math.trunc(sumManey / numChokolat)},
// Task: ${sumManey - (numChokolat * Math.trunc(sumManey / numChokolat))}`);

// 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
// const num = +prompt(`Enter three digit number:`);
// const firstNum = num % 10;
// let secondTemp = num % 100;
// alert(`Revert three digit number: ${(firstNum * 100) + (((secondTemp - firstNum) / 10) * 10) + ((num - secondTemp) / 100)}`);

// 10. Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
const summAmount = +prompt(`Enter deposit amount:`);
const Rate = +prompt(`Enter deposit rate:`);
const numberMonths = +prompt(`Enter number of months:`);
alert(`Deposit amount: ${summAmount}
Deposit term: ${numberMonths}
Interest accrued at the rate: ${parseFloat((((summAmount * (Rate / 100)) / 12) * numberMonths)).toFixed(2)}
Accrued taxes on interest: ${parseFloat(((((summAmount * (Rate / 100)) / 12) * numberMonths) * 0.195)).toFixed(2)}
Accrued interest at a tax-inclusive rate of 19.5%: ${parseFloat((((summAmount * (Rate / 100)) / 12) * numberMonths) - ((((summAmount * (Rate / 100)) / 12) * numberMonths) * 0.195)).toFixed(2)}
End of month amount: ${parseFloat(summAmount + (((summAmount * (Rate / 100)) / 12) * numberMonths) - ((((summAmount * (Rate / 100)) / 12) * numberMonths) * 0.195)).toFixed(2)}`);

