// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".
// let element1 = document.createElement('div');
// element1.classList.add('text')
// element1.style.background='red';
// element1.innerHTML='ПРИВІТ ЯК СПРАВИ';
// document.body.append(element1);
// let button = document.createElement('button')
// button.innerText='PUSH'
// document.body.append(button);
//
// button.onclick=function (){
//     let text = document.getElementsByClassName('text')[0];
//     text.style.display='none'
// }

//______________________________________________________________________________________________________________________
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button2 = document.createElement('button');
// button2.innerHTML='GO';
// document.body.append(button2);
// button2.onclick=function (){
//     button2.style.display='none';
// }

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let button = document.getElementById('button1');
// button.onclick=function (){
//     let input = document.getElementById('age').value;
//     if (input < 18){
//         alert('Вибачте вам мало рочків');
//     } else if (input >= 18 ) {
//         alert('Вітаємо на нашому сайті.');
//     }
// }

//- Создайте меню, которое раскрывается/сворачивается при клике


let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};
//______________________________________________________________________________________________________________________
//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];

let divFather = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');

    h3.innerText = item.name;
    p.innerHTML = item.body;
    btn.innerHTML = 'Закрий мене'

    btn.onclick = () => {
        p.classList.add('pHidden');
        // btn.previousElementSibling.classList.add('pHidden');  // 2варінт який звертаєтсья до ПОПЕРЕДНЬОГО елементу перед btn
    }
    div.append(h3, p, btn);
    divFather.append(div, hr);
}
document.body.appendChild(divFather)






















