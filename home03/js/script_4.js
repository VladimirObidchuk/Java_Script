// Определить количество цифр в введенном числе.

let a = +prompt(`Enter num`);
let i = 0;
while (a >= 1) {
    a /= 10;
    i++;
}
alert(i);
