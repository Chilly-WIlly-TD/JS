'use strict';

/*
1.2 С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

for (let a = 0; a <= 10; a++) {
	if (a == 0) {
		console.log(a + " - Это ноль");
	} else if ( a % 2 == 0) {
		console.log(a + " - это четное число")
	} else {
		console.log(a + " - это нечетное число")
	}
}


2. /* Выведите в консоль значения, указанные рядом с комментариями: */

const post = {
	author: "John", //вывести этот текст
	postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
	{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}	
		},
	]
}

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

/*
3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach*/

const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

products.forEach(item => {
	item.price = item.price - item.price * 0.15
});

/*
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии, можете использовать метод filter
2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort*/

const products = [
	{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg"
		]
	},
	{
		id: 8,
		price: 78,
	},
];

/* Первое задание не сообразил как сделать*/
/* Ниже по второму заданию*/

const sort = products.sort(function(item1, item2){
	return item1.price - item2.price;
	}) 

/*
5. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx/*/

for (let x = "x"; x.length <= 20; x += "x"){
	console.log(x);
}
