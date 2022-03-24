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