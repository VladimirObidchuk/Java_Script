// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
const distanceWay = +prompt(`Enter distance way:`);
const travelTime = +prompt(`Enter travel time:`);
alert(`Required travel speed: ${distanceWay / travelTime} km / h`);
