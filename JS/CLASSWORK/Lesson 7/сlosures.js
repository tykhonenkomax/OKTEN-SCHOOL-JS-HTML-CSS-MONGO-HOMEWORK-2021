//---------------------------------Вариант №1---------------------------------------------------------------------------

// function UserCard(key) {
//     this.key=key;
// }
//
// function Key(balance, transactionLimit, historyLogs, key) {
//     this.balance = balance;
//     this.transactionLimit = transactionLimit;
//     this.historyLogs = historyLogs;
//     this.key = key;
// };
//
//
// let card1 = new UserCard(1, new Key(100, 100, [], 1));
// console.log(card1);
// let card2 = new UserCard(2, new Key(100, 100, [], 2));
// console.log(card2);
// let card3 = new UserCard(3, new Key(100, 100, [], 3));
// console.log(card3);

//---------------------------------Вариант №2---------------------------------------------------------------------------


function UserCard(balance,transactionLimit,historyLogs,key){
    this.balance = balance;
    this.transactionLimit = transactionLimit;
    this.historyLogs = historyLogs;
    this.key = key;
}

let card1 = new UserCard(100, 100, [], 1);
let card2 = new UserCard(100, 100, [], 2);
let card3 = new UserCard(100, 100, [], 3);

function getCardOptions(numberCard) {

    if (numberCard === 1) {
        return card1;
    } else if (numberCard === 2) {
        return card2;
    } else {
        return card3;
    }
}
function putCredits(newBalans){
    card1.balance = card1.balance+newBalans
}
putCredits(150);





let result =getCardOptions(1);
console.log(result);



