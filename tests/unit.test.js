// Função pura para testes
function converterValor(valor, fator) {
  return valor * fator;
}

// Função de testes unitários
function runUnitTests() {
  testar("UNIT - Conversão de 2 km para m (fator 1000)", () => {
    if (converterValor(2, 1000) !== 2000) throw new Error("Esperado 2000");
  });

  testar("UNIT - Conversão de 500 m para km (fator 0.001)", () => {
    if (converterValor(500, 0.001) !== 0.5) throw new Error("Esperado 0.5");
  });

  testar("UNIT - Quebrar propositalmente", () => {
    if (converterValor(3, 4) !== 8) throw new Error("Esperado 8"); // Isso vai falhar
  });
}