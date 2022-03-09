// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let name = document.forms.form1.name;
// let age = document.forms.form1.age;
// let button1 = document.getElementsByClassName('btn1')[0];
// let key = 'key';
//
// function personalData (name, age) {
//     let result = {
//         name: name,
//         age: age,
//     };
//     console.log(result);
//     localStorage.setItem(key, JSON.stringify(result));
// }
// button1.onclick = () => {
//     personalData(name.value, age.value);
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let modelCar = document.forms.carCatalog.model;
// let typeCar = document.forms.carCatalog.type;
// let volumeCar = document.forms.carCatalog.volume;
// let button = document.querySelector('#btn3');
//
//
// document.querySelector('#btn3').addEventListener('click', () => {
//     let newArray = [];
//     newArray.push(`modelCar: ${modelCar.value}, typeCar: ${typeCar.value}, volumeCar: ${volumeCar.value}.`)
//     localStorage.setItem('CarList', JSON.stringify(newArray))
// })

let modelCar = document.forms.carCatalog.model;
let typeCar = document.forms.carCatalog.type;
let volumeCar = document.forms.carCatalog.volume;
let button = document.querySelector('#btn2');
let key = 'key';

let dataCars = (model,  type, volume)=>{
    let newArray = JSON.parse(localStorage.setItem(key)) || [];
    newArray.push({model,type,volume})
    localStorage.setItem(key, JSON.stringify(newArray));
}
button.onclick=()=>{
    dataCars(modelCar.value, typeCar.value, volumeCar.value)
}
