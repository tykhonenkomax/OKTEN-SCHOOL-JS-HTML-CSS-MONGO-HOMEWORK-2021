//  // 1.
// //  Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//  // https://jsonplaceholder.typicode.com/posts
// //     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts').then(responce => {
    return responce.json();
}).then(jsonResponce => {
    let generalDiv = document.createElement('div');

    for (const IterationJason of jsonResponce) {
        let objecktDiv = document.createElement('div');
        objecktDiv.classList.add('divClass')
        let btn1 = document.createElement('button');
        btn1.classList.add('buttonClass')
        objecktDiv.innerHTML = `
        <h3 class="h3Class">UserId: ${IterationJason.userId}</h3>
        <h5 class="h5Class" >Id: ${IterationJason.id}<h5>
        <p class="p1Class">TITLE: ${IterationJason.title}</p> <br>
        <p class="p2Class">BODY: ${IterationJason.body}</p> <br>
        `;


        btn1.innerText = `Read The Comments Id: ${IterationJason.id}`;
        btn1.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + IterationJason.id + '/comments').then(responceComment => {
                return responceComment.json();
            }).then(jasonResponceComments => {
                let commentDiv = document.createElement('div');
                for (const posts of jasonResponceComments) {
                    commentDiv.innerHTML = `
                    email: ${posts.email}<br>
                    name: ${posts.name}<br>
                    `;
                    objecktDiv.append(commentDiv)

                }
            })
        }
        generalDiv.append(btn1)
        generalDiv.append(objecktDiv);
        document.body.append(generalDiv);

    }
});


