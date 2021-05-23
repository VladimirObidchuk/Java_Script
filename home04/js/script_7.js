// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

let setHourInDay = +prompt('Enter choice 12 or 24r');


if (setHourInDay === 12 || setHourInDay === 24) {
    let setTimeHour = +prompt('Enter hour');
    if (setHourInDay === 12 && setTimeHour > 0 || setTimeHour > 12) {
        alert('The hour  entered incorrectly');
    }
    else if (setHourInDay == 24 && setTimeHour > 0 || setTimeHour > 24) {
        alert('The hour  entered incorrectly');
    }
    else {
        let setTimeMinut = +prompt('Enter minutes');
        let setTimeSecond = +prompt('Enter second');
        if (setTimeMinut > 60 || setTimeMinut < 0 || setTimeSecond > 60 || setTimeSecond < 0) {
            alert('The minutes or seconds entered incorrectly');
        }
        else {
            function getTimeForm(n1, n2, n3) {
                let result = '';
                n1 = String(n1);
                let getLengN1 = n1.length === 1 ? n1 = '0' + n1 : n1 = n1;
                n2 = String(n2);
                let getLengN2 = n2.length === 1 ? n2 = '0' + n2 : n2 = n2;
                n3 = String(n3);
                let getLengN3 = n3.length === 1 ? n3 = '0' + n3 : n3 = n3;

                if (n2 == 0 || n2 == null) { n2 = '00'; }
                if (n3 == 0 || n3 == null) { n3 = '00'; }
                return result = `${n1}:${n2}:${n3}`;
            }
            alert(getTimeForm(setTimeHour, setTimeMinut, setTimeSecond));
        }
    }
}
else { alert('The hour period in days is incorrectly entered'); }
