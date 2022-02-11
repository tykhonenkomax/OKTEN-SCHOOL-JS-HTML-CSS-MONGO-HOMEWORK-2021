// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або
// конкатенує їх між собою.

// function f1(array){
//     let sum =0;
// for (let i=0; i<array.length; i++){
//     sum = sum +array[i];
//     }
// return sum;
// }
// let result = f1([50,50]);
// console.log(result);


//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та
// повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function f2(array1,array2) {
//
//     let sum =[];
//     for(let i = 0; i < array1.length; i++){
//         sum.push(array1[i] + array2[i]);
//     }
//     return sum;
// }
// let result = f2([25,26,27],[25,26,27]);
// console.log(result);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// let mass = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function f3(array){
//     let massNew =[];
//     for (let i = 0; i < array.length ; i++) {
//         for (let item in array[i]) {
//             massNew.push(item)
//         }
//     }
//     return massNew;
// }
// console.log(f3(mass));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
      // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// let mass = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function f3(array){
//     let massNew =[];
//     for (let i = 0; i < array.length ; i++) {
//         for (let item in array[i]) {
//             massNew.push(array[i][item])
//         }
//     }
//     return massNew;
// }
// console.log(f3(mass));

