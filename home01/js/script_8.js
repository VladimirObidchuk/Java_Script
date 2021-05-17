// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
const sumManey = +prompt(`Enter the amount of money in the wallet:`);
const numChokolat = +prompt(`Enter number of chocolates:`);
alert(`Number of chocolates: ${Math.trunc()},
Task: ${sumManey - (numChokolat * Math.trunc(sumManey / numChokolat))}`);