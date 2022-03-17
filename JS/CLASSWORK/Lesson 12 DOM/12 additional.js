// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
let divGeneral = document.createElement('div')
    for (const object1 of data) {

        for (const Key1 in object1) {

            if (typeof object1[Key1] !== 'object') {

                let div1 = document.createElement('div');
                div1.innerHTML=`
                ${Key1}: ${object1[Key1]}
                `
                divGeneral.append(div1)
             }else{
                for (const Key2 in object1[Key1]) {
                    let div2 = document.createElement('div');

                    div2.innerHTML=`
                ${Key2}: ${object1[Key1][Key2]}
                `
                    divGeneral.append(div2)

                }

            }

    }

}
    document.body.append(divGeneral);
})


