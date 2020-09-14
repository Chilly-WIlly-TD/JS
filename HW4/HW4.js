'use strict';

/*1
Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

function NumberObject(num) {
	if (!Number.isInteger(num) || num < 0 || num > 999){
		console.log("Диапазон ЧИСЕЛ должен быть [0, 999].");
		return {};
	}
	return {
		units: num % 10,
		hundreds: Math.floor(num / 100),
		tens: Math.floor(num / 10) % 10,
	}
}

console.log(NumberObject(444));


/*1.1
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает
параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%.*/


/*es5*/
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100)
    };

const product1 = new Product("Продукт", 230)
product1.make25PercentDiscount();

console.log(product1);

/*es6*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100)
        }
}

        const product1 = new Product("Продукт", 230)
        product1.make25PercentDiscount();

        console.log(product1);

/*1.2
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.*/