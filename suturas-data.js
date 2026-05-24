window.SUTURE_ITEMS = [
  {
    id: "interrompida-simples",
    nome: "Interrompida simples",
    grupo: "Suturas interrompidas",
    tipo: "Aposicao",
    comeca: "A agulha entra a mais de 0,5 cm da borda incisada.",
    trajeto: "Passa perpendicularmente pelo tecido de um lado, atravessa quantidade igual de tecido no lado oposto e o ponto seguinte fica a distancia igual ao tamanho do ponto anterior.",
    termina: "O no e amarrado fora da linha de incisao, com pontas longas de 0,5 a 1,0 cm ou curtas quando o no fica sepultado.",
    servePara: "E a sutura mais usada e versatil; indicada para suturas internas e externas quando se deseja boa aposicao e controle ponto a ponto da tensao.",
    pontosChave: [
      "Cada ponto e independente.",
      "Mantem boa aposicao quando feita com tracao moderada.",
      "Pode causar inversao indesejavel se apertada demais."
    ],
    errosComuns: [
      "Colocar o no sobre a linha de incisao.",
      "Fazer passagens assimetricas.",
      "Apertar demais e inverter as bordas."
    ],
    perguntas: [
      "Qual e a distancia minima da borda na interrompida simples?",
      "Onde deve ficar o no?",
      "Por que ela permite controle ponto a ponto da tensao?"
    ]
  },
  {
    id: "wolff",
    nome: "Wolff",
    grupo: "Suturas interrompidas",
    tipo: "Horizontal em U",
    comeca: "Inicia em uma borda e atravessa para a borda oposta.",
    trajeto: "Faz uma segunda passagem paralela, formando um quadrado, com as duas extremidades do fio saindo pelo mesmo lado da ferida.",
    termina: "O no aproxima as bordas e produz leve eversao se colocado corretamente.",
    servePara: "Indicada para feridas sob tensao moderada, podendo reduzir espaco morto ou funcionar como sutura de tensao quando distante da borda.",
    pontosChave: [
      "E horizontal em U.",
      "Promove leve eversao.",
      "Usa menos material e e de execucao rapida."
    ],
    errosComuns: [
      "Confundir com Donatti.",
      "Apertar demais e reduzir suprimento sanguineo.",
      "Nao manter o formato quadrado."
    ],
    perguntas: [
      "Qual formato o Wolff forma?",
      "Quando ele e indicado?",
      "Qual risco existe se os pontos forem apertados demais?"
    ]
  },
  {
    id: "donatti",
    nome: "Donatti",
    grupo: "Suturas interrompidas",
    tipo: "Vertical em U",
    comeca: "A primeira passagem e feita a distancia maior que 0,5 cm da borda.",
    trajeto: "A segunda passagem retorna perto da borda, cerca de 2 a 3 mm, em padrao vertical.",
    termina: "O no promove aposicao completa e precisa, com leve eversao.",
    servePara: "Da suporte a tecidos sob tensao e pode auxiliar uma primeira linha de sutura.",
    pontosChave: [
      "E vertical em U.",
      "A primeira passagem e longe e a segunda e perto.",
      "Altera pouco o suprimento sanguineo quando colocado distante da borda."
    ],
    errosComuns: [
      "Descrever como horizontal.",
      "Nao diferenciar passagem longe e passagem perto.",
      "Ignorar que e mais demorada e gera maior reacao inflamatoria."
    ],
    perguntas: [
      "Qual e a ordem das passagens no Donatti?",
      "Que efeito ele tem nas bordas?",
      "Como diferenciar Donatti de Wolff?"
    ]
  },
  {
    id: "sultan-x",
    nome: "Sultan ou X",
    grupo: "Suturas interrompidas",
    tipo: "Cruzada",
    comeca: "A agulha penetra de um lado da incisao e passa perpendicularmente pela ferida.",
    trajeto: "A segunda passagem e feita paralela a primeira, a 5 a 10 mm, formando o ponto cruzado em X.",
    termina: "O no fixa as duas passagens e mantem a aposicao.",
    servePara: "Sutura de aposicao que modifica o U horizontal, sem alterar o suprimento sanguineo mesmo sob tensao e prevenindo eversao.",
    pontosChave: [
      "Tambem chamada de cruzada.",
      "E uma modificacao do U horizontal.",
      "Nao promove eversao."
    ],
    errosComuns: [
      "Fazer um colchoeiro horizontal sem cruzar.",
      "Nao respeitar o afastamento de 5 a 10 mm entre passagens.",
      "Dizer que e sutura evertente."
    ],
    perguntas: [
      "Por que o Sultan tambem e chamado de X?",
      "Qual sutura ele modifica?",
      "Qual efeito ele evita nas bordas?"
    ]
  },
  {
    id: "longe-perto-perto-longe",
    nome: "Longe-perto-perto-longe",
    grupo: "Suturas interrompidas",
    tipo: "Combinacao com sutura de tensao",
    comeca: "Comeca no componente longe, afastado da borda.",
    trajeto: "Segue em movimento espiral: longe, perto, perto e longe, combinando reducao de tensao com aposicao.",
    termina: "O no aproxima as bordas sem tracao excessiva.",
    servePara: "Indicada quando a pele requer tensao moderada para aposicao; o componente longe reduz tensao e o perto faz aposicao.",
    pontosChave: [
      "A ordem do nome e o gabarito.",
      "Tem forca de tensao maior que a interrompida simples.",
      "Tracao excessiva pode inverter a incisao."
    ],
    errosComuns: [
      "Trocar por longe-longe-perto-perto.",
      "Apertar demais.",
      "Nao explicar a funcao do componente longe e do componente perto."
    ],
    perguntas: [
      "Qual e a sequencia exata?",
      "Qual componente reduz tensao?",
      "Qual componente faz aposicao?"
    ]
  },
  {
    id: "longe-longe-perto-perto",
    nome: "Longe-longe-perto-perto",
    grupo: "Suturas interrompidas",
    tipo: "Padrao de distancia",
    comeca: "Comeca longe da borda.",
    trajeto: "As duas primeiras referencias ficam longe da margem e as duas ultimas ficam perto da margem.",
    termina: "O no fecha o ponto mantendo a sequencia longe-longe-perto-perto.",
    servePara: "Treinar controle de distancia e tensao em padrao citado junto das variacoes longe-perto.",
    pontosChave: [
      "As duas primeiras passagens sao longe.",
      "As duas ultimas sao perto.",
      "Diferencia-se da longe-perto-perto-longe pela ordem."
    ],
    errosComuns: [
      "Misturar a ordem.",
      "Chamar de Donatti sem explicar o padrao.",
      "Nao manter distancias proporcionais."
    ],
    perguntas: [
      "Qual e a ordem completa?",
      "Como ela difere da longe-perto-perto-longe?",
      "O que significa longe e perto?"
    ]
  },
  {
    id: "perto-longe",
    nome: "Perto-longe",
    grupo: "Suturas interrompidas",
    tipo: "Padrao de distancia",
    comeca: "Comeca perto da borda.",
    trajeto: "Segue da passagem perto para a passagem longe, conforme o esquema de distancias da borda.",
    termina: "O no mantem a relacao perto-longe.",
    servePara: "Treinar a ordem das passagens pela distancia em relacao a borda da ferida.",
    pontosChave: [
      "A ordem do nome e o gabarito.",
      "Perto e longe se referem a distancia da margem.",
      "Aparece no esquema junto de longe-perto e dos padroes combinados."
    ],
    errosComuns: [
      "Inverter para longe-perto.",
      "Nao diferenciar distancia da borda.",
      "Apertar demais e deformar as bordas."
    ],
    perguntas: [
      "Por onde comeca a perto-longe?",
      "O que significa perto?",
      "Como ela difere da longe-perto?"
    ]
  },
  {
    id: "longe-perto",
    nome: "Longe-perto",
    grupo: "Suturas interrompidas",
    tipo: "Padrao de distancia",
    comeca: "Comeca longe da borda.",
    trajeto: "Segue da passagem longe para a passagem perto, conforme o esquema de distancias da borda.",
    termina: "O no mantem a relacao longe-perto.",
    servePara: "Treinar a ordem das passagens pela distancia em relacao a borda da ferida.",
    pontosChave: [
      "A ordem do nome e o gabarito.",
      "Longe e perto se referem a distancia da margem.",
      "Aparece no esquema junto de perto-longe e dos padroes combinados."
    ],
    errosComuns: [
      "Inverter para perto-longe.",
      "Nao manter distancia proporcional.",
      "Confundir com longe-perto-perto-longe."
    ],
    perguntas: [
      "Por onde comeca a longe-perto?",
      "O que significa longe?",
      "Como ela difere da perto-longe?"
    ]
  },
  {
    id: "jaquetao",
    nome: "Jaquetao",
    grupo: "Suturas interrompidas",
    tipo: "Sobreposicao",
    comeca: "Inicia de modo a permitir que uma borda fique sobre a outra.",
    trajeto: "As passagens aproximam os tecidos em padrao de sobreposicao.",
    termina: "O no mantem uma borda sobreposta a outra.",
    servePara: "Indicada principalmente na reducao de onfalocele em bovinos e equinos.",
    pontosChave: [
      "E sutura de sobreposicao.",
      "A indicacao classica do PDF e onfalocele.",
      "Nao e padrao de aposicao simples."
    ],
    errosComuns: [
      "Descrever como ponto simples.",
      "Esquecer a indicacao em onfalocele.",
      "Nao mencionar sobreposicao."
    ],
    perguntas: [
      "Qual e a classificacao de bordas do Jaquetao?",
      "Qual indicacao principal aparece no PDF?",
      "O que diferencia de uma sutura de aposicao?"
    ]
  },
  {
    id: "sutura-em-oito",
    nome: "Sutura em oito",
    grupo: "Suturas interrompidas",
    tipo: "Ponto em oito",
    comeca: "Inicia como ponto isolado com trajetos que se cruzam.",
    trajeto: "As passagens formam desenho semelhante ao numero oito sobre os tecidos.",
    termina: "O no fixa o cruzamento do ponto.",
    servePara: "Padrao interrompido reconhecido pelo desenho em oito, apresentado junto das suturas isoladas.",
    pontosChave: [
      "O reconhecimento principal e o desenho.",
      "E ponto isolado.",
      "Diferencia-se do Sultan pelo padrao grafico cobrado."
    ],
    errosComuns: [
      "Confundir com X/Sultan.",
      "Nao cruzar os trajetos.",
      "Responder apenas ponto simples."
    ],
    perguntas: [
      "Como reconhecer a sutura em oito?",
      "Ela e isolada ou continua?",
      "Qual e o principal detalhe visual?"
    ]
  },
  {
    id: "gelly",
    nome: "Gelly",
    grupo: "Suturas interrompidas",
    tipo: "Invaginante",
    comeca: "Inicia na parede visceral, respeitando o plano seroso/submucoso indicado no esquema.",
    trajeto: "As passagens favorecem invaginacao das camadas, sem ser tratada como simples sutura de pele.",
    termina: "O no mantem o ponto invaginante.",
    servePara: "Sutura visceral apresentada no PDF junto ao esquema de tunicas e pontos isolados.",
    pontosChave: [
      "Tem finalidade invaginante.",
      "Aparece no contexto de suturas viscerais.",
      "Nao deve ser descrita como simples aposicao de pele."
    ],
    errosComuns: [
      "Chamar de isolada simples.",
      "Nao mencionar invaginacao.",
      "Ignorar as camadas viscerais."
    ],
    perguntas: [
      "Qual e a finalidade da Gelly?",
      "Em que contexto ela aparece no PDF?",
      "Por que nao e apenas uma sutura simples de pele?"
    ]
  },
  {
    id: "kurschner",
    nome: "Continua simples ou Kurschner",
    grupo: "Suturas continuas",
    tipo: "Aposicao continua",
    comeca: "Inicia com no no comeco da sutura, que pode ficar escondido.",
    trajeto: "Usa uma serie de passagens simples, perpendiculares a linha de incisao, reintroduzidas na mesma direcao da anterior.",
    termina: "No final, as pontas do fio sao amarradas com no minimo quatro camadas de nos, ou duas de cirurgiao.",
    servePara: "Fechamento rapido de subcutaneo e fascia quando nao ha planos de tensao, e tecidos que requerem minima forca de seguranca com maxima aposicao.",
    pontosChave: [
      "O fio nao e cortado entre os pontos.",
      "Usa menos material e diminui o tempo cirurgico.",
      "O rompimento pode comprometer toda a linha."
    ],
    errosComuns: [
      "Fazer pontos isolados.",
      "Esquecer o no inicial ou final.",
      "Usar em plano com tensao importante."
    ],
    perguntas: [
      "Qual outro nome da continua simples?",
      "Como ela termina?",
      "Em quais planos ela e indicada?"
    ]
  },
  {
    id: "festonada",
    nome: "Festonada, retrograda, ancorada de Ford ou Reverdin",
    grupo: "Suturas continuas",
    tipo: "Continua bloqueada",
    comeca: "Comeca como uma sutura continua simples.",
    trajeto: "A cada passagem atraves dos tecidos, o fio e unido ao ponto anterior.",
    termina: "Finaliza com no ao fim da linha.",
    servePara: "Aumenta a estabilidade caso falhe um no ou parte da linha de sutura.",
    pontosChave: [
      "E modificacao da continua simples.",
      "Cada passagem fica ancorada no ponto anterior.",
      "Tambem recebe os nomes retrograda, ancorada de Ford ou Reverdin."
    ],
    errosComuns: [
      "Fazer continua simples sem ancorar.",
      "Nao citar a maior estabilidade.",
      "Apertar demais e causar necrose na pele."
    ],
    perguntas: [
      "Quais sinonimos a festonada recebe?",
      "O que acontece a cada passagem?",
      "Qual e a principal vantagem?"
    ]
  },
  {
    id: "colchoeiro-continuo",
    nome: "Colchoeiro ou U continua",
    grupo: "Suturas continuas",
    tipo: "Colchoeiro continuo",
    comeca: "Inicia como um ponto isolado simples.",
    trajeto: "Avanca 1 a 2 cm; a segunda passagem atravessa os tecidos perpendicularmente a incisao, depois a agulha avanca mais 1 a 2 cm e entra na direcao contralateral.",
    termina: "Finaliza com arremate ao fim da linha.",
    servePara: "Pode ser usada na pele quando ha indicacao de sutura continua e certo grau de eversao.",
    pontosChave: [
      "Tambem chamada U continua.",
      "A rapidez no fechamento e a principal vantagem.",
      "Promove certo grau de eversao."
    ],
    errosComuns: [
      "Confundir com Wolff isolado.",
      "Nao manter avancos regulares de 1 a 2 cm.",
      "Esquecer que e continua."
    ],
    perguntas: [
      "Qual e o avanco aproximado entre passagens?",
      "Quando pode ser usada na pele?",
      "Qual e sua principal vantagem?"
    ]
  },
  {
    id: "bunnel",
    nome: "Bunnel",
    grupo: "Suturas continuas",
    tipo: "Tendao",
    comeca: "Inicia no tendao, conforme o esquema de Bunnel apresentado no PDF.",
    trajeto: "Segue em padrao de travamento/entrecruzamento no tendao para distribuir a tracao.",
    termina: "Finaliza com amarracao que mantem a tensao do reparo tendineo.",
    servePara: "Sutura indicada no PDF para tendao.",
    pontosChave: [
      "A indicacao destacada e tendao.",
      "Deve resistir a tracao longitudinal.",
      "Nao e sutura comum de pele."
    ],
    errosComuns: [
      "Classificar como simples de pele.",
      "Nao citar tendao.",
      "Perder a ideia de distribuicao da tracao."
    ],
    perguntas: [
      "Para qual tecido a Bunnel e indicada?",
      "Por que precisa distribuir tracao?",
      "Ela pertence ao treino de pele simples?"
    ]
  },
  {
    id: "intradermica-subcutanea",
    nome: "Intradermica ou subcutanea",
    grupo: "Suturas continuas",
    tipo: "Zig-zag intradermico",
    comeca: "Inicia escondendo o no no interior dos tecidos.",
    trajeto: "Segue em formato de zig-zag, com a agulha perpendicular a incisao, avancando paralela a incisao sob a derme/no subcutaneo.",
    termina: "Termina com o no novamente sepultado.",
    servePara: "Usada frequentemente na forma continua para fechamento intradermico ou subcutaneo.",
    pontosChave: [
      "Nao deve ser chamada incorretamente de subcuticular.",
      "Fios 3-0 ou 4-0 podem ser usados.",
      "Os nos ficam sepultados."
    ],
    errosComuns: [
      "Deixar o no aparente.",
      "Nao fazer o zig-zag.",
      "Chamar de subcuticular como termo principal."
    ],
    perguntas: [
      "Onde fica o no inicial?",
      "Qual e o formato do trajeto?",
      "Quais fios podem ser usados segundo o PDF?"
    ]
  },
  {
    id: "sutura-de-tensao",
    nome: "Suturas de tensao",
    grupo: "Suturas especiais de pele",
    tipo: "Suporte de tensao",
    comeca: "Sao colocadas longe das bordas da pele.",
    trajeto: "Distribuem a forca longe da linha de sutura; as bordas da pele sao fechadas com pontos interrompidos simples.",
    termina: "Podem receber suporte adicional com botoes, tubos de borracha, plastico ou silicone antes dos nos.",
    servePara: "Usadas quando existe muita tensao na linha de sutura e e necessaria forca adicional para fechar a ferida.",
    pontosChave: [
      "Ajudam a evitar deiscencia em feridas sob muita tensao.",
      "Devem ficar longe das bordas para preservar suprimento sanguineo.",
      "Donatti/U vertical promove bom suporte com minima reducao vascular."
    ],
    errosComuns: [
      "Colocar perto demais da borda.",
      "Nao fechar a pele entre elas com pontos simples.",
      "Ignorar risco de isquemia se mal aplicadas."
    ],
    perguntas: [
      "Quando usar sutura de tensao?",
      "Por que ela fica longe das bordas?",
      "Que materiais podem servir de suporte adicional?"
    ]
  },
  {
    id: "gambee",
    nome: "Gambee",
    grupo: "Suturas viscerais",
    tipo: "Visceral",
    comeca: "Inicia na parede visceral conforme o esquema de suturas viscerais.",
    trajeto: "Padrao visceral usado em anastomoses, com controle das camadas da parede.",
    termina: "O no aproxima a parede sem excesso de tensao.",
    servePara: "Sutura visceral listada no PDF antes das suturas de Schmieden, Lembert, Connell e Cushing.",
    pontosChave: [
      "Pertence ao grupo de suturas viscerais.",
      "Deve ser diferenciada das suturas de pele.",
      "A cobranca tende a ser pelo reconhecimento do nome e contexto."
    ],
    errosComuns: [
      "Classificar como sutura de pele.",
      "Misturar com Lembert.",
      "Nao mencionar que e visceral."
    ],
    perguntas: [
      "Em que grupo a Gambee aparece?",
      "Ela e sutura de pele ou visceral?",
      "Com quais suturas ela deve ser comparada no capitulo?"
    ]
  },
  {
    id: "schmieden",
    nome: "Schmieden",
    grupo: "Suturas viscerais",
    tipo: "Aposicao seromucosa contaminante",
    comeca: "O ponto e introduzido como uma sutura simples interrompida, da serosa pela muscular e mucosa ate o lume.",
    trajeto: "Volta do lume pela mucosa e muscular antes de cruzar a incisao; no lado oposto entra na muscular, passa pela mucosa ao lume e retorna por mucosa, muscular e serosa.",
    termina: "O fio inicial e final sao apertados para que a sutura penetre nos tecidos.",
    servePara: "Muito usada em anastomose intestinal quando se deseja uma unica camada de sutura.",
    pontosChave: [
      "E seromucosa.",
      "E contaminante porque penetra o lume.",
      "Pode ser usada em anastomose intestinal."
    ],
    errosComuns: [
      "Dizer que nao pega mucosa.",
      "Confundir com Cushing.",
      "Nao citar o lume."
    ],
    perguntas: [
      "A Schmieden penetra o lume?",
      "Qual camada ela inclui?",
      "Quando ela e usada com frequencia?"
    ]
  },
  {
    id: "lembert",
    nome: "Lembert",
    grupo: "Suturas viscerais",
    tipo: "Invaginante nao contaminante seromuscular",
    comeca: "E aplicada do lado de fora do lume.",
    trajeto: "A agulha passa por serosa, muscular e submucosa, retorna por muscular e serosa no mesmo lado, cruza para o lado oposto e repete o trajeto serosa-muscular-submucosa-serosa distal.",
    termina: "O fio inicial e final sao atados; pode seguir em forma continua vertical ou ser feita interrompida.",
    servePara: "Fechamento de visceras ocas com invaginacao sem penetrar o lume.",
    pontosChave: [
      "E nao contaminante.",
      "E seromuscular/submucosa, sem penetrar o lume.",
      "Pode ser continua ou interrompida."
    ],
    errosComuns: [
      "Dizer que pega mucosa/lume.",
      "Confundir com Connell.",
      "Nao mencionar invaginacao."
    ],
    perguntas: [
      "A Lembert e contaminante?",
      "Ela pode ser interrompida?",
      "Qual efeito produz na viscera?"
    ]
  },
  {
    id: "halsted-visceral",
    nome: "Halsted",
    grupo: "Suturas viscerais",
    tipo: "U interrompido invertido",
    comeca: "Deriva da Lembert.",
    trajeto: "Consiste em Lembert com somente duas passagens paralelas e reversas no tecido.",
    termina: "O no mantem o U interrompido invertido.",
    servePara: "Versao interrompida derivada da Lembert para invaginacao visceral.",
    pontosChave: [
      "E chamada no PDF de U interrompido invertido.",
      "Tem apenas duas passagens paralelas e reversas.",
      "E modificacao da Lembert."
    ],
    errosComuns: [
      "Confundir com pinca Halsted.",
      "Dizer que e continua.",
      "Nao ligar com Lembert."
    ],
    perguntas: [
      "De qual sutura a Halsted visceral deriva?",
      "Quantas passagens ela tem?",
      "Como o PDF a chama?"
    ]
  },
  {
    id: "connell",
    nome: "Connell",
    grupo: "Suturas viscerais",
    tipo: "Continua invaginante horizontal contaminante",
    comeca: "Inicia com uma sutura em U vertical invertida.",
    trajeto: "Avanca paralela a linha de incisao, passa por serosa, muscular, submucosa e mucosa, penetrando o lume antes de retornar.",
    termina: "O no e feito ao final, tracionando periodicamente o fio para favorecer inversao.",
    servePara: "Sutura continua invaginante horizontal de visceras ocas quando se aceita penetrar o lume.",
    pontosChave: [
      "Penetra o lumen da viscera.",
      "E horizontal e invaginante.",
      "Diferenca central: Connell pega mucosa, Cushing nao."
    ],
    errosComuns: [
      "Chamar de nao contaminante.",
      "Confundir com Cushing.",
      "Nao citar a inversao."
    ],
    perguntas: [
      "A Connell penetra o lumen?",
      "Qual e a diferenca para Cushing?",
      "Como ela inicia?"
    ]
  },
  {
    id: "cushing",
    nome: "Cushing",
    grupo: "Suturas viscerais",
    tipo: "Continua invaginante horizontal nao contaminante",
    comeca: "Inicia com uma sutura em U vertical invertida.",
    trajeto: "Avanca paralela a incisao, passando por serosa, muscular e submucosa, sem penetrar a mucosa/lumen.",
    termina: "O no e feito no final, com tracoes periodicas para favorecer inversao.",
    servePara: "Fechamento invaginante de visceras ocas sem penetrar o lume.",
    pontosChave: [
      "Nao penetra o lumen.",
      "Passa somente ate a submucosa.",
      "E comparacao obrigatoria com Connell."
    ],
    errosComuns: [
      "Dizer que pega mucosa.",
      "Confundir com Schmieden.",
      "Nao mencionar que e horizontal e continua."
    ],
    perguntas: [
      "A Cushing atravessa mucosa?",
      "Ate qual camada ela passa?",
      "Por que e nao contaminante?"
    ]
  },
  {
    id: "parker-kerr",
    nome: "Parker-Kerr",
    grupo: "Suturas viscerais",
    tipo: "Fechamento de coto visceral",
    comeca: "Comeca com uma Cushing sobre pinca sem dar no.",
    trajeto: "Depois faz uma Lembert sobre a primeira linha.",
    termina: "Finaliza o fechamento do coto visceral com a combinacao das linhas.",
    servePara: "Fechamento de cotos viscerais.",
    pontosChave: [
      "Cushing sobre pinca sem no.",
      "Lembert sobre a primeira.",
      "E modificacao usada em cotos viscerais."
    ],
    errosComuns: [
      "Dar no na Cushing inicial.",
      "Esquecer a Lembert sobreposta.",
      "Descrever como sutura de pele."
    ],
    perguntas: [
      "Qual e a sequencia da Parker-Kerr?",
      "A Cushing inicial recebe no?",
      "Para que tipo de estrutura ela e usada?"
    ]
  },
  {
    id: "bolsa-de-tabaco",
    nome: "Bolsa de tabaco",
    grupo: "Suturas viscerais",
    tipo: "Circular invaginante",
    comeca: "Inicia ao redor de uma abertura ou coto.",
    trajeto: "Segue em padrao circular, permitindo o fechamento por tracao do fio.",
    termina: "Ao tracionar e amarrar, o tecido fecha como uma bolsa.",
    servePara: "Padrao citado no PDF junto das suturas viscerais para fechamento circular/invaginante.",
    pontosChave: [
      "O trajeto e circular.",
      "Fecha por tracao do fio.",
      "Produz invaginacao do tecido."
    ],
    errosComuns: [
      "Fazer linha reta continua.",
      "Nao manter o circulo.",
      "Nao explicar o efeito de bolsa."
    ],
    perguntas: [
      "Qual e o formato da bolsa de tabaco?",
      "Como ela fecha o tecido?",
      "Qual efeito ela produz?"
    ]
  }
];

window.SUTURE_COMPARISONS = [
  ["donatti", "wolff"],
  ["sultan-x", "wolff"],
  ["longe-perto-perto-longe", "longe-longe-perto-perto"],
  ["perto-longe", "longe-perto"],
  ["longe-perto", "longe-perto-perto-longe"],
  ["kurschner", "festonada"],
  ["bunnel", "intradermica-subcutanea"],
  ["wolff", "colchoeiro-continuo"],
  ["schmieden", "cushing"],
  ["connell", "cushing"],
  ["lembert", "connell"],
  ["lembert", "halsted-visceral"],
  ["parker-kerr", "cushing"],
  ["intradermica-subcutanea", "kurschner"]
];
