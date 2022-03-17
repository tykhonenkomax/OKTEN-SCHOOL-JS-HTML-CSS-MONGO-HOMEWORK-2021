// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users').then(responce => {
    return responce.json()
}).then(responceJson => {
    for (let objectIter of responceJson) {
        for (let objectIter2 in objectIter) {
            // console.log(objectIter)
            let divGeneral = document.createElement('div');
            if(objectIter2 != 'address' && objectIter2 != 'company') {
               // console.log(objectIter.address.geo)
                let div1 = document.createElement('div')
                div1.innerHTML = `
                ${objectIter2}: ${objectIter[objectIter2]}`
                divGeneral.append(div1)
                }else if (objectIter2 === 'address' && objectIter2 === 'company'){
                for (const divGeneralElement in objectIter.address.geo) {
                    console.log(divGeneralElement)
                    let div2 = document.createElement('div')
                    div2.innerHTML=`
                    ${divGeneralElement}:${objectIter.address.geo[divGeneralElement]}
                    `
                    div1.append(div2);

                }
            }







                document.body.append(divGeneral)
    }

}})
