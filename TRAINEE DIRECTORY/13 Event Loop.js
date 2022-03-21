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
let liveLine8pm = 1000;

//------------WAKE UP---------------------------------------------------------------------------------------------------
function wakeUp(sleepLine, callback) {
    let badSleep = 1000; //хорошо спал
    let goodSleep = 500; //хорошо спал
    setTimeout(() => {
        if (sleepLine === false) {
            callback(liveLine8pm = liveLine8pm + badSleep, null);
        } else {
            callback(null, liveLine8pm = liveLine8pm + goodSleep);


        }
    }, 1000)
}

//------------EAT-------------------------------------------------------------------------------------------------------
function goEat(eatLine, callback) {
    let goToSleep = 1000; //плохо спал
    let goToRunn = 1000; //хорошо спал
    setTimeout(() => {
        if (eatLine < 1000) {
            callback(liveLine8pm = liveLine8pm + goToSleep, null)
        } else {
            callback(null, liveLine8pm = liveLine8pm - goToRunn)
        }
    }, 2000)
}

//------------ВЫЗОВ-------------------------------------------------------------------------------------------------------
wakeUp(true, (badSleep, goodSleep) => {
    if (badSleep) {
        console.log(`я очень плохо спал  мой liveLine низкий пойду посплю Спустя 5 часов: И вуаля мой liveLine уже ${liveLine8pm}!`)
    } else {
        goEat(liveLine8pm, (goToEat, goToRunn) => {
            if (goToEat) {
                console.log(`так поел мой liveLine стал повыше: ${liveLine8pm}`)
            } else {
                console.log(`так с моим liveLine все ок, побегал чтоб не зажиреть теперь он опять равен : ${liveLine8pm}`)
            }
        })

    }
})

