// Создать объект, описывающий время (часы, минуты, секунды)

const time = {
    hour: 12,
    minuts: 35,
    seconds: 55
}
// Функция вывода времени на экран;
function viewerObjAuto(n1) {
    let result = '';
    for (const key in time) {
        console.log(`${key}: ${time[key]}`);
        result += `${key}: ${time[key]} \n`;
    }
    return result;
}
alert(viewerObjAuto(time));

// Функция изменения времени на переданное количество секунд;
let getAddOfSeconds = +prompt(`Enter the number of seconds by which you want to increase the time `);
let getHours = time.hour,
    getMinuts = time.minuts,
    getSeconds = time.seconds;
function getAddSecons(n1, n2, n3, n4) {
    if (getAddOfSeconds >= 0) {
        if ((getSeconds + getAddOfSeconds) >= 60) {
            getSeconds = (getSeconds + getAddOfSeconds) - 60;
            if (getSeconds < 10) {
                getSeconds = '0' + getSeconds;
            }
            getMinuts += 1;
            if (getMinuts >= 60) {
                getMinuts = getMinuts - 60;
                getHours += 1;
            }
        }
    }
    else {
        if (getSeconds - getAddOfSeconds < 0) {
            getSeconds = 60 - Math.abs(getSeconds - getAddOfSeconds);
            if (getMinuts == 0) {
                getMinuts = 60 - 1;
                getHours -= 1;
            }
            else { getMinuts -= 1 }
        }
    }
    return getHours + ` h ` + getMinuts + ` m ` + getSeconds + ` s`;
}
alert(getAddSecons(getHours, getMinuts, getSeconds, getAddOfSeconds));

// Функция изменения времени на переданное количество минут;

let getAddOfMinuts = +prompt(`Enter the number of minutes by which you want to increase the time `);
function getAddMinuts(n1, n2, n3, n4) {
    if (getAddOfMinuts >= 0) {
        if ((getMinuts + getAddOfMinuts) === 60) {
            getMinuts = '00';
        }
        if ((getMinuts + getAddOfMinuts) > 60) {
            getMinuts = (getMinuts + getAddOfMinuts) - 60;
            if (getMinuts < 10) {
                getMinuts = '0' + getMinuts;
            }
            getHours += 1;
        }
    }
    else {
        if (getMinuts - getAddOfMinuts < 0) {
            getMinuts = 60 - Math.abs(getMinuts - getAddOfMinuts);
            if (getHours == 0) {
                getHours = 24 - 1;
            }
            else {
                if (getHours == 10) {
                    getHours = '0' + (getHours - 1);
                }
                getHours -= 1
            }
        }
    }
    return getHours + ` h ` + getMinuts + ` m ` + getSeconds + ` s`;
}
alert(getAddMinuts(getHours, getMinuts, getSeconds, getAddOfMinuts));

// Функция изменения времени на переданное количество часов. 

let getAddOfHours = +prompt(`Enter the number of hours by which you want to increase the time `);

function getAddHours(n1, n2, n3, n4) {
    if (getAddOfHours >= 0) {
        if ((getHours + getAddOfHours) === 24) {
            getHours = '00';
        }
        if ((getHours + getAddOfHours) > 24) {
            getHours = (getHours + getAddOfHours) - 24;
            if (getHours < 10) {
                getHours = '0' + getHours;
            }
        }
    }
    else {
        if (getHours - getAddOfHours < 0) {
            getMinuts = 24 - Math.abs(getHours - getAddOfHours);
        }
        if ((getHours - getAddOfHours) == 0) {
            getHours = 24 - 1;
        }
        if (getHours == 10) {
            getHours = '0' + (getHours - 1);
        }
        else {
            getHours -= 1
        }

    }
    return getHours + ` h ` + getMinuts + ` m ` + getSeconds + ` s`;
}
alert(getAddHours(getHours, getMinuts, getSeconds, getAddOfMinuts));