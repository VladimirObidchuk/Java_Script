// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

const age = +prompt(`Enter your Age`);
if (0 < age && age <= 2) {
    alert(`Hellow, you are Baby`);
}
else if (12 <= age && age <= 18) {
    alert(`Hellow, you are Teenager`);
}
else if (18 <= age && age <= 60) {
    alert(`Hellow, you are Adult`);
}
else {
    alert(`Hellow, you are Pensioner`);
}