// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// const cutString=(str, n)=> {
//     let newArray = [];
//     for (let i = 0; i < str.length; i +=n) {
//         newArray.push(str.slice(i,i+n))
//     }
//     return newArray;
// }
// document.writeln(cutString('наслаждение',3));

// ---------------------------------ЭТУ ТАСКУ ЕЩЕ НЕ РЕШИЛ ПОКА ДУМАЮ КАК СДЕЛАТЬ------------------------------------

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// ---№ 1 перевожу мыло в масив и реверсую его для удобства обработки---------------------------------------------------

let mail = prompt('ВВЕДИТЕ СВОЙ EMAIL:', 'ПРИМЕР someemail@gm.com');
let mailArray = mail.split('').reverse();

// ---№ 2 валидую на наличие @ в мыле-----------------------------------------------------------------------------------

let earValidation = (a)=>{
    if (a.includes('@')){
        return 1}
 else {return 0}

}
console.log(earValidation(mailArray));;

// ---№ 3 валидую что собачка не может быть первой----------------------------------------------------------------------
let ear2Validetion =(a)=> {
    if (a.indexOf('@') === 0) {
        return 0;
    } else {
        return 1}
}
console.log(ear2Validetion(mail));

// ---№ 4 собачка находится на растоянии двух сиволов от точки----------------------------------------------------------
let earNearDot =(a)=> {
    let distanceIndex = (a.indexOf('.')-a.indexOf('@'));
    if (distanceIndex<=2) {
        return 0;
    } else {
        return 1}
}
console.log(earNearDot(mail));

// ---№ 5 валидую одной двух или трех букв после точки------------------------------------------------------------------

let dotValidetion =(a)=> {
    if ((a.indexOf('.') >= 2)) {
        return 1}
    else {return 0}
}
console.log(dotValidetion(mailArray));;

// ---Результат Валидации-----------------------------------------------------------------------------------------------


const resultValidation=(ear, ear1, eaeDot, dot)=>{
let y =ear + ear1 + eaeDot + dot;
    if ( y === 5) {
        return 'Спасибо за регистрацию Приятного пользования'
    }else { return 'Попробуйте еще раз, Ваш e-mail введен некоректно!!!'}

}
console.log(resultValidation(earValidation,ear2Validetion,earNearDot,dotValidetion));



// ---------------------------------------------------------------------------------------------------------------------

// - є масив відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// const sortedCourses = coursesArray.sort(function (one, other) {
//     return other.modules.length - one.modules.length;
// });
//
// console.log('sorted courses', sortedCourses)


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// const count =(str, stringsearch)=>{
//     return  str.split("", stringsearch).length;
// }
// console.log(count("Астрономия это наука о небесных объектах", 5));;

// // -------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";

// const cutString = (str, n)=>{return  str.split(" ", n);}
// console.log(cutString("Сила тяжести приложена к центру масс тела", 3));

// -------------------------------------------------------------------------------------------------------------------


