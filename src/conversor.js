const unidades = {
  comprimento: {
    m: 1,
    km: 1000,
    cm: 0.01
  },
  area: {
    "m²": 1,
    "km²": 1000000,
    "cm²": 0.0001
  },
  massa: {
    kg: 1,
    g: 0.001,
    mg: 0.000001
  }
};

const nomes = {
  comprimento: ["m", "km", "cm"],
  area: ["m²", "km²", "cm²"],
  massa: ["kg", "g", "mg"]
};

function atualizarUnidades() {
  const tipo = document.getElementById("tipo").value;
  const de = document.getElementById("de");
  const para = document.getElementById("para");

  de.innerHTML = "";
  para.innerHTML = "";

  nomes[tipo].forEach(unidade => {
    const opt1 = document.createElement("option");
    opt1.value = unidade;
    opt1.textContent = unidade;

    const opt2 = opt1.cloneNode(true);

    de.appendChild(opt1);
    para.appendChild(opt2);
  });

  // Evita que "de" e "para" sejam iguais por padrão
  if (de.value === para.value && para.options.length > 1) {
    para.selectedIndex = 1;
  }
}

function inverterUnidades() {
  const de = document.getElementById("de");
  const para = document.getElementById("para");

  const temp = de.value;
  de.value = para.value;
  para.value = temp;
}

function converter() {
  const tipo = document.getElementById("tipo").value;
  const valor = Number(document.getElementById("entrada").value);
  const de = document.getElementById("de").value;
  const para = document.getElementById("para").value;
  const saida = document.getElementById("saida");

  if (isNaN(valor)) {
    saida.value = "Valor inválido";
    return;
  }

  const emBase = valor * unidades[tipo][de];
  const convertido = emBase / unidades[tipo][para];

  saida.value = `${convertido} ${para}`;
}

window.onload = atualizarUnidades;
