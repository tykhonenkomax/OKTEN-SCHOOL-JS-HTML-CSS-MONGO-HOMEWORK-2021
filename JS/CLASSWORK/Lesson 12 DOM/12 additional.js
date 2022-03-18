// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    let divGeneral = document.createElement('div')
    for (const object1 of data) {

        for (const Key1 in object1) {
            console.log(Key1)

            if (typeof object1[Key1] !== 'object') {
                let div1 = document.createElement('div');
                div1.innerHTML = `
                ${Key1}: ${object1[Key1]}`
                divGeneral.append(div1)
            } else {
                let div3 = document.createElement('div');
                div3.innerHTML = `${Key1}:`
                divGeneral.append(div3)
                for (const Key2 in object1[Key1]) {


                    if (typeof object1[Key1][Key2] !=='object') {

                        let div5 = document.createElement('div');
                        div5.innerHTML = `${Key2}:${object1[Key1][Key2]}`
                        divGeneral.append(div5)
                    }

                    let div2 = document.createElement('div');
                    div2.innerHTML = `${Key2}:`

                    if (typeof object1[Key1][Key2] === 'object') {

                        for (const key2Key in object1[Key1][Key2]) {

                            let div4 = document.createElement('div')
                            div4.innerHTML = `
                            ${key2Key}: ${object1[Key1][Key2][key2Key]}
                            `
                            div2.append(div4)
                        }
                        divGeneral.append(div2)
                    }
                }

            }

        }
        document.body.append(divGeneral);
    }

})




