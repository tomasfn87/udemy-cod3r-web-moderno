function capitalize () {
    return `${this.name[0].toUpperCase()}${this.name.slice(1)}`;
};

function getPrice (taxes = 0.05, currency = 'US$') {
    const price = (this.price * (1 - this.discount) * (1 + taxes)).toFixed(2)
    return `${currency} ${price}`;
};

function logPrice () {
    console.log(`${this.capitalize()} costs ${this.getPrice()}`);
};

const notebook = {
    name: 'notebook',
    price: 6229,
    discount: 0.15,
    getPrice,
    capitalize,
    logPrice
};

const car = {
    name: "car",
    price: 21999,
    discount: 0.05,
    getPrice,
    capitalize,
    logPrice
};

console.log(getPrice.call(notebook, 0.1));
console.log(getPrice.apply(notebook, [ 0.05 ]));
console.log(getPrice.call(car, 0.17, 'R$'));
console.log(getPrice.apply(car, [ 0.14, '€' ]));
