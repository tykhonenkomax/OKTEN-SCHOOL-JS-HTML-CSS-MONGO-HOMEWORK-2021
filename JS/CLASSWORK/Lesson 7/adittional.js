// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// function PersonData(id, phone, website, company) {
//     this.id = id;
//     this.phone = phone;
//     this.website = website;
//     this.company = company;
// };
//
// function Id(name, username, email, address) {
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = address;
// };
//
// function Adress(street, suite, city, zipcode, geo) {
//     this.street = street;
//     this.suite = suite;
//     this.zipcode = zipcode;
//     this.geo = geo;
// }
//
// function Geo(lat, lng) {
//     this.lat = lat;
//     this.lng = lng;
// }
//
// function Company(name, catchPhrase, bs) {
//     this.name = name;
//     this.catchPhrase = catchPhrase;
//     this.bs = bs;
// }
//
//
// let newPersonData = new PersonData(new Id('Leanne Graham', 'Sincere@april.biz', 'Sincere@april.biz',
//         (new Adress('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', new Geo('-37.3159', '81.1496')))),
//     '1-770-736-8031 x56442', 'hildegard.org', new Company('Romaguera-Crona', 'Multi-layered client-server neural-net',
//         'harness real-time e-markets'));
// console.log(newPersonData);

//
// class Task2 {
//     constructor(nameTeg, descriptionTeg, atributsTeg) {
//         this.nameTeg = nameTeg;
//         this.descriptionTeg = descriptionTeg;
//         this.atributsTeg = atributsTeg;
//     }
// }
//
// function Atribut(nameAtribut1, descriptionAtribut1, nameAtribut2, descriptionAtribut2, nameAtribut3, descriptionAtribut3) {
//     this.nameAtribut1 = nameAtribut1;
//     this.descriptionAtribut1 = descriptionAtribut1;
//     this.nameAtribut2 = nameAtribut2;
//     this.descriptionAtribut2 = descriptionAtribut2;
//     this.nameAtribut3 = nameAtribut3;
//     this.descriptionAtribut3 = descriptionAtribut3;
// }
//
// let changeTask2 = new Task2('Тег <a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//     new Atribut('accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'coords', 'Устанавливает координаты активной области.',
//         'download', 'Предлагает скачать указанный по ссылке файл.'));
// console.log(changeTask2);


class Task3 {
    constructor(nameTeg, descriptionTeg, atributsTeg) {
        this.nameTeg = nameTeg;
        this.descriptionTeg = descriptionTeg;
        this.atributsTeg = atributsTeg;
    }
}
    function Atribut3(name, description, name2, description2) {
        this.name = name;
        this.description = description;
        this.name2 = name2;
        this.description2 = description2;

    };


let resultTask3 = new Task3('Тег <div>', 'Элемент <div> является блочным элементом и предназначен для выделения ' +
    'фрагмента документа с целью изменения вида содержимого.', new Atribut3('align', 'Задает выравнивание содержимого тега <div>.',
    'title', 'Добавляет всплывающую подсказку к содержимому.'))
console.log(resultTask3);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту


// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }