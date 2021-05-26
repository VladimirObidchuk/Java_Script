// Запросить у пользователя число и вывести все делители этого числа.

const a = +prompt(`Enter number`);
for (i = 1; i <= a; i++) {
    if (a % i && a !== a && a !== 1) {
        console.log(i);
    }
}