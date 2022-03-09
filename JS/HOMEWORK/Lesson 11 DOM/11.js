// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//


document.querySelector('.btn1').addEventListener('click', ()=>{
    let valueInput1 = document.querySelector('.input1').value;
localStorage.setItem('NAME', JSON.stringify(valueInput1))
})
document.querySelector('.btn2').addEventListener('click',()=>{
    let valueInput2 = document.querySelector('.input2').value;
    localStorage.setItem('AGE', JSON.stringify(valueInput2))
})




// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
