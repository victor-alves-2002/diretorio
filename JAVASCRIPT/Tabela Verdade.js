// TABELA VERDADE - Em JavaScript

console.log('=== TABELA VERDADE ===\n');

// Operador de Negação (~)
console.log('NEGACAO (~ , !)');
console.log(`!true  => ${!true}`);  // Esperado: false
console.log(`!false => ${!false}`); // Esperado: true

console.log('\nCONJUNÇÃO (E , ^ , &&)');
// Operador de Conjunção (AND , ^ , &&)
console.log(`true  && true  => ${true && true}`);   // Esperado: true
console.log(`true  && false => ${true && false}`);  // Esperado: false
console.log(`false && true  => ${false && true}`);  // Esperado: false
console.log(`false && false => ${false && false}`); // Esperado: false

console.log('\nDISJUNÇÃO (OU , v , ||)');
// Operador de Disjunção (OR , v , ||)
console.log(`true  || true  => ${true || true}`);   // Esperado: true
console.log(`true  || false => ${true || false}`);  // Esperado: true
console.log(`false || true  => ${false || true}`);  // Esperado: true
console.log(`false || false => ${false || false}`); // Esperado: false

console.log('\nCriando uma fórmula lógica maior combinando operadores:');
const a = false;
const b = true;
const c = false;
const d = true;

// Testando expressões compostas
console.log(`a && b && c || d => ${a && b && c || d}`); 
// Interpretação: ((a && b && c) || d) => false || true => true

console.log(`a && b && (c || d) => ${a && b && (c || d)}`);
// Interpretação: (a && b && (c || d)) => (false && (false || true)) => false

console.log('\nOBS: Prioridade dos operadores:');
console.log('1°: Negação (!)');
console.log('2°: Conjunção (&&)');
console.log('3°: Disjunção (||)');
