
// Всі функції повинні бути описані стрілочним типом!!!!


// - створити функцію яка обчислює та повертає площу прямокутника
// let rectangle  = (a,b)=>a*b;
// console.log(rectangle(10,20));

// - створити функцію яка обчислює та повертає площу кола;
// let round = (result)=>{
//     return Math.pow(result,2)*Math.PI;
// }
// console.log(round(6));

// - створити функцію яка обчислює та повертає площу циліндру

// let cylinder = (height, radius)=>{
//     return Math.PI * Math.pow(radius,2) * height;
//   }
//   console.log(cylinder(10,4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// ----------------------------------варіант 1 ________________________

// let mass = [10,8,'true', true,28,45]
// let f1 = ()=>{
//     for (let f1Element of mass) {
//         console.log(f1Element);
//     }
// }
// f1();
// ----------------------------------варіант 2 ________________________

// let mass = [10,8,'true', true,28,45]
// let f1 = ()=>{
//     let array = []
//     for (let f1Element of mass) {
//         array.push(f1Element);
//
//     }
//     return array
// }
// console.log(f1(mass));

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let p = (text)=>{
// document.write(`<p>${text}</p>`)
// }
// p('Hello OKTEN');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let lijko = (someText)=>{
// document.write(`<ul>`)
//     document.write(`<li>${someText}</li>`)
//     document.write(`<li>${someText}</li>`)
//     document.write(`<li>${someText}</li>`)
// document.write(`</ul>`)
// }
// lijko('Hellooooooo everyone!!!!')



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// ----------------------------------варіант 1 ________________________
// let lijko = (someText, number)=>{
//
//     document.write(`<ul>`)
// for (let i = 0; i<number; i++){
//
//     document.write(`<li>${someText}</li>`)
//     document.write(`<li>${someText}</li>`)
//     document.write(`<li>${someText}</li>`)
// }
//     document.write(`</ul>`)
//
// }
// lijko('Hellooooooo everyone!!!!', 3)
//
// // ----------------------------------варіант 2 ________________________
// let lijko1 = (someText, number)=>{
//
//     document.write(`<ul>`)
//     for (let i = 0; i<number; i++){
//
//         document.write(`<li>${someText}</li>`)
//
//     }
//     document.write(`</ul>`)
//
// }
// lijko1('Tra la la la la !!!!', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// ----------------------------------варіант 1 FOR________________________
// let mass = ['name', 'surname', 'age', 'secondName', 1, 2, 3, true, false];
// let spisok = ()=>{
//     for (let i = 0; i <mass.length ; i++) {
//         document.write(`<div>${mass[i]}</div>`)
//     }
//
// }
// spisok();
// ----------------------------------варіант 2 FOR OF________________________
// let mass = ['name', 'surname', 'age', 'secondName', 1, 2, 3, true, false];
// let spisok = ()=>{
//     for (let mass1 of mass) {
//         document.write(`<div>${mass1}</div>`)
//     }
// }
// spisok();
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.

// let mass = [{name: 'Max', age:37, id:'Незнаю що тут написати'}]
//
// let f1=()=>{
//     document.write(`<div>`)
//     for (let i = 0; i < mass.length; i++) {
//         document.write(`<div> Name: ${mass[i].name} <br> Age: ${mass[i].age}  <br> Id: ${mass[i].id} </div>`)
//     }
//
//     document.write(`</div>`)
// }
// f1();

