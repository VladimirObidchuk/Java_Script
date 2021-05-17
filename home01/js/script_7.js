// 7.Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
const sizecont = 1024;
const sizeSsd = +prompt(`Enter media volume:`);
alert(`Number of files: ${Math.trunc((sizeSsd * sizecont) / 820)}`);