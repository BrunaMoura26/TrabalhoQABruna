function runComponentTests() {
  
  testar("COMPONENT - Formulário deve estar presente", () => {
    const forms = document.getElementsByTagName("form");
    const form = forms[0]; 
    if (!form) throw new Error("Formulário não encontrado");
  });
 
  testar("COMPONENT - Selects 'de' e 'para' devem existir", () => {
    const de = document.getElementById("de");
    const para = document.getElementById("para");
    if (!de || !para) throw new Error("Selects 'de' ou 'para' não encontrados");
  });

  testar("COMPONENT - Botão inverter deve funcionar", () => {
    const de = document.getElementById("de");
    const para = document.getElementById("para");

    de.value = "km";
    para.value = "m";

    inverterUnidades();

    if (de.value !== "m" || para.value !== "km") {
      throw new Error("Inversão de unidades falhou");
    }
  });

  testar("COMPONENT - Verifica se o input de entrada aceita valor", () => {
    const entrada = document.getElementById("entrada");
    entrada.value = "123.45";
    if (entrada.value !== "123.45") {
      throw new Error("Input não aceitou o valor");
    }
  });

  testar("COMPONENT - Conversão deve exibir resultado esperado", () => {
    document.getElementById("tipo").value = "comprimento";
    document.getElementById("de").value = "km";
    document.getElementById("para").value = "m";
    document.getElementById("entrada").value = "2";

    converter();

    const saida = document.getElementById("saida").value;
    if (saida !== "2000 m") {
      throw new Error(`Resultado incorreto: recebido '${saida}'`);
    }
  });
}
