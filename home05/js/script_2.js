// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби

const fractions = {
    n1: 2,
    d1: 3,
    n2: 3,
    d2: 5
}

function checkCommonDivisor(nd1, nd2) {
    let divider = mind = maxd = 0;
    mind = math.min(nd1, nd2);
    maxd = math.max(nd1, nd2);
    for (i = mind; i > 0; i--) {
        if (maxd % i == 0 && mind == 0) {
            deliver = i;
            break;
        }
    }
    return divider;
}
// Функция сложения 2-х объектов-дробей;
let denominatorSum = 0;
if (d1 !== d2) {
    commonDivisor = checkCommonDivisor(d1, d2);
    denominatorSum = d1 * d2 / commonDivisor;
    dividerSum = n1 * (denominatorSum / d1) + n2 * (denominatorSum / d2);
    alert(`Addition of fractions = ${dividerSum}+'/'+${denominatorSum}`);
}
else {
    denominatorSum = d1;
    dividerSum = n1 + n2;
    alert(`Addition of fractions = ${dividerSum}+'/'+${denominatorSum}`);
}
// Функция вычитания 2-х объектов-дробей;

if (d1 !== d2) {
    commonDivisor = checkCommonDivisor(d1, d2);
    denominatorSum = d1 * d2 / commonDivisor;
    dividerSum = n1 * (denominatorSum / d1) - n2 * (denominatorSum / d2);
    alert(`Subtraction of fractions = ${dividerSum}+'/'+${denominatorSum}`);
}
else {
    denominatorSum = d1;
    dividerSum = n1 - n2;
    alert(`Subtraction of fractions = ${dividerSum}+'/'+${denominatorSum}`);
}
//Функция умножения 2-х объектов-дробей;

denominatorSum = d1 * d2;
dividerSum = n1 * n2;
alert(`Multiplication of fractions = ${dividerSum}+'/'+${denominatorSum}`);

// Функция деления 2-х объектов-дробей;

denominatorSum = d1 * n2;
dividerSum = n1 * d2;
alert(`Division of fractions = ${dividerSum}+'/'+${denominatorSum}`);