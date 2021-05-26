// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость)

const auto = {
    manufacturer: "Toyota",
    modelAuto: "Corolla",
    yearCreate: 2010,
    averageSpeed: 120
}
// Функция для вывода на экран информации об автомобиле;
function viewerObjAuto(n1) {
    let result = '';
    for (const key in auto) {
        console.log(`${key}: ${auto[key]}`);
        result += `${key}: ${auto[key]} \n`;
    }
    return result;
}
alert(viewerObjAuto(auto));

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью
let speedAuto = auto.averageSpeed;
let pathDistan = +prompt(`Enter distans`);

function calcTimeWay(n1, n2) {
    let timeWay = pathDistan / speedAuto;
    let totalTimeWay = totalTime = 0;
    if (timeWay % 4 !== 0) {
        totalTime = Math.trunc(timeWay / 4) + timeWay;
        console.log(totalTime);
    }
    else {
        totalTime = (timeWay / 4) + (timeWay - 1);
        console.log(totalTime);
    }
    let hours = Math.trunc(totalTime);
    let minutes = Math.round((totalTime - hours) * 60);
    if (minutes > 59) {
        hours += 1;
        minutes = 0;
    }
    return minutes < 10 ? hours + ` h 0` + minutes + ` min` : hours + ` h ` + minutes + ` min`;
}
alert(calcTimeWay(speedAuto, pathDistan));