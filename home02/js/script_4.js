// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

const year1 = +prompt(`Enter year`);
let numMulti4 = year1 % 4,
    numMulti100 = year1 % 100;

if (numMulti4 === 0 && numMulti100 !== 0) {
    alert(`Leap year`)
}
else { alert(`Not a leap year`) };
