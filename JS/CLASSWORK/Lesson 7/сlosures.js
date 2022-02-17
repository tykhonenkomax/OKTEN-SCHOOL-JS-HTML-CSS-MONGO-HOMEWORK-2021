function UserCard(key) {
    this.key = key;
};

function Key(balance, transactionLimit, historyLogs) {
    this.balance = balance;
    this.transactionLimit = transactionLimit;
    this.historyLogs = historyLogs;
};


let card1 = new UserCard(1, new Key(100,100,[]))
console.log(card1);
let card2 = new UserCard(2, new Key(100,100,[]))
console.log(card2);
let card3 = new UserCard(3, new Key(100,100,[]))
console.log(card3);

// let card1 = new UserCard(100, 100, [], 1);
// console.log(card1)
// let card2 = new UserCard(100, 100, [], 2);
// let card3 = new UserCard(100, 100, [], 3);
//
// function getCardOptions(numberCard) {
//
//     if (numberCard === 1) {
//         return card1;
//     } else if (numberCard === 2) {
//         return card2;
//     } else {
//         return card3;
//     }
// }
// getCardOptions(1);



