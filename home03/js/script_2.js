// Запросить 2 числа и найти только наибольший общий делитель

const a = +prompt(`Enter a`);
const b = +prompt(`Enter b`);

let i = 1;
const min = Math.min(a, b)
let result = 0;
while (i <= min) {
    if (a % i == 0 && b % i == 0 && i > result) {
        result = i;
    }
    i++;
}
console.log(result);
// alert(result);