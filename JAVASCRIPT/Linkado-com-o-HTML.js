let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
let total;
if (pieces > 0) {
    total = unitPrice * pieces; // apenas atribuição, sem 'let'
    console.log(total);
}
console.log(total);