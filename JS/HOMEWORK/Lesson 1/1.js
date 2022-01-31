// -Створити
// змінні.Присвоїти
// кожному
// з
// них
// значення: 'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.Вивести
// кожну
// змінну
// за
// допомогою: console.log , alert, document.write
// - Переприсвоїти
// кожній
// змінній
// з
// завдання
// значення
// на
// довільне.Вивести
// кожну
// змінну
// за
// допомогою: console.log , alert, document.write

let a = 'hello';
console.log(a);
alert(a);
document.write(a);
a = 'by';
console.log(a);
alert(a);
document.write(a);


let b = 'owu';
console.log(b);
alert(b);
document.write(b);
b = 'OurWorldUnderwater'
console.log(b);
alert(b);
document.write(b);


let c = 'com';
console.log(c);
alert(c);
document.write(c);
c='ua';
console.log(c);
alert(c);
document.write(c);

let d = 'ua';
console.log(d);
alert(d);
document.write(d);
d='com';
console.log(d);
alert(d);
document.write(d);


let e = 1;
console.log(e);
alert(e);
document.write(e);
e='one';
console.log(e);
alert(e);
document.write(e);


let f = 10;
console.log(f);
alert(f);
document.write(f);
f='ten';
console.log(f);
alert(f);
document.write(f);


let g = -999;
console.log(g);
alert(g);
document.write(g);
g = -1;
console.log(g);
alert(g);
document.write(g);


let h = 123;
console.log(h);
alert(h);
document.write(h);
h = 321;
console.log(h);
alert(h);
document.write(h);


let i = 3.14;
console.log(i);
alert(i);
document.write(i);
i = 'pi';
console.log(i);
alert(i);
document.write(i);


let j = 2.7;
console.log(j);
alert(j);
document.write(j);
j = 'hzShoTo';
console.log(j);
alert(j);
document.write(j);


let k = 16;
console.log(k);
alert(k);
document.write(k);
k = 'years';
console.log(k);
alert(k);
document.write(k);


let l = true;
console.log(l);
alert(l);
document.write(l);
l = 'false';
console.log(l);
alert(l);
document.write(l);


let m = false;
console.log(m);
alert(m);
document.write(m);
m = true;
console.log(m);
alert(m);
document.write(m);

// ------------------------------------------------------------

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. ' +
// '(Не об'єкт)

let firstName = 'Max';
let middleName = 'Anatoliyovich';
let lastName = 'Tykhonenko';
let person = (`${firstName} ${middleName} ${lastName}`);
console.log(person);
document.write(person);

// ------------------------------------------------------------
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let firstName = prompt('What is your name?',  'example - Max' );
let middleName = prompt('What is your Middle Name?', 'example - Tykhonenko' );
let age =prompt('What is your Age?', 'example 18-100' ) ;
console.log(` Hi ${firstName} ${middleName} You are ${age} years old`)

// ------------------------------------------------------------
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// ------------------------------------------------------------
// Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!

5 < 6 -> true
5 > 6 -> false
5 == 6 -> false
5 >= 6 -> false
10 == 10 -> true
10 === 10 -> true
10 > 10 -> false
10 < 10 -> false
10 != 10 -> false
123 > '123' -> false
123 == '123' -> true

// ------------------------------------------------------------
// // - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>");
// // 205 потому что js прибавит их получится стринга состоящая из стринги 20 и стринги 5, так как нету пробела получится
// // стринга 205;
//
document.write(str - a + "<br/>");
// // // если идет вычетание то js проведет мат действия и отнимет от 20 - 5 и получится  стринга 15;
//
document.write(str * "2" + "<br/>");
// сначала проведет умножение а потом выведет стрингу 40;
//
document.write(str / 2 + "<br/>");
// сначала проведет деление а потом выведет стрингу 10;