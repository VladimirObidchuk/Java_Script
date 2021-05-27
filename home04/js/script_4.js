// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

let selectFigur = +prompt(`Select a shape (1 - square; 2 - rectangle)`);
let getLenght = getWight = '';
if (selectFigur === 1) {
    getLenght = +prompt(`Enter the lenght`);
    getWight = 0;
}
else {
    getLenght = +prompt(`Enter the lenght`);
    getWight = +prompt(`Enter the wight`);
}
function calcArea(n1, n2) {
    let getCalcArea = 1;
    if (n1 > 0 && n2 == 0) {
        getCalcArea = n1 ** 2;
    }
    if (n1 > 0 && n2 > 0) {
        getCalcArea = n1 * n2;
    }
    return getCalcArea;
}
alert(calcArea(getLenght, getWight));