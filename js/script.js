let startCalc = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
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
    chooseExpenses: function() {
        for (let i = 0; i <= 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется', '');
    
            if ( (typeof(a)) === 'string' && (typeof(b)) === 'string'
            && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != ''
            && a.length < 50 && b.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                --i;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ваш ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i <= 2; i++) {
            let a = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i+1] = a;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход?', '');
        if (typeof(items) == 'string' && typeof(items) != null && items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё?', ''));
            appData.income.sort();
            appData.income.forEach(function(item, i) {
                alert('Способы доп. заработка: ' + (+i+1) + ': ' + item);
            });
        } else {
            appData.chooseIncome();
        }
    }
};

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    console.log(key + ': ' + appData[key]);
}