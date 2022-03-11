//    Взяти файл template_2.html та працювати в ньому
//    1) Напишіть код, який :
//    a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let task1 = document.getElementById('main_header');
task1.innerText = 'DECEMBER-2022';

//    b) робить шириниу елементу ul 400px

let task2 = document.getElementsByTagName('ul');
console.log(task2);
task2[0].style.width = '400px';
task2[0].style.border = '2px solid red';

//    c) робить шириниу всіх елементів з класом linkList шириною 50%
let task3 = document.getElementsByClassName('linkList');
for (const task3Element of task3) {
    task3Element.style.width='50%';
    task3Element.style.border='2px solid red';
}
//    d) отримує текст який зберігається в елементі з класом listElement2
let task4 = document.getElementsByClassName('listElement2');
console.log(task4);
task4[0].innerHTML='<a href="#">CHIK CHIRIK</a>'

//    e) отримує всі елементи li та змінює ім колір фону на сірий

let task5 = document.getElementsByTagName('li');
console.log(task5);
for (const task5Element of task5) {
    task5Element.style.background='grey';
}

//    f) отримує всі елементи 'a' та додає їм клас anchor;
let task6 = document.getElementsByTagName('a');
for (const task6Element of task6) {
    task6Element.classList.add('anchor');
    console.log(task6Element);
}

//    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let task7 = document.getElementsByTagName('a');
for (const task7Element of task7) {
    console.log(task7Element)
    if (task7Element.innerText === 'link3'){
        task7Element.style.fontSize='40px'
    }
}
//    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let task8 = document.getElementsByTagName('a');
// console.log(task8);
// for (const task8Element of task8) {
//     task8Element.classList.add('element_XXX');
// let newLink = task8Element.innerText;
//     console.log(newLink)
//     task8Element.classList.add(`element_${newLink}`)
// }

//    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let task9 = document.getElementsByClassName('sub-header');
// console.log(task9);
// for (const task9Element of task9) {
//     task9Element.style.background=prompt('input your color', 'green, black, grey....' )
// }
// //    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let task10 = document.getElementsByClassName('sub-header');
// for (const task10Element of task10) {
//     if (task10Element.innerText === 'content 2 segment')
//     task10Element.style.background=prompt('input your color', 'green, black, grey....' )
// }
//    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let task11 = document.getElementsByClassName('content_1');
// for (const task11Element of task11) {
//     task11Element.innerText=prompt('Put your text', 'green, black, grey....')
// }
//    l) отримати елементи p та змінити їм padding на 20px

// let task12 = document.getElementsByTagName('p');
// for (const task12Element of task12) {
//     task12Element.style.padding='20px'
// }

//    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let task13 = document.getElementsByClassName('text2');
// for (const task13Element of task13) {
//     task13Element.innerText='DECEMBER-2022'
// }