const questions = [
    {
        question: "Qual é o principal imposto federal sobre consumo?",
        answers: ["ICMS", "IPI", "ISS", "PIS"],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "O que significa a sigla SPED?",
        answers: [
            "Sistema Público de Escrituração Digital",
            "Sistema de Processamento Eletrônico de Dados",
            "Sistema Público de Emissão Digital",
            "Sistema de Pagamento Eletrônico Digital"
        ],
        correct: 0,
        difficulty: "easy"
        [
  {
    question: "Qual é o principal imposto federal sobre produtos industrializados?",
    answers: ["ICMS", "IPI", "ISS", "COFINS"],
    correct: 1,
    difficulty: "easy"
  },
  {
    question: "O que significa a sigla SPED?",
    answers: [
      "Sistema Público de Escrituração Digital",
      "Sistema de Pagamento Eletrônico de Débitos",
      "Serviço Público de Emissão Digital",
      "Sistema de Projeção Econômica e Dados"
    ],
    correct: 0,
    difficulty: "easy"
  },
  {
    question: "O ISS é um imposto de competência:",
    answers: ["Federal", "Estadual", "Municipal", "Distrital"],
    correct: 2,
    difficulty: "easy"
  },
  {
    question: "Qual imposto incide sobre a circulação de mercadorias?",
    answers: ["IRPJ", "IPI", "ICMS", "ISS"],
    correct: 2,
    difficulty: "easy"
  },
  {
    question: "Qual regime de tributação utiliza o Lucro Presumido?",
    answers: ["Pessoa Física", "Pessoa Jurídica", "Autônomo", "Microempreendedor"],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "O Simples Nacional é destinado principalmente para:",
    answers: ["Grandes empresas", "Empresas de médio porte", "Micro e pequenas empresas", "Órgãos públicos"],
    correct: 2,
    difficulty: "easy"
  },
  {
    question: "O que significa DARF?",
    answers: [
      "Documento de Arrecadação de Receitas Federais",
      "Documento Anual de Receita Fiscal",
      "Demonstrativo de Apuração de Receita Federal",
      "Declaração de Atividades de Receita Fiscal"
    ],
    correct: 0,
    difficulty: "easy"
  },
  {
    question: "Qual é a alíquota padrão da CSLL para empresas do Lucro Real?",
    answers: ["9%", "15%", "20%", "25%"],
    correct: 0,
    difficulty: "medium"
  },
  {
    question: "Qual o tributo que incide sobre serviços de comunicação e energia elétrica?",
    answers: ["ISS", "ICMS", "IPI", "COFINS"],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "A COFINS incide sobre:",
    answers: ["Lucro líquido", "Faturamento", "Folha de pagamento", "Patrimônio líquido"],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "Qual imposto é conhecido como imposto de renda da pessoa jurídica?",
    answers: ["IRPJ", "IRPF", "CSLL", "ITR"],
    correct: 0,
    difficulty: "easy"
  },
  {
    question: "O PIS e a COFINS podem ser cumulativos ou:",
    answers: ["Exclusivos", "Não cumulativos", "Isentos", "Alternativos"],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "O ICMS é um imposto de competência:",
    answers: ["Federal", "Estadual", "Municipal", "Distrital"],
    correct: 1,
    difficulty: "easy"
  },
  {
    question: "O que é substituição tributária?",
    answers: [
      "Transferência da obrigação de recolher imposto para outro contribuinte",
      "Isenção de impostos",
      "Crédito tributário automático",
      "Parcelamento de impostos"
    ],
    correct: 0,
    difficulty: "medium"
  },
  {
    question: "Qual documento é utilizado para emissão de notas fiscais eletrônicas?",
    answers: ["SPED", "NF-e", "DARF", "DCTF"],
    correct: 1,
    difficulty: "easy"
  },
  {
    question: "A CSLL significa:",
    answers: [
      "Contribuição Social sobre o Lucro Líquido",
      "Contribuição sobre Serviços Locais e Logísticos",
      "Crédito Social sobre Lucro Líquido",
      "Contribuição Simples de Lucro Líquido"
    ],
    correct: 0,
    difficulty: "easy"
  },
  {
    question: "Qual é a alíquota do IRPJ no Lucro Real, sem adicional?",
    answers: ["9%", "15%", "25%", "30%"],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "O que significa a sigla ECF no contexto fiscal?",
    answers: [
      "Escrituração Contábil Fiscal",
      "Emissão de Crédito Fiscal",
      "Escrituração de Contribuições Federais",
      "Estudo de Carga Fiscal"
    ],
    correct: 0,
    difficulty: "medium"
  },
  {
    question: "O ITBI incide sobre:",
    answers: ["Venda de imóveis", "Venda de mercadorias", "Lucros e dividendos", "Serviços prestados"],
    correct: 0,
    difficulty: "easy"
  },
  {
    question: "O IRPF é devido por:",
    answers: ["Pessoas jurídicas", "Pessoas físicas", "Municípios", "Estados"],
    correct: 1,
    difficulty: "easy"
  },
  {
    question: "No Simples Nacional, a guia de pagamento é chamada de:",
    answers: ["DARF", "GPS", "DAS", "GNRE"],
    correct: 2,
    difficulty: "easy"
  },
  {
    question: "O ISS incide sobre:",
    answers: ["Circulação de mercadorias", "Serviços", "Lucros", "Patrimônio"],
    correct: 1,
    difficulty: "easy"
  },
  {
    question: "Qual declaração é obrigatória para informar débitos federais e créditos de tributos?",
    answers: ["DCTF", "DIRF", "DASN", "SPED"],
    correct: 0,
    difficulty: "medium"
  },
  {
    question: "O que significa GNRE?",
    answers: [
      "Guia Nacional de Recolhimento de Tributos Estaduais",
      "Guia Nacional de Receita Estadual",
      "Guia Nacional de Recursos Especiais",
      "Guia Nacional de Receita Extra"
    ],
    correct: 0,
    difficulty: "medium"
  },
  {
    question: "Qual imposto incide sobre herança e doações?",
    answers: ["ICMS", "ISS", "ITCMD", "IPTU"],
    correct: 2,
    difficulty: "easy"
  },
  {
    question: "O IPI é um imposto de competência:",
    answers: ["Federal", "Estadual", "Municipal", "Distrital"],
    correct: 0,
    difficulty: "easy"
  },
  {
    question: "O Simples Nacional unifica o pagamento de quantos tributos aproximadamente?",
    answers: ["3", "5", "8", "10"],
    correct: 2,
    difficulty: "medium"
  },
  {
    question: "Qual é o documento que informa rendimentos pagos e retenções de IR?",
    answers: ["DIRF", "ECF", "SPED", "RAIS"],
    correct: 0,
    difficulty: "medium"
  },
  {
    question: "Qual imposto é cobrado sobre propriedade de veículos automotores?",
    answers: ["IPVA", "IPTU", "ITBI", "IRPJ"],
    correct: 0,
    difficulty: "easy"
  },
  {
    question: "O IPTU é um imposto de competência:",
    answers: ["Federal", "Estadual", "Municipal", "Distrital"],
    correct: 2,
    difficulty: "easy"
  },
  {
    question: "A EFD-Contribuições faz parte de qual sistema?",
    answers: ["Sintegra", "SPED", "DCTF", "RAIS"],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "Qual é a alíquota do adicional de IRPJ sobre lucros acima de R$ 20.000,00 por mês?",
    answers: ["5%", "10%", "15%", "20%"],
    correct: 1,
    difficulty: "hard"
  },
  {
    question: "A CSLL é calculada sobre:",
    answers: ["Receita bruta", "Lucro líquido ajustado", "Folha de pagamento", "Faturamento"],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "Qual imposto incide sobre operações financeiras?",
    answers: ["IOF", "IRPJ", "CSLL", "PIS"],
    correct: 0,
    difficulty: "easy"
  },
  {
    question: "O que significa RAIS?",
    answers: [
      "Relação Anual de Informações Sociais",
      "Receita Anual de Impostos Sociais",
      "Registro Anual de Indústrias e Serviços",
      "Relatório Anual de Informações Sindicais"
    ],
    correct: 0,
    difficulty: "medium"
  },
  {
    question: "O que é NCM em notas fiscais?",
    answers: [
      "Número de Cadastro de Mercadorias",
      "Nomenclatura Comum do Mercosul",
      "Norma de Cálculo de Mercadorias",
      "Número Comum de Movimentação"
    ],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "Qual imposto incide sobre propriedade rural?",
    answers: ["IPTU", "IPVA", "ITR", "ITBI"],
    correct: 2,
    difficulty: "easy"
  },
  {
    question: "Qual obrigação acessória substituiu a DIPJ?",
    answers: ["ECF", "DIRF", "RAIS", "DCTF"],
    correct: 0,
    difficulty: "hard"
  },
  {
    question: "O que significa PER/DCOMP?",
    answers: [
      "Pedido Eletrônico de Restituição, Ressarcimento ou Compensação",
      "Plano de Execução de Receita e Despesa Complementar",
      "Programa de Encerramento e Recolhimento de Débitos",
      "Pagamento Eletrônico de Receita e Contribuições"
    ],
    correct: 0,
    difficulty: "hard"
  },
  {
    question: "O lucro real pode ser apurado de forma:",
    answers: ["Mensal ou Anual", "Trimestral ou Anual", "Bimestral ou Semestral", "Mensal ou Trimestral"],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "Qual declaração substituiu a GFIP?",
    answers: ["DIRF", "RAIS", "eSocial", "ECF"],
    correct: 2,
    difficulty: "hard"
  },
  {
    question: "Qual é o documento utilizado para recolhimento do FGTS?",
    answers: ["GPS", "GRRF", "GFIP", "DARF"],
    correct: 2,
    difficulty: "medium"
  },
  {
    question: "O que significa ICMS-ST?",
    answers: [
      "ICMS Substituição Tributária",
      "ICMS Simples Tributado",
      "Imposto de Cálculo sobre Mercadorias e Serviços de Transporte",
      "ICMS Sobre Tarifas"
    ],
    correct: 0,
    difficulty: "medium"
  },
  {
    question: "Qual é a base de cálculo do PIS e da COFINS?",
    answers: ["Lucro líquido", "Faturamento/Receita bruta", "Patrimônio líquido", "Folha de pagamento"],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "O que é uma Nota Fiscal Complementar?",
    answers: [
      "Documento para anular uma nota anterior",
      "Documento para complementar valores de uma nota já emitida",
      "Nota fiscal de exportação",
      "Nota de serviços de terceiros"
    ],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "Qual é a principal finalidade da escrituração fiscal digital?",
    answers: [
      "Aumentar a carga tributária",
      "Unificar e simplificar a entrega de obrigações acessórias",
      "Isentar empresas do pagamento de impostos",
      "Elaborar balancetes automáticos"
    ],
    correct: 1,
    difficulty: "medium"
  },
  {
    question: "O que significa LALUR?",
    answers: [
      "Livro de Apuração do Lucro Real",
      "Lista Anual de Lançamentos de Receita",
      "Livro de Arrecadação de Lucros e Receitas",
      "Lançamento Automático de Lucros e Reservas"
    ],
    correct: 0,
    difficulty: "hard"
  },
  {
    question: "Qual regime permite a utilização de créditos fiscais de ICMS, PIS e COFINS?",
    answers: ["Simples Nacional", "Lucro Presumido", "Lucro Real", "Isenção"],
    correct: 2,
    difficulty: "medium"
  }
]

    }
    // 🔹 Adicione aqui suas 100 perguntas
];

let currentQuestion = 0;
let score = 0;

function startGame() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('answers').innerHTML = "";

    q.answers.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.textContent = ans;
        btn.className = "btn-elegant w-full";
        btn.onclick = () => checkAnswer(i);
        document.getElementById('answers').appendChild(btn);
    });
}

function checkAnswer(choice) {
    if (choice === questions[currentQuestion].correct) {
        score++;
    }
    document.getElementById('score').textContent = score;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function showResults() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    document.getElementById('final-score').textContent = score;
}

function restartGame() {
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}
