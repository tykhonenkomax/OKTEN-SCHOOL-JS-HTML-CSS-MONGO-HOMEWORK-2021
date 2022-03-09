// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//


// document.querySelector('.btn1').addEventListener('click', ()=>{
//     let valueInput1 = document.querySelector('.input1').value;
// localStorage.setItem('NAME', JSON.stringify(valueInput1))
// })
// document.querySelector('.btn2').addEventListener('click',()=>{
//     let valueInput2 = document.querySelector('.input2').value;
//     localStorage.setItem('AGE', JSON.stringify(valueInput2))
// })

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let modelCar = document.forms.carCatalog.model;
let typeCar = document.forms.carCatalog.type;
let volumeCar = document.forms.carCatalog.volume;
let button = document.querySelector('#btn3');


document.querySelector('#btn3').addEventListener('click',()=>{
    let newArray = [];
    newArray.push(`${modelCar.value} ${typeCar.value} ${volumeCar.value}`)
    localStorage.setItem('ARRAY', JSON.stringify(newArray))
})

