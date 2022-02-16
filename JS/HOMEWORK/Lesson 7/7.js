////--------------------------------------------------------------------------------------------------------------------
// 1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone




function  User(userId, userName, userSurname, userEmail,userPhone){
    this.id=userId
    this.name=userName;
    this.surname=userSurname;
    this.email=userEmail;
    this.phone=userEmail;

}
////--------------------------------------------------------------------------------------------------------------------
let freeNewArray = [];

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let user1 = new User(2574628,'Max','Tykhonenko','tikhonenko.m@gmail.com', 0676714046 );
freeNewArray.push(user1);
console.log(freeNewArray);

let user2 =  new User(252525, 'Sergey', 'Kolesnik', 'biohazard@gmail.com',0675325252);
freeNewArray.push(user2);
console.log(freeNewArray);

let user3 = new User(252526, 'Vasil', 'Kucheruk', 'kukr@gmail.com',0676767676);
freeNewArray.push(user3);
console.log(freeNewArray);

let user4 = new User(252527, 'Yuriy', 'Laguta', 'laguta.y@gmail.com',0676767678);
freeNewArray.push(user4);
console.log(freeNewArray);

let user5 = new User(252528, 'Roman', 'Yurchuk', 'yurchuk.r@gmail.com',0676767679);
freeNewArray.push(user5);
console.log(freeNewArray);

let user6 = new User(252529, 'Igor', 'Igorovich', 'igorovich.i@gmail.com',0676767679);
freeNewArray.push(user6);
console.log(freeNewArray);

let user7 = new User(252510, 'Mikola', 'Fedechko', 'fedechko.m@gmail.com',0676767680);
freeNewArray.push(user7);
console.log(freeNewArray);

let user8 = new User(252511, 'Volodya', 'Perun', 'perun.v@gmail.com',0676767681);
freeNewArray.push(user8);
console.log(freeNewArray);

let user9 = new User(252512, 'Vlad', 'Khalil', 'khalil.v@gmail.com',0676767682);
freeNewArray.push(user9);
console.log(freeNewArray);

let user10 = new User(252513, 'Valentin', 'Manik', 'Manik.v@gmail.com',0676767682);
freeNewArray.push(user10);
console.log(freeNewArray);


////--------------------------------------------------------------------------------------------------------------------
// 2- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let result2Task = freeNewArray.filter(function (arayyFiltred){ return arayyFiltred.id % 2 === 0 });
console.log(result2Task);

////--------------------------------------------------------------------------------------------------------------------
// 3- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let result3Task = freeNewArray.sort(function (a, b){return a.id-b.id})
console.log(result3Task)

////--------------------------------------------------------------------------------------------------------------------
// 4- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
new Client(254516,'Max','Tykhonenko','tikhonenko.m@gmail.com', 0676714046,['apple','cherry','mango','banana','orange']);
console.log(Client);


////--------------------------------------------------------------------------------------------------------------------
// 5 створити пустий масив, наповнити його 10 об'єктами Client

let emptyArray =[
    new Client (2574628,'Max','Tykhonenko','tikhonenko.m@gmail.com', 0676714046),
    new Client (252525, 'Sergey', 'Kolesnik', 'biohazard@gmail.com',0675325252),
    new Client (252526, 'Vasil', 'Kucheruk', 'kukr@gmail.com',0676767676),
    new Client (252527, 'Yuriy', 'Laguta', 'laguta.y@gmail.com',0676767678),
    new Client (252528, 'Roman', 'Yurchuk', 'yurchuk.r@gmail.com',0676767679),
    new Client (252529, 'Igor', 'Igorovich', 'igorovich.i@gmail.com',0676767679),
    new Client (252510, 'Mikola', 'Fedechko', 'fedechko.m@gmail.com',067676768),
    new Client (252511, 'Volodya', 'Perun', 'perun.v@gmail.com',0676767681),
    new Client (252512, 'Vlad', 'Khalil', 'khalil.v@gmail.com',0676767682),
    new Client (252513, 'Valentin', 'Manik', 'Manik.v@gmail.com',0676767682)
];
console.log(emptyArray);

// 6 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let resultTask6 = client.order.sort(function (a,b){return a.order-b.order});
// console.log(resultTask6);