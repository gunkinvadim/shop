let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    monthExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
    monthBudget = prompt("Во сколько обойдется", "");

appData = {
    budget: money,
    timeData: time,
    expenses: {
        "monthExpenses": "monthBudget"
    },
    optionalExpenses: {

    },
    income: [],
    savings: false,
};

alert("Ваш ежедневный бюджет: " + money/30);

console.log(appData);
