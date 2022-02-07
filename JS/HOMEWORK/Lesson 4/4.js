// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function triangula (a,b){
//    console.log(a*b)
//     }
//     triangula(2, 5);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function round (radius){
//     console.log(Math.pow(radius,2)*Math.PI)
// }
// round(6);
//

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r

// function cylinder (height, radius){
//     console.log(Math.PI * Math.pow(radius,2) * height )
// }
// cylinder(100,24);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let mass = [10, 20, 30, 40, 50, 60];
// function f2 (){
//     for (let mass1 of mass) {
//         console.log(mass1)
//     }
// }
// f2();

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент площать квадрата
// function p(a,b){
//     let result = a * b;
//     return result;
// }
// let resulFinish = p(25,25);
// document.write(`<p> Площадь кадрата равна: ${resulFinish} mm</p>`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function f3(a){
// document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
// document.write(`</ul>`)
// }
// f3('Ментор я старался:-)')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function f4(a,k){
// document.write(`<ul>`);
// for (let i=0; i<k; i++){
//     document.write(`<li>${a}</li>`);
// }
// document.write(`</ul>`)висота
// }
// f4('Ой йой Шо буде далі:-)',4);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let primitiveMass = [10, false, 'YO', 3.14, true, 60];
// function list (){
//     document.write(`<div>`)
//     for(let i =0; i<primitiveMass.length; i++ )
//         document.write(`<div> Элемент списка №: ${i+1} Значение: ${primitiveMass[i]}</div>`)
//     }
//     document.write(`</div>`)
//
// list();

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.

// let massObject = [
//     {name:'Vasya', id:1, age:30},
//     {name:'Max', id:2, age:37},
//     {name:'Sergiy', id:3, age:34},
//     {name:'Anna', id:4, age:28}
// ]
// console.log(massObject);
// function obj (){
//     for (let i = 0; i<massObject.length; i++)
//         document.write(`<div> Name: ${massObject[i].name}  id: ${massObject[i].id} Age: ${massObject[i].age} </div>`);
// }
// obj();