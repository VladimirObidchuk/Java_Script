// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
let setHourInDay = +prompt('Enter choice 12 or 24r');
if (setHourInDay === 12 || setHourInDay === 24) {
    let setTimeHour = +prompt('Enter hour');
    if (setHourInDay !== 12 && setHourInDay > 0 || setHourInDay > 12) {
        alert('The hour  entered incorrectly');
    }
    else if (setHourInDay == 24 && setHourInDay > 0 || setHourInDay > 24) {
        alert('The hour  entered incorrectly');
    }
    else {
        let setTimeMinut = +prompt('Enter minutes');
        let setTimeSecond = +prompt('Enter second');
        if (setTimeMinut > 60 || setTimeMinut < 0 || setTimeSecond > 60 || setTimeSecond < 0) {
            alert('The minutes or seconds entered incorrectly');
        }
        function calcTimeForSecond(n1, n2, n3) {
            return calcTimeSecond = (setTimeHour * 3600) + (setTimeMinut * 60) + setTimeSecond
        }
        alert(calcTimeForSecond(setTimeHour, setTimeMinut, setTimeSecond));

    }

}
else { alert('The hour period in days is incorrectly entered'); }
