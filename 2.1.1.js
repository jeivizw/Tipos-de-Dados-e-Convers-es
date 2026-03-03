// 1. Declare três variáveis: uma string, um número e um booleano. Exiba seus valores e tipos no console.
let minhaString = "Olá, mundo!";
let meuNumero = 42;
let meuBooleano = true;

console.log("Valor da string:", minhaString, "Tipo:", typeof minhaString);
console.log("Valor do número:", meuNumero, "Tipo:", typeof meuNumero);
console.log("Valor do booleano:", meuBooleano, "Tipo:", typeof meuBooleano);

// 2. Converta um número em uma string e exiba o resultado e seu tipo.
let numeroParaString = String(meuNumero);
console.log("Número convertido para string:", numeroParaString, "Tipo:", typeof numeroParaString);

// 3. Converta uma string numérica em um número e exiba o resultado e seu tipo.
let stringNumerica = "123";
let stringParaNumero = Number(stringNumerica);
console.log("String numérica convertida para número:", stringParaNumero, "Tipo:", typeof stringParaNumero);
        