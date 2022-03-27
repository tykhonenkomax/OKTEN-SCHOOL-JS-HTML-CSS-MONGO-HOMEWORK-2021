//Распорядок дня CALLBACK

// let lifeline = 100;
//
// function wakeUp(energy, callback) {
//     setTimeout(() => {
//         if (energy <= 0) {
//             callback('Пойду еще посплю!')
//             return
//         } else {
//             callback(null, lifeline = lifeline + 100)
//         }
//     }, 1000)
// }
//
//
// function goEat(energy, callback) {
//     setTimeout(() => {
//         if (energy) {
//             callback(null, lifeline = lifeline + 200)
//         }
//     }, 1000)
// }
//
// function goWork(energy, callback) {
//     setTimeout(() => {
//         if (energy < 400) {
//             callback('Я не иду на работу у меня нету сил!')
//             return
//         } else {
//             callback(null, 'Я проедусь на работу на велосипеде, так как у меня куча лишней енергии!')
//         }
//     }, 1000)
// }
//
//
// wakeUp(lifeline, (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         lifeline = data
//         console.log('Прекрастно пойду поем!')
//         goEat(lifeline, (error, data) => {
//             if (data) {
//                 console.log('Поел прекрасно себя чувствую!')
//                 goWork(lifeline, (error, data) => {
//                     if (error){
//                         console.log(error)
//                     }else {
//                         console.log(data);
//                         console.log('____________________________________')
//                         console.log('Все я понял как работают Callback!!!')
//                         console.log('____________________________________')
//                     }
//                     }
//                 )
//             }
//         })
//     }
// })

//Распорядок дня PROMISE

let myHealth = true;
let LifeLine = 500;

function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (myHealth === true) {
                resolve('Я проснулся все ок!')

            } else {
                reject('Я чуствую себя хреновенько, Лягу спать опять!!!')
                return
            }
        }, 1000)
    })
}

function goEat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (myHealth === true) {
                LifeLine = LifeLine + 500
                resolve('Я поел!')
            } else {
                LifeLine = LifeLine - 500
                reject('Я не поел!')
                return
            }
        }, 2000)
    })
}

function goToWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (LifeLine >= 1000) {
                LifeLine = LifeLine - 200
                resolve('Я поехал на работу!')
            } else {
                LifeLine = 1000
                reject('Я не поеха на работу!')
                return
            }
        }, 3000)
    })
}

function goHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (LifeLine < 1000) {
                LifeLine = LifeLine + 200
                resolve('Прогуляюсь пешочком совсем не устал!')
            } else {
                reject('Я поехал на Такси у меня нету сил!')
                return
            }
        }, 3000)
    })
}

wakeUp(myHealth).then(myHealthPositive => {
    console.log(myHealthPositive);
    console.log(`Мой LifeLine равен - ${LifeLine}`)

    goEat(myHealth).then(myHealthgoEat => {
        console.log(myHealthgoEat)
        console.log(`Мой LifeLine стал = ${LifeLine}`)

        goToWork(LifeLine).then(goToWorkPositive => {
            console.log(goToWorkPositive)
            console.log(`Мой LifeLine стал = ${LifeLine}`)


            goHome(LifeLine).then(goHomePositive => {
                console.log(goHomePositive)
                console.log(`Мой LifeLine стал = ${LifeLine}`)
                console.log(`___________LifeLine____________`)
                console.log(`_____________1000______________`)
                console.log(`_____________THE END___________`)
            })

        })
    })
})

    .catch(reason => {
        console.log(`${reason}`)
    })
    .finally(() => { setTimeout(()=>{
        console.log(`__________Я МОЛОДЕЦ!___________`)
    },10000)

    });