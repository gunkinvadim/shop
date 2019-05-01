let money, time;

function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function chooseExpenses() {
    for (let i = 0; i <= 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется", "");

        if ( (typeof(a)) === 'string' && (typeof(b)) === 'string'
        && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != ''
        && a.length < 50 && b.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            --i;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i <= 2; i++) {
        let a = prompt("Статья необязательных расходов?", "");
    
        if (typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50) {
            console.log("done");
            appData.optionalExpenses[i+1] = a;
        } else {
            return;
        }
    }
}
chooseOptExpenses();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

console.log(appData);

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется", "");

// if ( (typeof(a)) === 'string' && (typeof(a)) === 'string'
//     && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// i++
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется", "");

// if ( (typeof(a)) === 'string' && (typeof(a)) === 'string'
//     && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// i++;
// } while (i < 2);