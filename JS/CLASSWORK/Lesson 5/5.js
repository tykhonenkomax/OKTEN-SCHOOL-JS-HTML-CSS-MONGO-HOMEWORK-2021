// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let f1 = (a, b, c)=> {
//     if (a > b && a > c) {
//         console.log(a);
//     }
//     else if (b > a && b > c) {
//         console.log(b);
//     } else (console.log(c));
//
// }
// f1(45,11,43)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let f2 = (a, b, c)=> {
//     if (a < b && a < c) {
//         console.log(a);
//     }
//     else if (b < a && b < c) {
//         console.log(b);
//     } else (console.log(c));
//
// }
// f2(10,11,43)


// - створити функцію яка повертає найбільше число з масиву
//
// ------------------(тут можна было как в мин значении ниже, но для разнообразия вывел так!!!)-------------------------

// let mass = [27,14,12,25,1000,45,48];
// let f3 =()=>{
//     let max = 0;
//     for (let massMax of mass) {
//         if (massMax>max){
//             max=massMax;
//         }
//     }
//     console.log(max);
// }
// f3();

// - створити функцію яка повертає найменьше число з масиву


// let mass = [27,14,12,25,1000,45,48];
// let f4 =(a)=>{
//     let max = a[0];
//     for (let massMax of mass) {
//         if (massMax<max){
//             max=massMax;
//         }
//     }
//     return max;
// }
// let result =f4(mass);
// console.log(result);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// -------------------------------------------Варіант №1-----------------------------------------------------------

// let mass = [5,10,15];
// let f5=(a)=>{
//     let summ = a[0];
//     for (let i = 1; i < mass.length; i++) {
//         summ = mass[i]+summ;
//     }
//     return  summ;
// }
// let result = f5(mass);
// console.log(result);

// -------------------------------------------Варіант №2-----------------------------------------------------------
// let mass = [5,10,15];
// let f5=(a)=>{
//     let summ = 0;
//     for (let i = 0; i < mass.length; i++) {
//         summ = mass[i]+summ;
//     }
//     return  summ;
// }
// let result = f5(mass);
// console.log(result);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mass = [5,10,15];
// let summElmass = mass.length;
//
// let f6=(a, b)=>{
//     let summ = 0;
//     for (let i = 0; i < mass.length; i++) {
//         summ = ((mass[i]+summ)/b);
//     }
//     return  summ;
// }
// let result = f6(mass,summElmass);
// console.log(result);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);



// let f7 =(...numbers)=>{
//     let max = numbers[0];
//     let min = numbers[0];
//
//     for (const newArray of numbers) {
//        if (newArray>max){
//            max=newArray;
//        }  if(newArray<min){
//            min = newArray;
//        }
//
//     }
// console.log(max);
// return min;
// }
// let minResult = f7(25,16,48,34,27);
// document.write(`<div>${minResult}</div>`)


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let f8 = ()=>{
//     let MassRandom=[];
//     MassRandom.push(Math.floor(Math.random() * 100)+1);
// return MassRandom;
// }
// let result = f8();
// console.log(result);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let f9 = (a)=>{
//     let MassRandom=[];
//     MassRandom.push(Math.floor(Math.random() * a)+1);
// return MassRandom;
// }
// let result = f9(50);
// console.log(result);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let mass = [25,45,16,75,25,48];
// let f10 =(a)=>{
//
//  let newMassBack = [mass.reverse()];
//  return newMassBack;
//
// }
// let result =f10(mass);
// console.log(result);