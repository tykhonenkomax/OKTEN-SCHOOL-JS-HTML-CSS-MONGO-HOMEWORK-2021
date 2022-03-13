//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//     return response.json();
// }).then(jsonResponce => {
//     let div1 = document.createElement('div');
//     div1.classList.add('divka1')
//     for (const Element of jsonResponce) {
//         let div2 = document.createElement('div2');
//         div2.classList.add('divka2')
//         div2.innerHTML = `
//         <h1>UserId: ${Element.userId}</h1>
//         <h3>Id: ${Element.id}</h3>
//         <p>Title: ${Element.title}</p>
//         <p>Body: ${Element.body}</p>
//         `;
//         div1.append(div2);
//         document.body.append(div1);
//
//     }
// });


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.commentu
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments').then(infoArray=>{
    return infoArray.json();
}).then(jasonArray=>{
    let divGeneral = document.createElement('div');
    divGeneral.classList.add('divka1');
    for (const IterArray of jasonArray) {
        console.log(IterArray);
        let div1 = document.createElement('div');
        div1.classList.add('divka2');
        div1.innerHTML=`
        Body: ${IterArray.body} <br>
        Email: ${IterArray.email} <br>
        Name: ${IterArray.name} <br>
        PostId: ${IterArray.postId} <br> <br>
        `
        divGeneral.append(div1)
        document.body.append(divGeneral)

    }

})