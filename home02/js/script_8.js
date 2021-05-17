// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

const square = +prompt(`Perimeter of a square`);
const circle = +prompt(`Enter Circumference`);
numSquare = square / 4;
numCircle = circle / 3.1415;
alert(circle <= square ? alert(`The circle will fit into the square`) : alert(`The circle will not fit into the square`));