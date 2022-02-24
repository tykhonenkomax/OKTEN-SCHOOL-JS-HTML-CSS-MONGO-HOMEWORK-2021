let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let newUsers=[...users]
// let newArray =[];
// for (const newUser of newUsers) {
//     for (const newUserKey in newUser.address) {
//         newArray.push(newUserKey)
//         newArray.push(newUser.address[newUserKey])
//     }
// }
// console.log(newArray)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
//
// let newUsers2 =[...users];
// let divGeneral = document.createElement('div');
// for (const newUser of newUsers2) {
//     let div1=document.createElement('div');
//     let br=document.createElement('br')
//     div1.innerHTML=`name: ${newUser.name}  <br> age: ${newUser.age} <br> status: ${newUser.status} <br> address: <br>
// city: ${newUser.address.city} <br> country: ${newUser.address.country} <br> street: ${newUser.address.street}
// <br> houseNumber: ${newUser.address.houseNumber}`
//     divGeneral.append(div1);
//     divGeneral.append(br);
//
// }
//
// document.body.append(divGeneral);

// --------------------------------------------------------Вариант2-----------------------------------------------------
//
//     let newUsers2 =[...users];
// let divGeneral = document.createElement('div');
// for (const newUser of newUsers2) {
//     let br=document.createElement('br');
//     for (const youserKey in newUser) {
//         if (youserKey ==='address'){
//             let divAddress = document.createElement('ul')
//             divAddress.innerText = 'address';
//             for (const item in newUser[youserKey]) {
//                 let field = document.createElement('li')
//                 field.innerText = `${item} : ${newUser[youserKey][item]}`;
//                 divAddress.append(field)
//             }
//             divGeneral.append(divAddress)
//
//         }else {
//             let userProperty = document.createElement('div');
//             userProperty.innerText = `${youserKey} : ${newUser[youserKey]}`;
//             divGeneral.append(userProperty)
//         }
//     }
//     divGeneral.append(br);
//
// }
//
// document.body.append(divGeneral);
// ---------------------------------------------------------------------------------------------------------------------
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
let users3 =[...users];
let divGeneral = document.createElement('div')

for (const users3Iter1 of users3) {

    let br=document.createElement('br');
    for (const users3Iter1Key in users3Iter1) {
        if (users3Iter1Key === 'name'){
            let div1=document.createElement('div1');
            div1.innerHTML=`${users3Iter1Key}: ${users3Iter1[users3Iter1Key]} <br>`
            divGeneral.append(div1);
        }else if (users3Iter1Key === 'age'){
            let div2=document.createElement('div2');
            div2.innerHTML=`${users3Iter1Key}: ${users3Iter1[users3Iter1Key]} <br>`
            divGeneral.append(div2);
        }else if (users3Iter1Key === 'status'){
            let div3=document.createElement('div3');
            div3.innerHTML=`${users3Iter1Key}: ${users3Iter1[users3Iter1Key]} <br>`
            divGeneral.append(div3);
        } else if (users3Iter1Key ==='address'){
            for (const users3Iter2Key in users3Iter1[users3Iter1Key] ) {

                let div4=document.createElement('div4');
                div4.innerHTML=`${users3Iter2Key}: ${users3Iter1[users3Iter1Key][users3Iter2Key]} <br>`
                divGeneral.append(div4);
            }
        }
    }

divGeneral.append(br)
}
document.body.append(divGeneral);


// ---------------------------------------------------------------------------------------------------------------------
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// ---------------------------------------------------------------------------------------------------------------------

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему
// контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// ---------------------------------------------------------------------------------------------------------------------
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило
// в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];