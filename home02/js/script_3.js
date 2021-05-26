// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

const a = +prompt(`Enter three-digit number`);
const third = a % 10;
const second = ((a % 100) - third) / 10;
const first = ((a % 1000) - (a % 100)) / 100;

if (first === second) {
    alert(`The numbers the first and the second are equal`);
}
else if (first === third) {
    alert(`The numbers the first and the third are equa123
    l`)
}
else if (second === third) {
    alert(`The numbers the second and the third are equal`)
}
else { alert(`This num don't matches:`); }
