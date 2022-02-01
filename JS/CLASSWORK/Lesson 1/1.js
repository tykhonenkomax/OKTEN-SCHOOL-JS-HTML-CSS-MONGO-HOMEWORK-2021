//
// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.

// вариан №1

let result = 0;
let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for ( i = 0; i <mass.length; i++){
   result =result + (mass[i]);
}
console.log(result);

// вариан №2

let mass = [34,71.2, 13, 44, 15, 26, 17, 38, 19, 10.3];
let result = (mass[0] + mass[1] + mass[2] + mass[3]+ mass[4] + mass[5]+ mass[6]+ mass[7]+ mass[8]+ mass[9]);
console.log(Math.floor(result));


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book1 = {
 name: 'Perry Mason',
   numberOfPages: '79',
   genre: 'detective'
};


// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
   name: 'Perry Mason',
   numberOfPages: '79',
   genre: 'detective',
   author: 'Erle Stanley Gardner'
};


// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let bookMass = [book1, book2];
console.log(bookMass[0]);
console.log(bookMass[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = (height*width);
console.log(s);


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let PI = 3.14;
let radius = (dC / 2);
let v = (PI * (radius**2)*10)
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow
// (число, ступінь) або оператор зведення в ступінь **).
let n =3;
let m = 4;
let k = Math.sqrt(n*n+m*m);
console.log(k);

//Если нужно помудохаюсь с помощью Math.pow, просто нашел Math.sqrt(более быстрый способ);


