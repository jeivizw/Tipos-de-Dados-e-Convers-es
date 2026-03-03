console.log("\n===Exercício 1 - Tipos primitivos em JavaScript:===");

//ex.1
let tiposPrimitivos = ["string", "number", "boolean", "undefined", "null", "bigint", "symbol"];
console.log("Tipos primitivos:", tiposPrimitivos);

//ex.2
let texto = "Olá";
let numero = 10;
let booleano = false;
let indefinido = undefined;
let nulo = null;
let bigInt = 100n;
let simbolo = Symbol("id");

console.log("\n===Exercício 2 - Variáveis de tipos primitivos:===");

console.log("String:", texto);
console.log("Number:", numero);
console.log("Boolean:", booleano);
console.log("Undefined:", indefinido);
console.log("Null:", nulo);
console.log("BigInt:", bigInt);
console.log("Symbol:", simbolo);

console.log("\n===Exercício 3 - Verificando tipos:===");

//ex.3
console.log("texto é String?", typeof texto === "string");
console.log("numero é Number?", typeof numero === "number");
console.log("simbolo é Symbol?", typeof simbolo === "symbol");