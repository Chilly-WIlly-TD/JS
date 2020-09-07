'use strict';

/*
1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Здесь инкремент увеличиавет переменную на 1. Префиксная форма.
d = b++; alert(d);           // 1 Здесь постфиксная форма, поэтому ззаписывается 1.
c = (2+ ++a); alert(c);      // 5 Здесь 2+ инкремент увеличивает  ++2, т.е. 3
d = (2+ b++); alert(d);      // 4 Здесь опять постфиксная форма, т.е 2+ 2, но в перенменной будет 3
alert(a);                    // 3 По итогу переменной префиксная форма дала 3
alert(b);                    // 3 По итогу переменной постфиксаня форма тоже дала 3. 
Почему код даёт именно такие результаты?
*/


/*
2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
x = 5 (1 + (2 * 2)
*/



/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
1. если a и b положительные, вывести их разность;*/

let a = 4, b = 3;

	if (a >= 0 && b >= 0){
			console.log(a - b);
	}

/*
2. если а и b отрицательные, вывести их произведение;*/

let a = -4, b = -3;

	if (a <= 0 && b <= 0){
			console.log(a * b);
	}

/*
3. если а и b разных знаков, вывести их сумму;
ноль можно считать положительным числом. ### */

let a = 4, b = -3;

	if (a * b < 0){
			console.log(a + b);
	}

/*
4. Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15. ### */

let  a = 5;
	switch (a){
	    case 0:
	       document.write("0");
	    case 1:
	       document.write("1");
	    case 2:
	       document.write("2");
	    case 3:
	        document.write("3");
	    case 4:
	        document.write("4");
	    case 5:
	        document.write("5");
	    case 6:
	        document.write("6");
	    case 7:
	        document.write("7");
	    case 8:
	        document.write("8");
	    case 9:
	        document.write("9");
	    case 10:
	        document.write("10");
	    case 11:
	        document.write("11");
	    case 12:
	        document.write("12");
	    case 13:
	        document.write("13");
	    case 14:
	        document.write("14");
	    case 15:
	    document.write("15");
                    
        	}  
/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return. ###*/

function sumnumber (a, b) {
	return a + b;
}

function sumsub (a, b) {
	return a - b;
}

function summulti (a, b) {
	return a * b;
}

function sumdivision (a, b) {
	return a / b;
}

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и 
вернуть полученное значение (использовать switch). ### */

function mathOperation(arg1, arg2, operation){
	switch (operation){
		case "+":
			return sumnumber(arg1, arg2);
		case "-":
			return sumsub (arg1, arg2);
		case "*":
			return summulti(arg1, arg2);
		case "/":
			return sumdivision(arg1, arg2);
	}
}

console.log(mathOperation(4,8,"+"));
console.log(mathOperation(4,8,"-"));
console.log(mathOperation(4,8,"*"));
console.log(mathOperation(4,8,"/"));


/*
7. *Сравнить null и 0. Попробуйте объяснить результат. ### 

null - значение не известно
0 - число
null > 0 и null == 0 выдаст false.
Если сравнить null >= 0 ты выдаст true.*/

/*
8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), 
где val – заданное число, pow – степень.*/

