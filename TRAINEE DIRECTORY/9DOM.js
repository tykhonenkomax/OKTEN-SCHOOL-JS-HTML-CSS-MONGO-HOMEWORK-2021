// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// let task1 = document.createElement('div');
// task1.classList.add('wrap');
// task1.classList.add('collapse');
// task1.classList.add('alpha');
// task1.classList.add('beta');
// console.log(task1)
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// task1.style.background='tomato';
// task1.style.color='black';
// task1.style.fontSize='25px';
// - додати цей блок в body.
// task1.innerText='jhfkfhkfkf'
// document.body.append(task1)
// - клонувати його повністю, та додати клон в body.
// let task1a = task1.cloneNode(true);
// document.body.append(task1a);

//_____________________________________________________________________________________________________________________
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let array = ['Main','Products','About us','Contacts'];
// let ul = document.getElementsByClassName('menu')[0];
// for (const string of array) {
//     let li = document.createElement('li');
//     li.innerHTML=`${string}`;
//     ul.append(li);
//        }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//
//     for (const coursesAndDurationArrayElementKey in coursesAndDurationArrayElement) {
//         console.log(coursesAndDurationArrayElementKey)
//         console.log(coursesAndDurationArrayElement[coursesAndDurationArrayElementKey])
//         let array = document.createElement('div');
//         array.innerHTML=`${coursesAndDurationArrayElementKey}: ${coursesAndDurationArrayElement[coursesAndDurationArrayElementKey]};`
//         document.body.append(array);
//         }
//
//     }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
//     з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     console.log(coursesAndDurationArrayElement)
//     let div1 = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     div1.classList.add('item')
//     h1.classList.add('heading')
//     p.classList.add('description')
//     h1.innerText=coursesAndDurationArrayElement.title;
//     p.innerText=coursesAndDurationArrayElement.monthDuration;
//     div1.append(h1);
//     div1.append(p);
//     document.body.append(div1)
//
// }