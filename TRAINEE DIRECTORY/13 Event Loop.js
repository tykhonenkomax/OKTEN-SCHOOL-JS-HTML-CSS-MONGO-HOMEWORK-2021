let clientWindow = [0];

function pay(summ, cb) {
    let discount1 = 100;
    let discount2 = 150;
    let discount3 = 200;

    setTimeout(() => {
        if (summ < 1500) {
            clientWindow = summ - discount1;
            cb();
        } else if (summ >= 1500 && summ < 3000){
            clientWindow = summ - discount2;
            cb();
        }else {
            clientWindow = summ - discount3;
            cb();
        }
            }, 3000)
}
pay(prompt(), ()=>{
    console.log(clientWindow)
})