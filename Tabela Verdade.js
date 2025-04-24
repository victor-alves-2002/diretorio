//TABELA VERDADE
console.log('TABELA VERDADE:\n');

// NEGATIVO (~)
console.log('\nnegativo, ~:');
console.log(!true); // -> false
console.log(!false); // -> true

console.log('\ne , (^):');
// e (^)
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false

console.log('\nou , (v):',);
// ou (v)
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false 

console.log('\nconectando uma formula, criando uma formula maior usando o ||\n');
const a = false;
const b = true;
const c = false;
const d = true;
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false
// "||" conectar tantos desses operadores

console.log(`\nA prioridade mais alta é a negação !, então conjunção &&, a alternativa ||`);
// formula negação "~ , (!)", conjunção && "e , (^)", e a ||.