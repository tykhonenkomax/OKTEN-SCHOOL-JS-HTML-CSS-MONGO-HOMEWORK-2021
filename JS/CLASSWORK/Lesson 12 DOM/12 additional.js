// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    let divGeneral = document.createElement('div')
    divGeneral.classList.add('divGeneral')
    for (const object1 of data) {

        let btn1 = document.createElement('button');
        let divComments = document.createElement('div');
        divComments.classList.add('posts')
        btn1.innerHTML = 'Posts';
        btn1.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/posts').then(response2 => {
                return response2.json();
            }).then(dataPosts => {
                for (const dataPost of dataPosts) {
                    for (const postKey in dataPost) {
                        divComments.innerHTML = `${dataPost[postKey]}`;


                        let divComments2 = document.createElement('div');
                        divComments2.classList.add('posts')
                        let divComments2a = document.createElement('div');
                        divComments2a.classList.add('postsA')
                        let btn2 = document.createElement('button');
                        btn2.innerHTML = 'Comments';
                        btn2.onclick = () => {
                            fetch('https://jsonplaceholder.typicode.com/comments').then(response3 => {
                                return response3.json();
                            }).then(dataComments => {
                                for (const dataComment of dataComments) {
                                    for (const CommentKey in dataComment) {
                                        divComments2.innerHTML = `${dataComment[CommentKey]}`;
                                        console.log(dataComment[CommentKey])

                                    }

                                }
                            })
                        }
                        divComments.append(divComments2a);
                        divComments.append(btn2)
                        divComments.append(divComments2);

                    }


                }
            })
        }


        for (const Key1 in object1) {
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


                    if (typeof object1[Key1][Key2] !== 'object') {

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


                        }

                        divGeneral.append(div2)
                    }

                }

            }


        }

        document.body.append(divGeneral);

        divGeneral.append(btn1);

        divGeneral.append(divComments);



    }

})




