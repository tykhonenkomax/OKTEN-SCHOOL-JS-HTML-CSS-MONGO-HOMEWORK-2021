// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".
// let div = document.createElement('div');
// div.classList.add('text');
// document.body.appendChild(div)
// let btn1 = document.getElementById('btn1');
// btn1.onclick = function () {
//     div.style.display = 'none'
// }
//______________________________________________________________________________________________________________________
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn2 = document.getElementById('btn2')
// btn2.onclick = function () {
//     btn2.style.display = 'none';
// }
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// document.getElementById('btn3').onclick = function () {
//     let inputValue = document.getElementById('input').value;
//     if (!inputValue ) {
//         alert('Чувак ти смішний')
//     } else if (inputValue > 18) {
//         alert('Айда в доросле життя!!!')
//     } else if (inputValue <= 18) {
//         alert('Ти ще маленький для цього багна!!!')
//     }
// }

//- Создайте меню, которое раскрывается/сворачивается при клике

// let menuElement = document.querySelector('.menu');
// let titleElement = menuElement.querySelector('.title');
//
// titleElement.onclick = function () {
//     menuElement.classList.toggle('hidden');
// };
//______________________________________________________________________________________________________________________
//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let loc = localStorage.getItem('key1');
console.log(loc)

document.cookie = 'name=kokos';
console.log(document.cookie)






















