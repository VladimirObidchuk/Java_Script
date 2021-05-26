// Написать функцию, которая считает разницу между датами.
// alert('Enter date only 24r');
// let setHourInDay = +prompt('Enter date');
// if (setHourInDay === 24) {
let setTimeHourFirst = +prompt('Enter the hours of the first date');
// if (setHourInDay === 12 && setTimeHourFirst > 12 && setTimeHourFirst < 0) {
//     alert('The hour  entered incorrectly');
// }
// else if (setHourInDay === 24 && setTimeHourFirst < 0 && setTimeHourFirst > 24) {
//     alert('The hour  entered incorrectly');
// }
// else {
let setTimeMinutFirst = +prompt('Enter the minutes of the first date');
let setTimeSecondFirst = +prompt('Enter the seconds of the first date');

//     if (setTimeMinutFirst > 60 || setTimeMinutFirst < 0 || setTimeSecondFirst > 60 || setTimeSecondFirst < 0) {
//         alert('The minutes or seconds entered incorrectly');
//     }

let setTimeHourSecond = +prompt('Enter the hour of the second date');
// if (setHourInDay === 12 && setTimeHourSecond < 0 && setTimeHourSecond > 12) {
//     alert('The hour  entered incorrectly');
// }
// else if (setHourInDay === 24 && setTimeHourSecond < 0 || setTimeHourSecond > 24) {
//     alert('The hour  entered incorrectly');
// }
// else {
let setTimeMinutSecond = +prompt('Enter the minutes of the second date');
let setTimeSecondSecond = +prompt('Enter the second of the second date');
// if (setTimeMinutSecond > 60 || setTimeMinutSecond < 0 || setTimeSecondSecond > 60 || setTimeSecondSecond < 0) {
//     alert('The minutes or seconds entered incorrectly');
//     }
// }
let calcFirstDateTime = calcTimeForSecond(setTimeHourFirst, setTimeMinutFirst, setTimeSecondFirst);
// }
let calcSecondtDateTime = calcTimeForSecond(setTimeHourSecond, setTimeMinutSecond, setTimeSecondSecond);
function calcTimeForSecond(n1, n2, n3) {
    return calcTimeSecond = (n1 * 3600) + (n2 * 60) + n3;
}
let calcDifferenceTime = Math.abs(calcFirstDateTime - calcSecondtDateTime);
function calcTimeForDate(n1) {
    let getHour = getMinuts = getSecond = '';
    let calcHour = Math.trunc(n1 / 3600);
    let calcMinuts = Math.trunc(n1 / 60) - (calcHour * 60);
    let calcSecond = n1 - ((calcHour * 3600) + (calcMinuts * 60));
    // getHour = (calcHour > 0 && calcHour < 10) ? getHour = '0' + calcHour : getHour = calcHour;
    getMinuts = (calcMinuts > 0 && calcMinuts < 10) ? getMinuts = '0' + calcMinuts : getHour = calcMinuts;
    getSecond = (calcSecond > 0 && calcSecond < 10) ? getSecond = '0' + calcSecond : calcSecond = calcSecond;

    return getTime = (`Time: ${calcHour}:${getMinuts}:${getSecond}`);
}
alert(calcTimeForDate(calcDifferenceTime));

// }
// else { alert('The hour period in days is incorrectly entered'); }
