/*
 1. Запросите у пользователя число, возведите это число во
 2-ю степень и выведите на экран.
 */

/*let x,n;
x = prompt();
n = x*x;
alert(n);*/


/*
2. Запросите у пользователя 2 числа и выведите среднее ариф-
метическое этих чисел.
*/

/*let firstnumber = prompt(), twonumber = prompt();
firstnumber = parseInt(firstnumber);
twonumber = parseInt(twonumber)
let sum,avg;
sum = firstnumber + twonumber;
avg = sum / 2;
alert(avg);*/


/*
3. Запросите у пользователя длину стороны квадрата и вы-
ведите площадь такого квадрата.
*/
/*let a = prompt(),P;
a = parseInt(a);
a += a;
alert(a);*/


/*4. Реализуйте конвертор из километров в мили (пользователь
  вводит километры, программа выводит мили). 1 км = 0,621371
  миль. Это значение укажите в коде как константу.*/

/*const mil = 0.621371;
let km = prompt();
km = parseInt(km);
km *= mil;
alert(km);*/


/*
5. Реализуйте калькулятор. Пользователь вводит два числа,
а программа выводит результаты действий + - * / между
этими числами.
*/

/*function plus(){
let a = prompt("Введите первое число"),b = prompt("Введите второе число"),sum;
a = parseFloat(a);
b = parseFloat(b);
sum = a + b;
alert(sum);
}

function minus(){
let a = prompt("Введите первое число"),b = prompt("Введите второе число"),sum;
a = parseFloat(a);
b = parseFloat(b);
sum = a - b;
alert(sum);
}

function delenie(){
let a = prompt("Введите первое число"),b = prompt("Введите второе число"),sum;
a = parseFloat(a);
b = parseFloat(b);
sum = a / b;
alert(sum);
}

function ymnojenie(){
let a = prompt("Введите первое число"),b = prompt("Введите второе число"),sum;
a = parseFloat(a);
b = parseFloat(b);
sum = a * b;
alert(sum);
}*/


/*6. Пользователь вводит значения a и b для формулы a * x + b = 0,
а программа считает и выводит значение x.
*/

/*let a = prompt(),b=prompt(),x;
x = -b/a;
alert(x);*/


/*const x = prompt("Введите число");
const result = x % 2;
if (result === 0){
    alert("Код в If")
}*/


/*
10. Зарплата работника составляет $250 + 10% от продаж.
Запросите общую сумму продаж за месяц и посчитайте
зарплату.
*/

/*let zp,sum = prompt("Введите сумму продаж");
zp = parseFloat(zp);
sum = parseFloat(sum);
const vids = sum * 0.1;
zp = vids + 250;
alert(zp);*/