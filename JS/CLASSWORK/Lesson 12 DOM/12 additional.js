// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users').then(responce => {
    return responce.json()
}).then(responceJson => {
    for (const objectIter of responceJson) {
        let divObject = document.createElement('div');
        if (objectIter === 'address') {
            for (const divObjectKey in objectIter.address) {
                let objectIter2 = document.createElement('div')
                objectIter2.innerHTML = `
        street: ${divObjectKey.street}
        suite: ${divObjectKey.suite}
         city: ${divObjectKey.city}
        zipcode: ${divObjectKey.zipcode}
        `
                divObject.append(objectIter2);

            } if (objectIter === 'geo') {
                for (const divObjectElement in objectIter.geo) {
                    let objectIter3 = document.createElement('div')
                    objectIter3.innerHTML = `
        lat: ${divObjectElement.lat}
        lng: ${divObjectElement.lng}
        `
                    divObject.append(objectIter3);
                }
            } else {
                let objectIter4 = document.createElement('div')
                objectIter4.innerHTML = `
                id: ${divObjectKey.id}
                    name: ${divObjectKey.name}
                        username: ${divObjectKey.username}
                            email: ${divObjectKey.email}
                            `
                divObject.append(objectIter4);
                                }
        }




        document.body.append(divObject)
    }

})