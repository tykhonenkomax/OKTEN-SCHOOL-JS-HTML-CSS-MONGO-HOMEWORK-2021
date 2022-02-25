// logger

function loggerInitializer(config) {
    const prefix = config.prefix;

    return (msg) => {
        return `${prefix}: ${msg}`
    }
}

const conf = {
    prefix: 'logger-prefix: '
}

const logger = loggerInitializer(conf)

logger('some message'); // logger-prefix: some message
logger('another message'); // logger-prefix: another message


// cart

function initializePriceCalculator(discount = 0) {
    return (price) => {
        return price - discount;
    }
}

const discount = 100;
const getPriceWithDiscount = initializePriceCalculator(discount);

const item1Price = 500;
const item2Price = 400;

const finalPriceItem1 = getPriceWithDiscount(item1Price) // 400
const finalPriceItem2 = getPriceWithDiscount(item2Price) // 300

// calculate circle area

function radiusCalculator() {
    const pi = 3.143253252;

    return (radius) {
        return = pi * r * r;
    }
}

calculateRadis = radiusCalculator();

calculateRadis(10);

function userCard(num) {
        
}

















// a-b examle
function a() {
   return () => {
      return 1
   }
}

const b = a();

b(); // 1
