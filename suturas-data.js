window.SUTURE_ITEMS = [
  {
    id: "isolada-simples",
    nome: "Isolada Simples",
    grupo: "Suturas interrompidas ou isoladas",
    tipo: "Ponto isolado de aposição",
    comeca: "Começa com a agulha entrando de um lado da incisão, a uma distância regular da borda.",
    trajeto: "Atravessa perpendicularmente os tecidos e sai no lado oposto, mantendo simetria entre as bordas.",
    termina: "Termina com nó individual, sem continuidade com os outros pontos.",
    servePara: "Aproxima bordas com controle ponto a ponto da tensão. Principais usos: pele, subcutâneo, fáscia e fechamento geral de feridas limpas ou contaminadas quando se quer ajustar cada ponto separadamente.",
    pontosChave: [
      "Cada ponto é independente.",
      "É padrão básico de aposição.",
      "Permite ajustar a tensão em cada ponto."
    ],
    errosComuns: [
      "Apertar demais e inverter as bordas.",
      "Fazer passagens assimétricas.",
      "Colocar o nó sobre a linha de incisão."
    ],
    perguntas: [
      "Por que a isolada simples permite controle ponto a ponto?",
      "Onde fica o nó?",
      "Qual é o objetivo principal dessa sutura?"
    ]
  },
  {
    id: "sultan-x",
    nome: "Sultan \"X\"",
    grupo: "Suturas interrompidas ou isoladas",
    tipo: "Ponto cruzado",
    comeca: "Começa como um ponto isolado, com a primeira passagem atravessando a ferida.",
    trajeto: "A segunda passagem cruza a primeira, formando um X sobre a linha de incisão.",
    termina: "Termina com nó individual que fixa o cruzamento.",
    servePara: "Aproxima tecidos com maior distribuição da tensão que um ponto simples. Principais usos: pele e planos com tensão moderada, reforço de fechamento e situações em que o formato cruzado ajuda a estabilizar as bordas.",
    pontosChave: [
      "O desenho característico é em X.",
      "É interrompida, não contínua.",
      "Distribui a força em área maior."
    ],
    errosComuns: [
      "Fazer um colchoeiro sem cruzamento.",
      "Confundir com sutura em oito.",
      "Não reconhecer o formato em X."
    ],
    perguntas: [
      "Qual formato identifica a Sultan?",
      "Ela é isolada ou contínua?",
      "O que diferencia Sultan de Wolff?"
    ]
  },
  {
    id: "wolff",
    nome: "Wolff",
    grupo: "Suturas interrompidas ou isoladas",
    tipo: "Colchoeiro horizontal interrompido",
    comeca: "Começa em uma borda da ferida e atravessa para a borda oposta.",
    trajeto: "Faz uma segunda passagem paralela à primeira, formando um U horizontal.",
    termina: "Termina com nó no mesmo lado em que as extremidades do fio emergem.",
    servePara: "Usada para distribuir tensão e promover leve eversão das bordas. Principais usos: pele sob tensão moderada, feridas com tendência à inversão e fechamento em que se deseja apoio horizontal das margens.",
    pontosChave: [
      "É horizontal em U.",
      "É uma sutura interrompida.",
      "Pode reduzir tensão nas bordas."
    ],
    errosComuns: [
      "Confundir com Donatti.",
      "Apertar demais e comprometer vascularização.",
      "Descrever como ponto vertical."
    ],
    perguntas: [
      "Qual é o formato do Wolff?",
      "Como diferenciar Wolff de Donatti?",
      "Que risco existe se apertar demais?"
    ]
  },
  {
    id: "donatti",
    nome: "Donatti",
    grupo: "Suturas interrompidas ou isoladas",
    tipo: "Colchoeiro vertical interrompido",
    comeca: "Começa com uma passagem longe da borda da ferida.",
    trajeto: "Retorna com uma segunda passagem perto da borda, seguindo padrão vertical.",
    termina: "Termina com nó individual que aproxima e everte levemente as bordas.",
    servePara: "Dá suporte a tecidos sob tensão e ajuda na aposição precisa. Principais usos: pele sob tensão, bordas que precisam de eversão, reforço de feridas profundas e fechamento com melhor preservação vascular que o colchoeiro horizontal muito apertado.",
    pontosChave: [
      "É vertical em U.",
      "Segue a lógica longe-perto.",
      "Promove boa sustentação das bordas."
    ],
    errosComuns: [
      "Confundir com Wolff.",
      "Ignorar a passagem perto da borda.",
      "Fazer as duas passagens na mesma distância."
    ],
    perguntas: [
      "Qual é a sequência de passagens no Donatti?",
      "Ele é horizontal ou vertical?",
      "Que efeito causa nas bordas?"
    ]
  },
  {
    id: "lembert-interrompida",
    nome: "Lembert",
    grupo: "Suturas interrompidas ou isoladas",
    tipo: "Invaginante interrompida",
    comeca: "Começa na serosa, sem penetrar o lúmen.",
    trajeto: "Passa por serosa, muscular e submucosa, retornando de modo a invaginar a parede.",
    termina: "Termina com nó individual, formando ponto invaginante.",
    servePara: "Invagina bordas de vísceras ocas sem contaminar o lúmen. Principais usos: estômago, intestino, bexiga e segunda camada de fechamento visceral quando se deseja padrão seromuscular invaginante.",
    pontosChave: [
      "É seromuscular.",
      "Não atravessa a mucosa.",
      "Pode ser cobrada como interrompida."
    ],
    errosComuns: [
      "Dizer que é seromucosa.",
      "Confundir com Connel.",
      "Esquecer o efeito invaginante."
    ],
    perguntas: [
      "A Lembert interrompida penetra o lúmen?",
      "Qual efeito ela produz?",
      "Quais camadas ela envolve?"
    ]
  },
  {
    id: "gelly",
    nome: "Gelly",
    grupo: "Suturas interrompidas ou isoladas",
    tipo: "Invaginante interrompida",
    comeca: "Começa na parede visceral, respeitando o plano seroso e muscular.",
    trajeto: "As passagens favorecem invaginação, sem atravessar o lúmen como uma sutura contaminante.",
    termina: "Termina com nó individual que mantém a invaginação.",
    servePara: "Usada quando se deseja invaginar tecido visceral com ponto isolado. Principais usos: vísceras ocas e reforço seromuscular interrompido, especialmente quando é preciso controlar a tensão ponto a ponto.",
    pontosChave: [
      "É interrompida.",
      "É invaginante.",
      "Deve ser diferenciada das suturas simples de pele."
    ],
    errosComuns: [
      "Classificar como contínua.",
      "Tratar como simples aposição de pele.",
      "Não citar invaginação."
    ],
    perguntas: [
      "A Gelly é isolada ou contínua?",
      "Qual é sua finalidade principal?",
      "Por que não é uma sutura simples de pele?"
    ]
  },
  {
    id: "longe-perto-perto-longe",
    nome: "Longe-Perto-Perto-Longe",
    grupo: "Suturas interrompidas ou isoladas",
    tipo: "Padrão de distância",
    comeca: "Começa longe da borda da ferida.",
    trajeto: "Segue a sequência longe, perto, perto e longe, combinando tensão e aposição.",
    termina: "Termina com nó individual após completar a sequência.",
    servePara: "Ajuda a reduzir tensão enquanto mantém boa aproximação das bordas. Principais usos: pele com tensão moderada a alta, feridas em que o componente longe alivia tensão e o componente perto melhora a aposição.",
    pontosChave: [
      "A ordem do nome é o gabarito.",
      "Combina componente longe e componente perto.",
      "É interrompida."
    ],
    errosComuns: [
      "Trocar a ordem por longe-longe-perto-perto.",
      "Esquecer uma das quatro referências.",
      "Apertar demais e deformar as bordas."
    ],
    perguntas: [
      "Qual é a sequência exata?",
      "Qual componente ajuda na tensão?",
      "Como diferenciar de longe-longe-perto-perto?"
    ]
  },
  {
    id: "longe-longe-perto-perto",
    nome: "Longe-Longe-Perto-Perto",
    grupo: "Suturas interrompidas ou isoladas",
    tipo: "Padrão de distância",
    comeca: "Começa com duas passagens longe da borda.",
    trajeto: "Depois realiza duas passagens perto da borda, mantendo a ordem longe-longe-perto-perto.",
    termina: "Termina com nó individual após completar as quatro referências.",
    servePara: "Treina controle da distância em relação à margem e distribuição de tensão. Principais usos: fechamento de pele sob tensão, exercícios de padrão longe/perto e situações em que se quer reforçar primeiro a tração distante da borda.",
    pontosChave: [
      "As duas primeiras referências são longe.",
      "As duas últimas referências são perto.",
      "Difere da longe-perto-perto-longe pela ordem."
    ],
    errosComuns: [
      "Inverter a sequência.",
      "Confundir com Donatti.",
      "Não manter distâncias proporcionais."
    ],
    perguntas: [
      "Qual é a sequência completa?",
      "Como ela difere da longe-perto-perto-longe?",
      "O que significam longe e perto?"
    ]
  },
  {
    id: "perto-perto-longe-longe",
    nome: "Perto-Perto-Longe-Longe",
    grupo: "Suturas interrompidas ou isoladas",
    tipo: "Padrão de distância",
    comeca: "Começa com duas passagens perto da borda.",
    trajeto: "Depois realiza duas passagens longe da borda, mantendo a sequência perto-perto-longe-longe.",
    termina: "Termina com nó individual após completar as quatro referências.",
    servePara: "Treina reconhecimento da ordem das passagens perto e longe. Principais usos: fechamento de pele com controle de tensão e estudo comparativo dos padrões longe/perto cobrados em prova.",
    pontosChave: [
      "As duas primeiras referências são perto.",
      "As duas últimas referências são longe.",
      "A sequência é o ponto central da cobrança."
    ],
    errosComuns: [
      "Responder longe-longe-perto-perto.",
      "Misturar a ordem das passagens.",
      "Não relacionar perto e longe à borda da ferida."
    ],
    perguntas: [
      "Qual é a sequência exata?",
      "Por onde ela começa?",
      "Como diferenciar de longe-longe-perto-perto?"
    ]
  },
  {
    id: "continua-simples",
    nome: "Contínua Simples",
    grupo: "Suturas contínuas",
    tipo: "Aposição contínua",
    comeca: "Começa com nó inicial em uma extremidade da ferida.",
    trajeto: "Segue com passagens simples sucessivas, sem cortar o fio entre os pontos.",
    termina: "Termina com nó final na outra extremidade.",
    servePara: "Fecha rapidamente planos com pouca tensão e boa aposição. Principais usos: subcutâneo, fáscia sem muita tensão, musculatura, peritônio e linhas longas em que a rapidez e economia de fio são importantes.",
    pontosChave: [
      "O fio permanece contínuo.",
      "É rápida e usa menos material.",
      "Se romper, pode comprometer toda a linha."
    ],
    errosComuns: [
      "Fazer pontos isolados.",
      "Esquecer nó inicial ou final.",
      "Usar em tensão excessiva."
    ],
    perguntas: [
      "O que torna essa sutura contínua?",
      "Qual é sua vantagem principal?",
      "Qual é o risco se o fio romper?"
    ]
  },
  {
    id: "colchoeiro-continuo",
    nome: "Colchoeiro",
    grupo: "Suturas contínuas",
    tipo: "Colchoeiro contínuo",
    comeca: "Começa com ancoragem inicial, como uma sutura contínua.",
    trajeto: "Avança em padrão de colchoeiro, mantendo passagens alternadas ao longo da ferida.",
    termina: "Termina com nó final após completar a linha contínua.",
    servePara: "Promove aposição com distribuição de tensão e algum grau de eversão. Principais usos: pele em fechamento contínuo, feridas longas com tensão moderada e situações em que se deseja eversão mais uniforme das bordas.",
    pontosChave: [
      "É a versão contínua do padrão colchoeiro.",
      "Não corta o fio entre os pontos.",
      "Ajuda a distribuir tensão."
    ],
    errosComuns: [
      "Confundir com Wolff isolado.",
      "Perder a regularidade das passagens.",
      "Classificar como interrompida."
    ],
    perguntas: [
      "Por que o colchoeiro aqui é contínuo?",
      "Com qual sutura interrompida ele pode ser confundido?",
      "Que efeito tem sobre a tensão?"
    ]
  },
  {
    id: "festonada",
    nome: "Festonada",
    grupo: "Suturas contínuas",
    tipo: "Contínua bloqueada",
    comeca: "Começa como uma sutura contínua simples.",
    trajeto: "A cada passagem, o fio é ancorado no ponto anterior, formando travamento.",
    termina: "Termina com nó final após a última ancoragem.",
    servePara: "Aumenta a estabilidade da linha contínua. Principais usos: pele, vasos ou tecidos que precisam de linha contínua mais segura, especialmente quando se quer evitar afrouxamento progressivo do fio.",
    pontosChave: [
      "Também é chamada de contínua bloqueada.",
      "Cada ponto prende no anterior.",
      "Dá maior segurança à linha."
    ],
    errosComuns: [
      "Fazer contínua simples sem bloquear.",
      "Apertar demais e isquemiar tecido.",
      "Não reconhecer o travamento."
    ],
    perguntas: [
      "O que caracteriza a festonada?",
      "Qual é sua vantagem sobre a contínua simples?",
      "Ela é isolada ou contínua?"
    ]
  },
  {
    id: "connel",
    nome: "Connel (seromucosa)",
    grupo: "Suturas contínuas",
    tipo: "Invaginante contínua seromucosa",
    comeca: "Começa na parede visceral, com padrão contínuo.",
    trajeto: "Passa por serosa, muscular e mucosa, penetrando o lúmen.",
    termina: "Termina com nó final, mantendo a inversão da parede.",
    servePara: "Fecha vísceras ocas quando se aceita atravessar mucosa e lúmen. Principais usos: anastomoses ou fechamento de vísceras ocas em camada contínua seromucosa, sabendo que é contaminante por penetrar o lúmen.",
    pontosChave: [
      "É seromucosa.",
      "Penetra o lúmen.",
      "É contínua e invaginante."
    ],
    errosComuns: [
      "Confundir com Cushing.",
      "Dizer que não pega mucosa.",
      "Esquecer que é contaminante."
    ],
    perguntas: [
      "A Connel atravessa a mucosa?",
      "Qual é a diferença para Cushing?",
      "Por que é seromucosa?"
    ]
  },
  {
    id: "cushing",
    nome: "Cushing (seromuscular)",
    grupo: "Suturas contínuas",
    tipo: "Invaginante contínua seromuscular",
    comeca: "Começa na parede visceral, com padrão contínuo.",
    trajeto: "Passa por serosa e muscular, sem atravessar a mucosa nem penetrar o lúmen.",
    termina: "Termina com nó final, mantendo a inversão da parede.",
    servePara: "Fecha vísceras ocas com invaginação sem contaminação do lúmen. Principais usos: estômago, intestino, bexiga e segunda camada contínua seromuscular quando se quer evitar contato com a mucosa.",
    pontosChave: [
      "É seromuscular.",
      "Não penetra o lúmen.",
      "É comparação clássica com Connel."
    ],
    errosComuns: [
      "Dizer que é seromucosa.",
      "Confundir com Connel.",
      "Não citar que é não contaminante."
    ],
    perguntas: [
      "A Cushing atravessa a mucosa?",
      "Qual é a diferença para Connel?",
      "Por que é seromuscular?"
    ]
  },
  {
    id: "schmieden",
    nome: "Schmieden (seromucosa)",
    grupo: "Suturas contínuas",
    tipo: "Aposição contínua seromucosa",
    comeca: "Começa na parede visceral e segue como sutura contínua.",
    trajeto: "Passa de serosa para mucosa e retorna, envolvendo a mucosa durante a linha.",
    termina: "Termina com nó final após completar o fechamento.",
    servePara: "Usada em fechamento visceral quando a mucosa participa da sutura. Principais usos: anastomose intestinal e fechamento de vísceras ocas em camada seromucosa, com participação do lúmen.",
    pontosChave: [
      "É seromucosa.",
      "Envolve mucosa.",
      "Deve ser diferenciada de Cushing."
    ],
    errosComuns: [
      "Dizer que é seromuscular.",
      "Confundir com Cushing.",
      "Não citar o envolvimento da mucosa."
    ],
    perguntas: [
      "A Schmieden envolve mucosa?",
      "Ela é seromucosa ou seromuscular?",
      "Como diferenciar de Cushing?"
    ]
  },
  {
    id: "zig-zag",
    nome: "Zig-Zag",
    grupo: "Suturas contínuas",
    tipo: "Contínua em zig-zag",
    comeca: "Começa com nó inicial ou nó sepultado, conforme o plano.",
    trajeto: "Avança alternando passagens em zigue-zague ao longo da incisão.",
    termina: "Termina com nó final, podendo ficar sepultado quando indicado.",
    servePara: "Aproxima tecidos em linha contínua com trajeto alternado. Principais usos: sutura intradérmica ou subcutânea, fechamento estético de pele e planos superficiais quando se deseja nó escondido e menor marca externa.",
    pontosChave: [
      "O trajeto é em zig-zag.",
      "É contínua.",
      "Pode aparecer associada a suturas intradérmicas ou subcutâneas."
    ],
    errosComuns: [
      "Classificar como ponto isolado.",
      "Não reconhecer o trajeto alternado.",
      "Deixar a tensão irregular."
    ],
    perguntas: [
      "Qual é o trajeto da Zig-Zag?",
      "Ela é contínua ou interrompida?",
      "Em que plano pode ser lembrada?"
    ]
  },
  {
    id: "lembert-continua",
    nome: "Lembert",
    grupo: "Suturas contínuas",
    tipo: "Invaginante contínua seromuscular",
    comeca: "Começa na serosa, sem penetrar o lúmen.",
    trajeto: "Segue em linha contínua com passagens seromusculares que invaginam a parede.",
    termina: "Termina com nó final mantendo a inversão da borda visceral.",
    servePara: "Fecha vísceras ocas com invaginação e sem atravessar mucosa. Principais usos: segunda camada de fechamento de estômago, intestino ou bexiga, reforço seromuscular contínuo e fechamento não contaminante.",
    pontosChave: [
      "Pode ser contínua.",
      "É seromuscular.",
      "Não penetra o lúmen."
    ],
    errosComuns: [
      "Confundir com Connel.",
      "Dizer que pega mucosa.",
      "Esquecer que está no grupo das contínuas."
    ],
    perguntas: [
      "A Lembert contínua penetra o lúmen?",
      "Ela é seromucosa ou seromuscular?",
      "Qual efeito produz?"
    ]
  }
];

window.SUTURE_COMPARISONS = [
  ["isolada-simples", "sultan-x"],
  ["wolff", "donatti"],
  ["lembert-interrompida", "gelly"],
  ["longe-perto-perto-longe", "longe-longe-perto-perto"],
  ["longe-longe-perto-perto", "perto-perto-longe-longe"],
  ["continua-simples", "festonada"],
  ["colchoeiro-continuo", "wolff"],
  ["connel", "cushing"],
  ["schmieden", "cushing"],
  ["lembert-continua", "connel"],
  ["lembert-interrompida", "lembert-continua"]
];
