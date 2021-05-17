// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

const sumPurchase = +prompt(`What is the amount of purchases`);

if (200 <= sumPurchase && sumPurchase <= 300) {
    alert(`The amount of purchases with a 3% discount: ${sumPurchase - (sumPurchase * 0, 03)}`);
}
else if (300 < sumPurchase && sumPurchase <= 500) {
    alert(`The amount of purchases with a 5% discount: ${sumPurchase - (sumPurchase * 0, 05)}`);
}
else if (500 < sumPurchase) {
    alert(`The amount of purchases with a 7% discount: ${sumPurchase - (sumPurchase * 0, 07)}`);
}
else { alert(`The amount of purchases is small for calculating a discount`) }
