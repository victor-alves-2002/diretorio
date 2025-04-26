//setas
let add = (a, b) => a + b;
console.log(`Função Setas`)
console.log(add(10, 20)); // -> 30

//fatoral
console.log(`Função Fatoral`)
function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // -> 120