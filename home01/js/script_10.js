// 10. Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
const summAmount = +prompt(`Enter deposit amount:`);
const Rate = +prompt(`Enter deposit rate:`);
const numberMonths = +prompt(`Enter number of months:`);
alert(`Deposit amount: ${summAmount}
Deposit term: ${numberMonths}
Interest accrued at the rate: ${parseFloat((((summAmount * (Rate / 100)) / 12) * numberMonths)).toFixed(2)}
Accrued taxes on interest: ${parseFloat(((((summAmount * (Rate / 100)) / 12) * numberMonths) * 0.195)).toFixed(2)}
Accrued interest at a tax-inclusive rate of 19.5%: ${parseFloat((((summAmount * (Rate / 100)) / 12) * numberMonths) - ((((summAmount * (Rate / 100)) / 12) * numberMonths) * 0.195)).toFixed(2)}
End of month amount: ${parseFloat(summAmount + (((summAmount * (Rate / 100)) / 12) * numberMonths) - ((((summAmount * (Rate / 100)) / 12) * numberMonths) * 0.195)).toFixed(2)}`);

