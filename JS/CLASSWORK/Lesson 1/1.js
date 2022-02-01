//
// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.
// let result = 0;
// let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for ( i = 0; i <11; i++){
//    result += i;
// }
// console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

// let book1 = {
//  name: 'Perry Mason',
//    numberOfPages: '79',
//    genre: 'detective'
// };


// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book2 = {
//    name: 'Perry Mason',
//    numberOfPages: '79',
//    genre: 'detective',
//    author: 'Erle Stanley Gardner'
// };


// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

// let bookMass = [book1, book2];
// console.log(bookMass[0]);
// console.log(bookMass[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

// let height = 23;
// let width = 10;
// let s = ((height*width)/2);
// console.log(s);


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// let heightC = 10;
// let dC = 4;
// let PI = 3.14;
// let radius = (dC / 2);
// let v = (PI * (radius**2)*10)
// console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow
// (число, ступінь) або оператор зведення в ступінь **).
let n =3;
let m = 4;
let k= Math.pow(n, 2) + Math.pow(m, 2);
console.log(Math.pow(k, 2));

