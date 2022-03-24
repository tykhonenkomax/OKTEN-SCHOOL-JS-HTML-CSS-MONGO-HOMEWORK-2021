// let clock = 9;
// function myWork(wakeUp){
//     let time = 8;
//     return new Promise((resolve, reject) => {
//         if (wakeUp < time){
//             resolve('Це занадто рано ще посплю')
//         }else {
//             reject('Бля вже 8:00 тре вставати на роботу')
//         }
//     })
// }
// myWork(clock).then(value => {
//     console.log(value)
// })
// .catch(reason => {
//     console.log(reason)
// })


let clock =6;

function myWork(wakeUp, callback){
    setTimeout(()=>{
        let time = 8;
        if (wakeUp > time){
            console.log('Бля вже 8:00 тре вставати на роботу', null)
        }else {
            console.log(null, 'Це занадто рано ще посплю' )
        }
    },2000)

}
myWork(clock, (negative, positive)=>{
    if(negative){
        console.log(negative)
    }else {
        console.log(positive)
    }
})