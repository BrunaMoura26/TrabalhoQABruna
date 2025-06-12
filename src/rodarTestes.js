function testar(nomeDoTeste, funcaoDeTeste) {
  const resultadosDiv = document.getElementById("testes-resultados");
  try {
    funcaoDeTeste();
    resultadosDiv.innerHTML += `✅ ${nomeDoTeste}<br>`;
  } catch (erro) {
    resultadosDiv.innerHTML += `❌ ${nomeDoTeste} - ${erro.message}<br>`;
  }
}


document.getElementById("rodarTestesComponentBtn").addEventListener("click", () => {
    document.getElementById("testes-resultados").textContent = "";
    if (typeof runComponentTests === "function") {
        runComponentTests();
    } else {
        resultadosDiv.textContent = "❌ Função runComponentTests() não encontrada!";
    }
});

document.getElementById("rodarTestesUnitBtn").addEventListener("click", () => {
    document.getElementById("testes-resultados").textContent = "";
    if (typeof runUnitTests === "function") {
        runUnitTests();
    } else {
        resultadosDiv.textContent = "❌ Função runUnitTests() não encontrada!";
    }
});