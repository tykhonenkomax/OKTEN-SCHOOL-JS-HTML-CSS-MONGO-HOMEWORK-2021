// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,' +
// ' максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, madeIn, year, maxSpeed, engineCapacity){
//     this.moder = model;
//     this.madeIn = madeIn;
//     this.year =  year;
//     this.maxSpeed = maxSpeed;
//     this.engineСapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину.`);
//     }
//     this.info = function (){
//         for (let carObject in this) {
//             if (typeof this[carObject] !== "function")
//             console.log(`${carObject} - ${this[carObject]}`);
//
//         }
//     };
//         this.superSpeed = function (newSpeed){
//             this.maxSpeed = newSpeed;
//         };
//
//     this.changeYear = function (newValue){
//        this.year = newValue;
//     };
//     this.addDriver = function (driver){
//         this.addDriver = driver;
//     };
//
// }
//
// let newCar = new Car('Ford','theUSA',2022,220,2.5);
// console.log(newCar)
// newCar.drive();
// newCar.info();
// newCar.superSpeed(100500)
// newCar.drive();
// newCar.changeYear(1969)
// newCar.info();
// newCar.addDriver('Max')
// console.log(newCar);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна ' +
// 'швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car2 {
//     constructor(model, madeIn, year, maxSpeed, engineСapacity) {
//         this.model = model;
//         this.madeIn = madeIn;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineСapacity = engineСapacity;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`)
//         };
//
//         this.info = function () {
//             for (let car2Key in this) {
//                 if (typeof this[car2Key] !== 'function') {
//                     console.log(`${car2Key} - ${this[car2Key]}`)
//                 }
//             }
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = newSpeed;
//
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//
//         this.addDriver = function (driver) {
//             this.addDriver = driver;
//         }
//     }
//
// };
//
//
// console.log(myCar = new Car2('Ford Mustang Shelby', 'USA', 1969, 300, 2.8));
// myCar.drive(300);
// myCar.info();
// myCar.increaseMaxSpeed(60);
// console.log(myCar);
// myCar.changeYear(2020);
// console.log(myCar);
// myCar.addDriver('Vuychik');
// console.log(myCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.

class Popelyushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
};
//-Створити масив з 10 попелюшок.

let PopelyushkaCity = [
    new Popelyushka('Vasya',25, 42),
    new Popelyushka('Ira',30, 45),
    new Popelyushka('Dima',20, 39),
    new Popelyushka('Shurik',25, 43),
    new Popelyushka('Aram',45, 38),
    new Popelyushka('Inna',35, 42),
    new Popelyushka('Ruben',55, 46),
    new Popelyushka('Anna',15, 37),
    new Popelyushka('Rulya',35, 41.5)
]
console.log(PopelyushkaCity);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}
let hero = new Prince('Mamduh', 55, 46);
console.log(hero)


//За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let oneLove = (popelyushkaCity,prince)=>{
    for (let popelyushkaCityElement of popelyushkaCity) {
        if(popelyushkaCityElement.footSize === hero.foot){
           return `Наша новая пара: ${popelyushkaCityElement.name} + ${hero.name} = ONE LOVE!!!`
        }
    }
}
console.log(oneLove(PopelyushkaCity, hero));

//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let dodatkovo = PopelyushkaCity.find((serch)=>serch.footSize === hero.foot);
console.log(dodatkovo);
