let result = false;

let liveLine = 5000;


function morningJogging(energy) {
    return new  Promise((resolve, reject)=>{
        setTimeout(() => {
            if (energy === true) {
                resolve(liveLine = liveLine + 500)
            } else {
                reject(liveLine = liveLine - 500)
            }
        }, 1000)
    })
}

function breakfast(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (energy === true){
                resolve(liveLine = liveLine + 1000)
            }else {
                reject(liveLine = liveLine - 500)
            }
        },2000)
    })
}

function goToWork(energy) {
    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
            if (energy === true){
                resolve(liveLine = liveLine + 200)
            }else {
                reject(liveLine = liveLine - 1000)
            }
        },3000)
    })
}
function smoke(energy) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (energy === true){
                resolve(liveLine = liveLine + 4000)
            }else {
                reject(liveLine = liveLine - 3000)
            }
        },3000)
    })
}

function goHome(energy) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (energy === true){
                resolve(liveLine = liveLine + 4000)
            }else {
                reject(liveLine = liveLine - 1000)
            }
        },3000)
    })
}

morningJogging(result)
    .then(morningJoggingPositive => {
        console.log(`я пошел на пробежку и мой liveLine стал ${morningJoggingPositive} `)
        return (breakfast(result))
    }).then(valueBreakfastPositive => {
    console.log(`я поел и мой liveLine стал ${valueBreakfastPositive} `)
    return (goToWork(result))
}).then(valueGoToWorkPositive => {
    console.log(`я пошел на работу потерял энергию теперь мой liveLine стал ${valueGoToWorkPositive} `)
    return (smoke(result))
}).then(valueSmokePositive => {
    console.log(`я НЕ КУРИЛ целый день и теперь мой liveLine стал ${valueSmokePositive} `)
    return (goHome(result))
}).then((valuegoHomePositive)=>{
    console.log(`я пробежался домой и мое самочуствие + к liveLine стал ${valuegoHomePositive} `)
})




    .catch(reason => {
        console.log(`я НЕ пошел на пробежку и мой liveLine стал ${reason} `)
        return (breakfast(result))
    })

    .catch(reason => {
        console.log(`я НЕ поел и мой liveLine стал ${reason}`)
        return (goToWork(result))
    })

    .catch(reason => {
        console.log(`я пошел на работу потерял энергию теперь мой liveLine стал ${reason} `)
        return (smoke(result))
    })

    .catch(reason => {
        console.log(`я КУРИЛ целый день и теперь мой liveLine стал ${reason} `)
        return (goHome(result))
    })

    .catch(reason => {
        console.log(`я ехал на автобусе чуть не помер и мой liveLine стал ${reason} `)
        console.log('_________________________________________________')
        console.log(`Я УМЕР МОЙ  ${reason} МЕНЬШЕ ЧЕМ УРОВЕНЬ ЖИЗНИ "0"`)
        console.log('_________________________________________________')
    })