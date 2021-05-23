// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
let totalTimeForSecond = +prompt('Enter time in sekonds');


function calcTimeForSecond(n1) {
    let getHour = getMinuts = getSecond = '';
    let calcHour = Math.trunc(n1 / 3600);
    let calcMinuts = Math.trunc(n1 / 60) - (calcHour * 60);
    let calcSecond = n1 - ((calcHour * 3600) + (calcMinuts * 60));
    getHour = (calcHour > 0 && calcHour < 10) ? getHour = '0' + calcHour : getHour = calcHour;
    getMinuts = (calcMinuts > 0 && calcMinuts < 10) ? getMinuts = '0' + calcMinuts : getHour = calcMinuts;
    getSecond = (calcSecond > 0 && calcSecond < 10) ? getSecond = '0' + calcSecond : calcSecond = calcSecond;

    return getTime = (`Time: ${getHour}:${getMinuts}:${getSecond}`);
}
alert(calcTimeForSecond(totalTimeForSecond));