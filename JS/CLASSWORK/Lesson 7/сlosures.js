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


function UserCard(balance, transactionLimit, historyLogs, key) {
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

function card1TakeCredits(newBalans) {
    if(card1.balance - newBalans >=0){

    return console.error('У вас достаточно собственных стредств на картре')

} else if (card1.balance - newBalans < 0){
        return card1.balance = card1.balance - newBalans
        console.log('Дякуємо що скористались кредитним лімітом, надіюсь не помрете з Голоду')
    }
}
function card2TakeCredits(newBalans) {
    if(card1.balance - newBalans >=0){
        return console.error('У вас достаточно собственных стредств на картре')

    } else if (card1.balance - newBalans < 0){
        return card1.balance = card1.balance - newBalans
        console.log('Дякуємо що скористались кредитним лімітом, надіюсь не помрете з Голоду')
    }
}
function card3TakeCredits(newBalans) {
    if(card1.balance - newBalans >=0){
        return console.error('У вас достаточно собственных стредств на картре')
    } else if (card1.balance - newBalans < 0){
        return card1.balance = card1.balance - newBalans
        console.log('Дякуємо що скористались кредитним лімітом, надіюсь не помрете з Голоду')
    }
}

function card1PutCredits(newBalans) {
    return card1.balance = card1.balance + newBalans
}
function card2PutCredits(newBalans) {
    return card2.balance = card2.balance + newBalans
}
function card3PutCredits(newBalans) {
    return card3.balance = card3.balance + newBalans
}



let result = getCardOptions(1);
card1PutCredits(200);
card1TakeCredits(500);





console.log(result);



