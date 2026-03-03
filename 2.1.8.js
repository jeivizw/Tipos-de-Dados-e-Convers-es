let valores = [0, 1, "", "Hello", null, undefined, {}, []];
console.log("=== Conversão para Boolean ===");
valores.forEach(valor => {
    let convertido = Boolean(valor);
    console.log(`Valor: ${valor} -> Boolean: ${convertido}`);
});