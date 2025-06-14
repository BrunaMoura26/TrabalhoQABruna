// Função de testes unitários
function runUnitTests() {
  testar("UNIT - Conversão de km para m", () => {
    if (converterValor(5, "comprimento", "km", "m") !== 5000) throw new Error("Esperado 5000 quilômetros");
  });

  testar("UNIT - Conversão de kg para g", () => {
    if (converterValor(10, "massa", "kg", "g" ) !== 10000) throw new Error("Esperado 10.000 centímetros");
  });

  testar("UNIT - Conversão de km² para m²", () => {
    if (converterValor(5,"area", "km²", "m²" ) !== 5000000) throw new Error("Esperado 5.000.000 m²");
  });

  testar("UNIT - Conversão cm para m", () => {
    if (converterValor(50,"comprimento", "cm", "m" ) !== 0.5) throw new Error("Esperado 5.000.000 m²");
  });
  
  testar("UNIT - Conversão com 0", () => {
    if (converterValor(0,"comprimento", "cm", "m" ) !== 0) throw new Error("Esperado 0");
  });

  testar("UNIT - Conversão valores altos", () => {
    if (converterValor(1,"area", "km²", "cm²" ) !== 10000000000) throw new Error("Esperado 10000000000");
  });

  testar("UNIT - Teste com String", () => {
    if (converterValor("teste", "massa", "kg", "g") !== 10000) throw new Error("Esperado aceitar apenas números");
  });
}