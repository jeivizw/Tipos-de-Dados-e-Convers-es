// Exercício 1: Converter strings para números
let strings = ["123", "123.45", "", "abc", "0"];
console.log("=== Exercício 1 ===");
strings.forEach(str => {
    let convertido = Number(str);
    console.log(`String: "${str}" -> Number: ${convertido}`);
});

// Exercício 2: parseInt vs parseFloat
console.log("\n=== Exercício 2 ===");
let exemplos = ["123.45", "42abc", "abc42", "10.9"];
exemplos.forEach(str => {
    let inteiro = parseInt(str);
    let flutuante = parseFloat(str);
    console.log(`String: "${str}" | parseInt:, inteiro, "| parseFloat:", flutuante`);
});
console.log("\nparseInt converte até encontrar um caractere não numérico e retorna um inteiro.");
console.log("parseFloat converte até encontrar um caractere não numérico e retorna um número com ponto flutuante.");