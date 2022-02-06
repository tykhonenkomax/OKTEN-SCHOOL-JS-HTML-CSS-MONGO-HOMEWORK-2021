// --створити масив з:
// //     - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль

// let mass1 = [1, 2, 3, 4, 5];
// console.log(mass1);
//
// let mass2 = ['beatles', 'elvis', 'queen', 'prince', 'davidBowie'];
// console.log(mass2);
//
// let mass3 = ['beatles', 1, true, 'prince', 2];
// console.log(mass3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись
// до конкретного індексу. Вивести в консоль

// let empty = [];
//
// empty [0] = 'elvis';
// empty [1] = 1935;
// empty [2] = 'Tupelo, Mississippi';
// empty [4] = 1977;
// empty [5] = 'Memphis, Tennessee';
//
// console.log(empty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині.
//
// for (let i = 0; i <10; i++) {
//     let i = 'Lorem ipsum dolor.'
// document.write(`<div>${i}</div>`)
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом і індексом всередині

// let blok = ['dT1', 'dT2', 'dT3', 'dT4', 'dT5', 'dT6', 'dT7', 'dT8', 'dT9', 'dT10'];
//
// for (let i = 0; i <blok.length; i++) {
//     document.write(`<div>${i} Some Random text </div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Some Random text </h1>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (let i < 20) {
//     document.write(`<h1> ${i} Some Random text </h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let massNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// while (let i < massNumber.length) {
//    console.log(massNumber[i]);
//     i++;
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let massString = ['mather', 'father', 'brother', 'sister', 'grandmother', 'grandfather', 'aunt', 'tuncle', 'godfather', 'godmother'];
// let i = 0;
// while (let i<massString.length){
//     console.log(massString[i]);
//     i++;
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let massAll = ['mather', 1, true, 'sister', 26, 'grandfather', false, 44, 'godfather', 'godmother'];
// for (let i=0; i<massAll.length; i++){
//     console.log(massAll[i]);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки булеві елементи

// let massAll2 = ['mather', 1, true, 'sister', 26, 'grandfather', false, 44, 'godfather', 'godmother'];
// for (let i=0; i < massAll2.length; i++) {
//     if (typeof massAll2[i] === 'boolean') {
//         console.log(massAll2[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести
// тільки числові елементи

// let massAll3 = ['mather', 1, true, 'sister', 26, 'grandfather', false, 44, 'godfather', 'godmother'];
// for (let i=0; i < massAll2.length; i++) {
//     if (typeof massAll3[i] === 'number') {
//         console.log(massAll3[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести
// тільки рядкові елементи

// let massAll4 = ['mather', 1, true, 'sister', 26, 'grandfather', false, 44, 'godfather', 'godmother'];
// for (let i=0; i<massAll4.length; i++){
//     if (typeof massAll4[i] === 'string'){
//         console.log(massAll4[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.

// let mortalKombat = [];
//
// mortalKombat[0] = 'Johnny Cage';
// mortalKombat[1] = 'Kano';
// mortalKombat[2] = 'Liu Kang';
// mortalKombat[3] = 'Raiden';
// mortalKombat[4] = 'Scorpion';
// mortalKombat[5] = 'Sonya Blade';
// mortalKombat[6] = 'Baraka';
// mortalKombat[7] = 'Goro';
// mortalKombat[8] = 'Shang Tsung';
// mortalKombat[9] = 'Reptile';
//
// for (let i=0; i<mortalKombat.length; i++){
//     console.log(mortalKombat[i])
// };

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i=0; i<10; i++){
//     console.log(i);
//     document.write(` Крок № ${i} <br> <br>`);
// };

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<100; i++){
//     console.log(i);
//     document.write(` Крок № ${i} <br> <br>`);
// };

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<100; i=i+2){
//     console.log(i);
//     document.write(` Крок № ${i} <br> <br>`);
// };
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i=2; i<100; i++){
    console.log(i % 2 === 0);
    document.write(` Крок № ${i} <br> <br>`);
};

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i=1; i<100; i=i+2){
//     console.log(i/2);
//     document.write(` Крок № ${i} <br> <br>`);
// };