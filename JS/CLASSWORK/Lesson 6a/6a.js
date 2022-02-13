// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// --------------Не уневерсально като-то даже в ответах, потом попробую сделать валидацию для всех символов---------------

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let foo1 = (a,b,c)=>{
//     let newN1 =a.replaceAll('..', ' ');
//     console.log(newN1);
//     let newN2 =b.replaceAll('---', ' ');
//     console.log(newN2);
//     let newN3 =c.replaceAll('__', ' ');
//     console.log(newN3);
// }
// foo1(n1,n2,n3)

//
// -----------------------------------------------------------------------------------------------------------------------
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// let foo2 = (length, max) => {
//     let newArray = [];
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.floor(Math.random() * max));
//     }
//     return newArray;
// };
// let result = foo2(15, 100);
// console.log(result);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

// let foo3 = (length, max) => {
//     let newArray = [];
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.floor(Math.random() * max));
//     }
//     return newArray.sort((a, b)=> a-b);
// };
// let result = foo3(15, 100);
// console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, залишивши тільки парні числа

// let foo4 =(lenght, max)=>{
//     let newArray = [];
//     for (let i = 0; i <lenght ; i++) {
//         newArray.push(Math.floor(Math.random()*max))
//     }
//     return newArray.filter((elemArray)=>elemArray%2==0);
// }
// let result = foo4(10,100);
// console.log(result);

// let foo4 =(lenght, max)=>{
//     let newArray = [];
//     for (let i = 0; i <lenght ; i++) {
//         newArray.push(Math.floor(Math.random()*max))
//     }
//     return newArray.filter((elemArray)=>elemArray%2==0);
// }
// let result = foo4(10,100);
// console.log(result);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let foo4 =(lenght, max, callback)=>{
    let newArray = [];
    for (let i = 0; i <lenght ; i++) {
        newArray.push(Math.floor(Math.random()*max))
    }
    return newArray.filter((elemArray)=>elemArray%2==0);

}
let newArray2 =()=>{
    return newArray.map(mass=>mass.toString())}

let result = foo4(10,100,newArray);
console.log(result);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
