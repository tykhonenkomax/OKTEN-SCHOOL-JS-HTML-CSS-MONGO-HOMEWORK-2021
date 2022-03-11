//
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let element1 = document.getElementById('content');
console.log(element1);
// -- отримує текст з блоку з id "rules"
let element2 = document.getElementById('rules');
console.log(element2);
// -- замініть текст параграфа з id 'content' на будь-який інший
let element3=document.getElementById('content');
element3.innerText='Lorem ipsum dolor.';
// -- замініть текст параграфа з id 'rules' на будь-який інший
let element4 = document.getElementById('rules');
element4.innerText='Lorem ipsum dolor sit amet.'

// -- змініть кожному елементу колір фону на червоний
let red = document.body.children;
for (const redElement of red) {
    redElement.style.background='red';
}
// -- змініть кожному елементу колір тексту на синій
let blue = document.body.children;
for (const blueElement of blue) {
    blueElement.style.color='blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let element5 = document.getElementById('rules');
console.log(element5.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let element6 = document.getElementsByClassName('fc_rules');
for (const element6Element of element6) {
    element6Element.style.color='red';
}


