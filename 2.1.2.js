// 1. Declare uma variável com um valor `null` e outra com `undefined`. Use `typeof` para verificar seus tipos.
let varNull = null;
let varUndefined = undefined;

console.log("Tipo de varNull:", typeof varNull); // object (known quirk)
console.log("Tipo de varUndefined:", typeof varUndefined); // undefined

// 2. Crie um objeto e um array. Use `typeof` para exibir seus tipos e compare os resultados.
let meuObjeto = {};
let meuArray = [];

console.log("Tipo de meuObjeto:", typeof meuObjeto); // object
console.log("Tipo de meuArray:", typeof meuArray); // object

// Comparação: Ambos retornam "object", pois arrays são objetos em JavaScript
console.log("Comparação: Ambos são do tipo 'object'");

// 3. Declare uma variável com um valor `BigInt`. Use `typeof` para verificar seu tipo.
let meuBigInt = 123n;

console.log("Tipo de meuBigInt:", typeof meuBigInt); // bigint
