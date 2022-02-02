//
// 1 Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('', 'Enter your number 0-59');
//
// if ( time >= 0 && time <=14) {
//     console.log('1 quarter.');
// }
// if ( time >= 15 && time <=30) {
//     console.log('2 quarter.');
// }
// if ( time >= 31 && time <=45) {
//     console.log('3 quarter.');
// }
// if ( time >= 46 && time <=59) {
//     console.log('4 quarter.');
// }

// 2 У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = prompt('', 'Enter your number 1-31');
//
// if (day < null || day === ''){
//     console.log("Let's tyr another time")
// }
//
// if ( day >= 0 && day <=10) {
//     console.log('The first decade of the month.');
//
// }
// if ( day >= 11 && day <=20) {
//     console.log('The second  decade of the month.');
//
// }
// if ( day >= 21 && day <=31) {
//     console.log(' The third  decade of the month.');
//
// }
// if ( day >= 31) {
//     console.log("Let's tyr another time");
// }

// 3 У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти
// скрипта - з коротким записом(тернаркою)

// let test = confirm('You are married?');
// if ( test === false){
//     console.log('Wrong');
// }
// if ( test === true){
//     console.log('True');
// }

// 4 Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//     що дорівнює 1, 0, -3

// let a = prompt('Enter your number Пліззз');
// if( a != 0){
//     console.log('True');
// }
// else {
//     console.log('Wrong');
// }

// 5 Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день.


// let dailyRoutine = prompt('Want to know your daily routine?', 'Enter the day of the week that interests you (1,2,3,4 ....)')
// switch (dailyRoutine) {
//     case '1':
//         console.log('Lorem ipsum dolor.');
//        break;
//     case '2':
//         console.log('Lorem ipsum dolor sit.');
//         brak;
//     case '3':
//         console.log('Lorem ipsum dolor sit amet.');
//         break;
//     case '4':
//         console.log('Lorem ipsum dolor sit.');
//         break;
//     case '5':
//         console.log('Lorem ipsum dolor.');
//         break;
//     case '6':
//         console.log('Lorem ipsum.');
//         break;
//     case '7':
//         console.log('Lorem.');
//         break;
//     default:
//         console.log('Only if it is an alien calendar')
// }


// 6 Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = prompt('Do you want to know if you were born in a high year or not?', 'Write your year of birth (eg 1984)')
// let result = Number.isInteger(year/4);
// if( result == true ){
//     console.log('YEEEP');
// }
// else {
//     console.log('SORYAMBA');
// }


// 7 Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let js = prompt('Яка «офіційна» назва JavaScript?');
// if( js == 'ECMAScript'){
//     console.log('Правильно!');
//     }
// else {
//     console.log('Не знаєте? ECMAScript!');
// }