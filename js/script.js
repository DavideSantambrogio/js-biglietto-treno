// Dati
const rate = 0.21

const km = parseInt(prompt("Quanti km dei percorrere?"));

const age = parseInt(prompt("Quanti anni hai?"));

console.log(km, age);

// Logica

const originalPrice = km * rate;
console.log(originalPrice)

if (age<=18) {
    discount = (originalPrice * 0.2)
    finishedPrice = (originalPrice - discount)}
    else {
        discount = (0)
        finishedPrice = (originalPrice - discount)};

console.log(discount, finishedPrice)