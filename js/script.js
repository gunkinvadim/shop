var storeName = prompt("Название вашего магазина?");
var budget = +prompt("Ваш бюджет (руб.)?", 0);
var budgetDaily = budget / 30;
var shopGoods = [
		prompt("Какой тип товаров будем продавать?"),
		prompt("Какой тип товаров будем продавать?"),
		prompt("Какой тип товаров будем продавать?")
];

employers = {
		director: "Михалыч",
		manager: "Тамара Петровна",
};

mainList = {
  storeName,
  budget,
  budgetDaily,
  shopGoods,
  employers,
  open: "true",
};

alert("Ваш ежедневный бюджет: " + budgetDaily + " руб.");
console.log(mainList);