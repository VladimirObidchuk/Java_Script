// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
const question1 = +prompt(`How many colors does the rainbow have
    a. - 7     b. - 5     c. - 6`);
let sumBall;
const question2 = +prompt(`How many legs does a dog have
    a. - 3     b. - 2     c. - 4`);
const question3 = +prompt(`How many eyes does a chameleon have
    a. - 3     b. - 2     c. - 1`);
if (question1 == 7 && question2 == 4 && question3 == 2) {
    sumBall = 2 + 2 + 2;
    alert(`number of points scored: ${sumBall}`);
}
else if (question1 !== 7 && question2 == 4 && question3 == 2) {
    sumBall = 2 + 2;
    alert(`number of points scored: ${sumBall}`);
}
else if (question1 == 7 && question2 !== 4 && question3 == 2) {
    sumBall = 2 + 2;
    alert(`number of points scored: ${sumBall}`);
}
else if (question1 == 7 && question2 == 4 && question3 !== 2) {
    77
    sumBall = 2 + 2;
    alert(`number of points scored: ${sumBall}`);
}
else if (question1 !== 7 && question2 == 4 && question3 !== 2) {
    sumBall = 2;
    alert(`number of points scored: ${sumBall}`);
}
else if (question1 == 7 && question2 !== 4 && question3 !== 2) {
    sumBall = 2;
    alert(`number of points scored: ${sumBall}`);
}
else if (question1 !== 7 && question2 !== 4 && question3 == 2) {
    sumBall = 2;
    alert(`number of points scored: ${sumBall}`);
}
else { alert(`Answered all the questions wrong`) }