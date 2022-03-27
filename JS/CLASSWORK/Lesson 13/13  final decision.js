//Распорядок дня ПРОМИСЫ

let lifeline = 100;

function wakeUp(energy, callback) {
    setTimeout(() => {
        if (energy <= 0){
            callback('Пойду еще посплю!')
            return
        } else{
            callback(null, energy + 100)
        }
    }, 1000)
}
function goEat(energy, callback) {
    setTimeout(() => {
        if (energy < 200){
            callback('Пойду еще посплю!')
            return
        } else{
            callback(null, energy + 100)
        }
    }, 1000)
}





wakeUp(lifeline, (error, data)=>{
    if (error){
        console.log(error)
    }else {
        lifeline=data
        console.log('Прекрастно пойду поем!')
    }
})