// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR(0.82), UAN(27,57) или AZN(1,70), и получает в ответ соответствующую сумму.

const sumNum = +prompt(`Enter the amount in USD:`);
const numValut = +prompt(`Enter the currency: 
1.-EUR  2.-UAN   3.-AZN`);
let sumAll;

switch (numValut) {
    case 1: sumAll = sumNum * 0.82;
        console.log(sumAll);
        result = sumAll % 1 === 0 ? alert(`Amount in EUR: ${sumAll}`) : alert(`Amount in EUR: ${sumAll.toFixed(2)} `);
        break;
    case 2: sumAll = sumNum * 27.57;
        result = sumAll % 1 === 0 ? alert(`Amount in UAN: ${sumAll}`) : alert(`Amount in UAN: ${sumAll.toFixed(2)} `);
        break; break;
    case 3: sumAll = sumNum * 1.7;
        result = sumAll % 1 === 0 ? alert(`Amount in AZN: ${sumAll}`) : alert(`Amount in AZN: ${sumAll.toFixed(2)} `);
}
