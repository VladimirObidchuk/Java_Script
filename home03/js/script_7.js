// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

let num = +prompt('Enter number');
let numOfShift = +prompt('Enter power');
let temp = 1, numFirstShift = numSecondShift = 0;

let length = ('' + num).length;

if (length < numOfShift) {
    numOfShift = numOfShift % length;
}

for (let i = 0; i < numOfShift; i++) {
    temp *= 10;
}
numFirstShift = String(num % temp);

numSecondShift = String(Math.trunc(num / numOfShift));
num = numFirstShift + numSecondShift;

alert(num);


//1

// else {

// }

// console.log(length);
// console.log(num % numOfShift);
// console.log(Math.trunc(num / numOfShift));

