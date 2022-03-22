//колбек дисконт

// let clientWindow = [0];
//
// function pay(summ, cb) {
//     let discount1 = 100;
//     let discount2 = 150;
//     let discount3 = 200;
//
//     setTimeout(() => {
//         if (summ < 1500) {
//             clientWindow = summ - discount1;
//             cb();
//         } else if (summ >= 1500 && summ < 3000){
//             clientWindow = summ - discount2;
//             cb();
//         }else {
//             clientWindow = summ - discount3;
//             cb();
//         }
//             }, 3000)
// }
// pay(prompt(), ()=>{
//     console.log(clientWindow)
// })

//колбек ще якийсь

// let money =0;
//
// function cleanTheHouse(isJobDoing, callback) {
//     setTimeout(()=>{
//         if (isJobDoing){
//             money = 1000
//             callback(null, money);
//         }else{
//             callback('OOOOPS',null);
//         }
//     },2000)
// }
// cleanTheHouse(true, (error, data)=>{
//     if(error){document.write('HOOOOO SOMSING WRONG')
//     }else{document.write(`YUHOOOOOO ${money}UAH`)}
// })

// розпорядок дня
//liveLine-за сон автоматом начитывается 1000 жизниОчков;
// let liveLine8pm = 1000;
// let liveLine9pm = 0;
//
// //------------WAKE UP---------------------------------------------------------------------------------------------------
// function wakeUp(sleepLine, callback) {
//     let badSleep = 1000; //плохо спал
//     let goodSleep = 500; //хорошо спал
//     setTimeout(() => {
//         if (sleepLine === false) {
//             callback(liveLine9pm = liveLine8pm - badSleep, null);
//          } else {
//             callback(null, liveLine8pm = liveLine8pm + goodSleep);
//
//
//         }
//     }, 1000)
// }
//
// //------------EAT BREAKFAST---------------------------------------------------------------------------------------------
// function breakfast(eatLine, callback) {
//     let goToSleep = 1000; //плохо спал
//     let goToRunn = 1000; //хорошо спал
//     setTimeout(() => {
//         if (eatLine < 1000) {
//             callback(liveLine8pm = liveLine8pm + goToSleep, null)
//         } else {
//             callback(null, liveLine9pm = liveLine8pm - goToRunn)
//         }
//     }, 2000)
// }
//
// //------------EAT LUNCH-------------------------------------------------------------------------------------------------
// function lunch(eatLine, callback) {
//     let emptyRefrigerator = 500; //чтоб поесть нужно идти за едой;
//     let fullRefrigerator = 500; //можно песть не выходя из дому;
//
//     setTimeout(() => {
//         if (eatLine < 500) {
//             console.log('Я долежн поесть 2')
//             callback(liveLine8pm = liveLine8pm - emptyRefrigerator, null)
//         } else {
//             console.log('Я долежн поесть')
//             callback(null, liveLine8pm = liveLine8pm + fullRefrigerator)
//         }
//
//     }, 3000)
// }
//
//
// //------------ВЫЗОВ-----------------------------------------------------------------------------------------------------
// wakeUp(false, (badSleep, goodSleep) => {
//     if (badSleep) {
//         console.log(`я очень плохо спал  мой liveLine низкий пойду посплю Спустя 5 часов: И вуаля мой liveLine уже ${liveLine9pm}!`)
//     } else {
//         breakfast(liveLine8pm, (goToEat, goToRunn) => {
//             if (goToEat) {
//                 console.log(`так поел мой liveLine стал повыше: ${liveLine8pm}`)
//             } else {
//                 console.log(`так с моим liveLine все ок, побегал чтоб не зажиреть теперь он опять равен : ${liveLine8pm}`)
//
//                 lunch(liveLine8pm, (emptyRefrigerator, fullRefrigerator) => {
//                     if (emptyRefrigerator) {
//                         console.log(` я умер мой liveLine8pm = : ${liveLine8pm}`)
//                     } else {
//                         console.log(` я поел все хорошо мой  liveLine8pm = : ${liveLine8pm}`)
//                     }
//
//                 })
//
//             }
//         })
//
//     }
// })


//встал получил 1000 енергии
// побегал -500
// не побегал +500
//
// поел +500
// не поел-500
//
// пошол на работу -500
// не пошл на работу +500
//
// поел на работе +500
// не поел на работе-500
//
// крю -500
// не курю +1000
//
// пошел в спортзал +500
// схаляви -1000
let result = true;

let liveLine = 5000;


function morningJogging(energy, callback) {

    setTimeout(() => {
        if (energy === true) {
            callback(liveLine = liveLine + 500, null);
        } else {
            callback(null, liveLine = liveLine - 500);

        }
    }, 1000)
}

function breakfast(energy, callback) {
    setTimeout(()=>{
        if (energy === true){
            callback(liveLine = liveLine + 1000, null)
        }else {
            callback(null, liveLine = liveLine - 500)
        }
    },2000)
}

function goToWork(energy, callback) {
    setTimeout(()=>{
        if (energy === true){
            callback(liveLine = liveLine - 1000, null)
        }else {
            callback(null, liveLine = liveLine + 200)
        }
    },3000)

}
function smoke(energy, callback) {
    setTimeout(()=>{
        if (energy === true){
            callback(liveLine = liveLine - 3000, null)
        }else {
            callback(null, liveLine = liveLine + 4000)
        }
    },3000)

}

function goHome(energy, callback) {
    setTimeout(()=>{
        if (energy === true){
            callback(liveLine = liveLine - 1000, null)
        }else {
            callback(null, liveLine = liveLine + 4000)
        }
    },3000)

}


morningJogging(result, (error, done)=> {
    if (error) {
        console.log(`я пошел на пробежку и мой liveLine стал ${liveLine} `)

        breakfast(result, (error, done)=>{
            if (error){
                console.log(`я поел и мой liveLine стал ${liveLine} `)

                goToWork(result, (error, done)=>{
                    if (error){
                        console.log(`я пошел на работу потерял энергию теперь мой liveLine стал ${liveLine} `)

                        smoke(result, (error, done)=>{
                            if (error){
                                console.log(`я КУРИЛ целый день и теперь мой liveLine стал ${liveLine} `)
                                goHome(result, (error, done)=>{
                                    if (error){
                                        console.log(`я ехал на автобусе чуть не помер и мой liveLine стал ${liveLine} `)
                                    }else {
                                        console.log(`я пробежался домой и мое самочуствие + к liveLine стал ${liveLine} `)
                                    }
                                });
                            }else {
                                console.log(`я НЕ КУРИЛ целый день и теперь мой liveLine стал ${liveLine} `)
                            }
                        });
                    }else {
                        console.log(`я НЕ пошел на работу и НЕ потерял энергию теперь мой liveLine стал ${liveLine} `)
                    }
                });
            }else {
                console.log(`я НЕ поел и мой liveLine стал ${liveLine} `)
                }
        })
    } else {
        console.log(`я НЕ пошел на пробежку и мой liveLine стал ${liveLine} `)
        breakfast(result, (error, done)=>{
            if (error){
                console.log(`я поел и мой liveLine стал ${liveLine} `)
            }else {
                console.log(`я НЕ поел и мой liveLine стал ${liveLine} `)

                goToWork(result, (error, done)=>{
                    if (error){
                        console.log(`я пошел на работу потерял энергию теперь мой liveLine стал ${liveLine}`)

                    }else {
                        console.log(`я НЕ пошел на работу и НЕ потерял энергию теперь мой liveLine стал ${liveLine}`)

                        smoke(result, (error, done)=>{
                            if (error){
                                console.log(`я КУРИЛ целый день и теперь мой liveLine стал ${liveLine} `)

                                goHome(result, (error, done)=>{
                                    if (error){
                                        console.log(`я ехал на автобусе чуть не помер и мой liveLine стал ${liveLine} `)
                                    }else {
                                        console.log(`я пробежался домой и мое самочуствие + к liveLine стал ${liveLine} `)
                                    }
                                });
                            }else {
                                console.log(`я НЕ КУРИЛ целый день и теперь мой liveLine стал ${liveLine} `)
                            }
                        });
                    }
                });
            }
        })
    }
})

