// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let foo1 =(a)=>{
//
//     for (let i = 0; i <a.length ; i++) {
//             document.write(`<div> ${a[i]} - ${a[i].length}</div>`);
//     }
// }
// foo1(['hello world', 'lorem ipsum', 'javascript is cool']);
//

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// -------------------------------Вариант №1-----------------------------------------------------
//
// let foo2 =(a)=>{
//
//     let x = [];
//
//     for (let i = 0; i < a.length; i++) {
//         x.push(a[i].toUpperCase())
//     }
// return x;
// }
// let result = foo2(['hello world', 'lorem ipsum', 'javascript is cool']);
// console.log(result)
//-------------------------------Вариант №2-----------------------------------------------------

// let x = [];
// ['hello world', 'lorem ipsum', 'javascript is cool'].forEach(str => {
//     x.push(str.toUpperCase())
// });
// console.log(x)

// ----------------------------------------------------------------------------------------------------------
// - Перевести до нижнього регістру настуипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let foo3 =(a)=>{
//
//     let x = [];
//
//     for (let i = 0; i < a.length; i++) {
//         x.push(a[i].toLowerCase())
//     }
//     return x;
// }

// / let result = foo3(['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']);
// console.log(result)

// ----------------------------------------------------------------------------------------------------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let newStr =str.replace(' ','').trim();
// console.log(newStr);

// ----------------------------------------------------------------------------------------------------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// -------------------------------Вариант №1-----------------------------------------------------
// let str = 'Каждый охотник желает знать';
// let stringToArray = (a)=>{
//     let newStr = (a.split(' '));
//     console.log(newStr)
// return newStr;
// }
// let arr = stringToArray(str);
// document.writeln(arr)
// -------------------------------Вариант №2-----------------------------------------------------
// let str = 'Каждый охотник желает знать';
// let stringToArray = (a)=>{return  document.writeln(a.split(' '));
// }
// stringToArray(str);

// ----------------------------------------------------------------------------------------------------------
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із
// зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// ; // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, index) => {return str.substr(0, index);};
// document.writeln(delete_characters(str, 6));

// -----------------------------------------------------------------------------------------------------------
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash=(str) =>{
//   return str.replaceAll(' ','-').toUpperCase();
// }
// document.writeln(insert_dash(str));

// ----------------------------------------------------------------------------------------------------------
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з
// нижнього регістру у верхній.

// let str = 'Дезоксирибонуклеї́нова'
// let foo5=(str)=>{return str[0].toUpperCase()+str.substring(1)};
// console.log(foo5(str));;

// ----------------------------------------------------------------------------------------------------------
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
document.write(capitalize('okten hi you are welcome'));
console.log(capitalize('okten hi you are welcome'));