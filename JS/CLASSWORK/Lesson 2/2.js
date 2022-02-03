// 1 Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let containerA = +prompt('Enter a random number');
// let containerB = +prompt('Enter your lucky number');
//
// if(containerA < containerB){
//     console.log(containerB)
// }
// if(containerA > containerB){
//     console.log(containerA)
// }
// if(containerA == containerB){
//     console.log(containerA + "=" + containerB);
//     console.log('Поздравляю Вы выиграли ЖИГУЛИ!!! \'\u2588\u2588\' <--- это человечик с поднятымвведи свое счастливое числои руками:-)');
// }

// 2 У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let koristuvach = +prompt('Enter your apartment number', 'Number 1 to 90');
//
//
// if ( koristuvach  >= 1 && koristuvach <=20){
//     console.log('You live in block no. 1')
// }
// if ( koristuvach  >= 21 && koristuvach <=48){
//     console.log('You live in block no. 2')
// }
// if ( koristuvach  >= 49 && koristuvach <=90){
//     console.log('You live in block no. 3')
// }

// 3 Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
//     якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = prompt('Enter your lucky Number');
//
// if(number == 10){
//     console.log('TRUE')
// }
// else {
//     console.log('WRANG')
// }

// 4 Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = prompt('');
// if(typeof x === 'number'){
//     console.log('#1');
// }
// else if (typeof x === "string"){
//     console.log('#2');
// }
// else if(typeof x === "boolean"){
//     console.log('#3');
// }
// else if(typeof x === "object"){
//     console.log('#3');
// }
// else {
//     console.log("WRONG FORMAT");
// }


// 5 Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення
// що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = +prompt('чи ми йдемо сьогодні в OKTEN на навчання?')
// if(temp > 10 && temp < 22){
//     console.log(' Печалька Ми идем вчитись в  OKTAN WEB')
//     }
// else {
//     console.log('Ура Ура Ми сидимо вдома і вчимося ОНЛАЙН!!!')
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення
//     - що число не вірне ... .

// let yakubovich = prompt('Крути барабан', 'Вибирай цифру та виграй ПРИЗ');
// switch (yakubovich){
//     case '1':
//       console.log('Bentley');
//       break;
//     case '2':
//         console.log('Moto');
//         break;
//     case '3':
//         console.log('Canned Spins');
//         break;
//     case '4':
//         console.log('Blue pill');
//         break;
//     case '5':
//         console.log('Red pill');
//         break;
//     default:
//         console.log('Well, the number is wrong - Wake up is a terrible dream');
// }

/ напишіть це тернарним оператором