var storeName = prompt("Название вашего магазина?");
var budget = +prompt("Ваш бюджет (руб.)?");
var shopGoods = [
		prompt("Какой тип товаров будем продавать?"),
		prompt("Какой тип товаров будем продавать?"),
		prompt("Какой тип товаров будем продавать?")
];
var budgetDaily = budget / 30;

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