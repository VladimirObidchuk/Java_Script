// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const coefficient = 0.83;
const sumDollar = +prompt(`Enter number of dollars:`);
alert(`Amount of euros: ${sumDollar * coefficient}`);
