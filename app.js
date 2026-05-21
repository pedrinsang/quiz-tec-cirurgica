const state = {
  items: Array.isArray(window.QUIZ_ITEMS) ? [...window.QUIZ_ITEMS] : [],
  index: 0,
  correct: new Set(),
};

const sutureState = {
  items: Array.isArray(window.SUTURE_ITEMS) ? [...window.SUTURE_ITEMS] : [],
  comparisons: Array.isArray(window.SUTURE_COMPARISONS) ? [...window.SUTURE_COMPARISONS] : [],
  index: 0,
  comparisonIndex: 0,
  mode: "oral",
  scores: new Map(),
  currentQuestion: "",
};

const tableQuadrants = [
  {
    id: "campos",
    nome: "Campos e materiais de apoio",
    posicao: "superior esquerdo",
    descricao: "Pinça de Backhaus, compressas, panos de campo, cubas e materiais de apoio.",
  },
  {
    id: "auxiliar",
    nome: "Auxiliar",
    posicao: "superior central",
    descricao: "Instrumentos auxiliares usados para apoio, exposição e organização do campo.",
  },
  {
    id: "especial",
    nome: "Especial",
    posicao: "superior direito",
    descricao: "Instrumentais específicos ou menos rotineiros da cirurgia.",
  },
  {
    id: "dierese",
    nome: "Diérese",
    posicao: "inferior esquerdo",
    descricao: "Instrumentos de corte e separação de tecidos.",
  },
  {
    id: "hemostasia",
    nome: "Hemostasia",
    posicao: "inferior central",
    descricao: "Pinças usadas para clampear vasos e controlar sangramento.",
  },
  {
    id: "sintese",
    nome: "Síntese",
    posicao: "inferior direito",
    descricao: "Instrumentos usados no fechamento e na sutura.",
  },
];

const tableGroupRules = [
  {
    id: "cabos-bisturi",
    nome: "Cabos de bisturi",
    quadrantId: "dierese",
    examples: ["Cabo de bisturi n° 3", "Cabo de bisturi n° 4"],
    match: (text) => text.includes("bisturi"),
  },
  {
    id: "tesouras",
    nome: "Tesouras cirúrgicas",
    quadrantId: "dierese",
    examples: ["Tesoura de Mayo", "Tesoura Metzenbaum", "Tesoura operacional"],
    match: (text) => text.includes("tesoura"),
  },
  {
    id: "hemostaticas",
    nome: "Pinças hemostáticas",
    quadrantId: "hemostasia",
    examples: ["Kelly", "Crile", "Halsted", "Rochester-Pean", "Kocher"],
    match: (text) => text.includes("hemostatic"),
  },
  {
    id: "pincas-preensao",
    nome: "Pinças de preensão",
    quadrantId: "auxiliar",
    examples: ["Pinça de dissecção", "Allis", "Adson"],
    match: (text) => text.includes("disseccao") || text.includes("tecidual"),
  },
  {
    id: "backhaus-campos",
    nome: "Backhaus, panos cirúrgicos e compressas",
    quadrantId: "campos",
    examples: ["Pinça Backhaus", "Panos cirúrgicos", "Compressas"],
    match: (text) => text.includes("backhaus"),
  },
  {
    id: "afastadores",
    nome: "Afastadores",
    quadrantId: "auxiliar",
    examples: ["Farabeuf", "Langenbeck", "Balfour", "Finochietto", "Gelpi", "Weitlanner"],
    match: (text) => text.includes("afastador"),
  },
  {
    id: "instrumentais-especiais",
    nome: "Instrumentais especiais",
    quadrantId: "especial",
    examples: ["Clamp de Doyen", "Clamp para conchectomia", "Cabo em T para fio serra Gigli", "Tentacânula"],
    match: (text) => (
      text.includes("clamp") ||
      text.includes("gigli") ||
      text.includes("periosteo") ||
      text.includes("estilete") ||
      text.includes("aspirador") ||
      text.includes("tentacanula")
    ),
  },
  {
    id: "porta-agulhas",
    nome: "Porta-agulhas",
    quadrantId: "sintese",
    examples: ["Mayo-Hegar", "Olsen-Hegar", "Mathieu"],
    match: (text) => text.includes("porta agulha"),
  },
];

const tableState = {
  stage: "count",
  quadrantQueue: [],
  groupQueue: [],
  currentQuadrant: null,
  currentGroup: null,
  score: 0,
  answered: 0,
  total: tableQuadrants.length + tableGroupRules.length,
  locked: false,
  revealed: false,
};

let appMode = "instrument";

const els = {
  progressText: document.querySelector("#progressText"),
  scoreText: document.querySelector("#scoreText"),
  instrumentModeBtn: document.querySelector("#instrumentModeBtn"),
  sutureModeBtn: document.querySelector("#sutureModeBtn"),
  tableModeBtn: document.querySelector("#tableModeBtn"),
  instrumentWorkspace: document.querySelector("#instrumentWorkspace"),
  sutureWorkspace: document.querySelector("#sutureWorkspace"),
  tableWorkspace: document.querySelector("#tableWorkspace"),
  sutureStudySection: document.querySelector("#sutureStudySection"),
  photoStage: document.querySelector("#photoStage"),
  studyBtn: document.querySelector("#studyBtn"),
  studySection: document.querySelector("#studySection"),
  studyTable: document.querySelector("#studyTable"),
  studyPreviewTitle: document.querySelector("#studyPreviewTitle"),
  studyPreviewImages: document.querySelector("#studyPreviewImages"),
  answerForm: document.querySelector("#answerForm"),
  answerInput: document.querySelector("#answerInput"),
  feedback: document.querySelector("#feedback"),
  correctionBox: document.querySelector("#correctionBox"),
  typedCorrection: document.querySelector("#typedCorrection"),
  answerCorrection: document.querySelector("#answerCorrection"),
  responseBox: document.querySelector("#responseBox"),
  responseImages: document.querySelector("#responseImages"),
  correctAnswer: document.querySelector("#correctAnswer"),
  nextBtn: document.querySelector("#nextBtn"),
  addCorrectBtn: document.querySelector("#addCorrectBtn"),
  removeCorrectBtn: document.querySelector("#removeCorrectBtn"),
  showAnswerBtn: document.querySelector("#showAnswerBtn"),
  shuffleBtn: document.querySelector("#shuffleBtn"),
  sutureMeta: document.querySelector("#sutureMeta"),
  sutureTitle: document.querySelector("#sutureTitle"),
  suturePrompt: document.querySelector("#suturePrompt"),
  sutureAnswer: document.querySelector("#sutureAnswer"),
  showSutureAnswerBtn: document.querySelector("#showSutureAnswerBtn"),
  nextSutureBtn: document.querySelector("#nextSutureBtn"),
  sutureRubric: document.querySelector("#sutureRubric"),
  rubricButtons: document.querySelector("#rubricButtons"),
  sutureModeButtons: document.querySelector("#sutureModeButtons"),
  sutureAnswerBox: document.querySelector("#sutureAnswerBox"),
  sutureAnswerContent: document.querySelector("#sutureAnswerContent"),
  sutureStudyTable: document.querySelector("#sutureStudyTable"),
  tableStageLabel: document.querySelector("#tableStageLabel"),
  tableQuestionTitle: document.querySelector("#tableQuestionTitle"),
  tableQuestionText: document.querySelector("#tableQuestionText"),
  quadrantCountForm: document.querySelector("#quadrantCountForm"),
  quadrantCountInput: document.querySelector("#quadrantCountInput"),
  tableFeedback: document.querySelector("#tableFeedback"),
  tableGroupPrompt: document.querySelector("#tableGroupPrompt"),
  tableGroupTitle: document.querySelector("#tableGroupTitle"),
  tableGroupHint: document.querySelector("#tableGroupHint"),
  tableGroupImages: document.querySelector("#tableGroupImages"),
  tableBoardPanel: document.querySelector("#tableBoardPanel"),
  nextTableQuestionBtn: document.querySelector("#nextTableQuestionBtn"),
  restartTableBtn: document.querySelector("#restartTableBtn"),
  surgicalTable: document.querySelector("#surgicalTable"),
  tableScoreText: document.querySelector("#tableScoreText"),
};

function stripAccents(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeAnswer(value) {
  return answerTokensRaw(value)
    .map(canonicalToken)
    .join(" ");
}

function answerTokensRaw(value) {
  return stripAccents(value)
    .toLowerCase()
    .replace(/n\s*([0-9]+)/g, "numero $1")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
}

function canonicalToken(token) {
  const fixed = new Map([
    ["dente", "dent"],
    ["dentes", "dent"],
    ["reto", "ret"],
    ["reta", "ret"],
    ["retos", "ret"],
    ["retas", "ret"],
    ["curvo", "curv"],
    ["curva", "curv"],
    ["curvos", "curv"],
    ["curvas", "curv"],
    ["fino", "fin"],
    ["fina", "fin"],
    ["finos", "fin"],
    ["finas", "fin"],
    ["rombo", "romb"],
    ["romba", "romb"],
    ["rombos", "romb"],
    ["rombas", "romb"],
    ["hemostatico", "hemostatic"],
    ["hemostatica", "hemostatic"],
    ["hemostaticos", "hemostatic"],
    ["hemostaticas", "hemostatic"],
    ["traumatico", "traumatic"],
    ["traumatica", "traumatic"],
    ["traumaticos", "traumatic"],
    ["traumaticas", "traumatic"],
    ["cirurgico", "cirurgic"],
    ["cirurgica", "cirurgic"],
    ["cirurgicos", "cirurgic"],
    ["cirurgicas", "cirurgic"],
    ["autoestatico", "autoestatic"],
    ["autoestatica", "autoestatic"],
    ["autoestaticos", "autoestatic"],
    ["autoestaticas", "autoestatic"],
  ]);

  if (fixed.has(token)) {
    return fixed.get(token);
  }

  if (token.length > 4 && token.endsWith("es")) {
    return token.slice(0, -2);
  }

  if (token.length > 3 && token.endsWith("s")) {
    return token.slice(0, -1);
  }

  return token;
}

function acceptedAnswers(item) {
  const answer = normalizeAnswer(item.resposta);
  return new Set([answer]);
}

function answerTokens(value) {
  return answerTokensRaw(value);
}

function diffTokens(expected, typed) {
  const rows = expected.length + 1;
  const cols = typed.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i <= expected.length; i += 1) dp[i][0] = i;
  for (let j = 0; j <= typed.length; j += 1) dp[0][j] = j;

  for (let i = 1; i <= expected.length; i += 1) {
    for (let j = 1; j <= typed.length; j += 1) {
      const cost = expected[i - 1] === typed[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  const ops = [];
  let i = expected.length;
  let j = typed.length;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0) {
      const cost = expected[i - 1] === typed[j - 1] ? 0 : 1;
      if (dp[i][j] === dp[i - 1][j - 1] + cost) {
        ops.unshift({
          type: cost === 0 ? "ok" : "wrong",
          expected: expected[i - 1],
          typed: typed[j - 1],
        });
        i -= 1;
        j -= 1;
        continue;
      }
    }

    if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
      ops.unshift({ type: "missing", expected: expected[i - 1], typed: "" });
      i -= 1;
      continue;
    }

    ops.unshift({ type: "extra", expected: "", typed: typed[j - 1] });
    j -= 1;
  }

  return ops;
}

function appendMark(target, text, className) {
  if (!text) return;

  const span = document.createElement("span");
  span.className = `mark ${className}`;
  span.textContent = text;
  target.append(span, " ");
}

function appendCharDiff(target, text, compareTo, role) {
  const wrapper = document.createElement("span");
  wrapper.className = "mark mixed";
  const maxLength = Math.max(text.length, compareTo.length);

  for (let index = 0; index < maxLength; index += 1) {
    const char = text[index];
    if (!char) continue;

    const other = compareTo[index];
    const span = document.createElement("span");
    span.className = char === other
      ? "char ok"
      : `char ${role === "typed" ? "wrong" : "missing"}`;
    span.textContent = char;
    wrapper.append(span);
  }

  target.append(wrapper, " ");
}

function renderCorrection(item, typedValue) {
  const expected = answerTokens(item.resposta);
  const typed = answerTokens(typedValue);
  const ops = diffTokens(expected, typed);

  els.typedCorrection.innerHTML = "";
  els.answerCorrection.innerHTML = "";

  ops.forEach((op) => {
    if (op.type === "ok") {
      appendMark(els.typedCorrection, op.typed, "ok");
      appendMark(els.answerCorrection, op.expected, "ok");
      return;
    }

    if (op.type === "wrong") {
      appendCharDiff(els.typedCorrection, op.typed, op.expected, "typed");
      appendCharDiff(els.answerCorrection, op.expected, op.typed, "expected");
      return;
    }

    if (op.type === "missing") {
      appendMark(els.answerCorrection, op.expected, "missing");
      return;
    }

    appendMark(els.typedCorrection, op.typed, "extra");
  });

  if (!typed.length) {
    appendMark(els.typedCorrection, "sem resposta", "wrong");
  }

  els.correctionBox.hidden = false;
}

function currentItem() {
  return state.items[state.index];
}

function renderImages(target, images) {
  target.innerHTML = "";
  const grid = document.createElement("div");
  grid.className = "photoGrid enterMotion";

  images.forEach((src, imageIndex) => {
    const img = document.createElement("img");
    img.src = encodeURI(src);
    img.alt = `Imagem ${imageIndex + 1} do instrumento`;
    grid.append(img);
  });

  target.append(grid);
}

function splitStudyName(item) {
  const name = item.resposta;
  const rules = [
    [/^(Afastador autoest[aá]tico) de (.+)$/i, "Afastador autoestático", "de $2"],
    [/^(Afastador manual) de (.+)$/i, "$1", "de $2"],
    [/^(Cabo Bisturi) número (.+)$/i, "$1", "n$2"],
    [/^(Clamp intestinal de Doyen) (.+)$/i, "$1", "$2"],
    [/^(Clamp para conchectomia) (.+)$/i, "$1", "$2"],
    [/^(Pinça de dissecção) (.+)$/i, "$1", "$2"],
    [/^(Pinça Hemostática Traumática) de (.+)$/i, "$1", "de $2"],
    [/^(Pinça tecidual) de (.+)$/i, "$1", "de $2"],
    [/^(Porta-agulha) de (.+)$/i, "$1", "de $2"],
    [/^(Tesoura de .+ de Metzenbaum) (.+)$/i, "$1", "$2"],
    [/^(Tesoura Operacional Cirúrgica) (.+)$/i, "$1", "$2"],
    [/^(Tesoura Operacional de Mayo) (.+)$/i, "$1", "$2"],
  ];

  for (const [pattern, generalTemplate, variationTemplate] of rules) {
    const match = name.match(pattern);
    if (match) {
      const general = generalTemplate.replace(/\$(\d)/g, (_, index) => match[Number(index)]);
      const variation = variationTemplate.replace(/\$(\d)/g, (_, index) => match[Number(index)]);
      return { general, variation };
    }
  }

  return { general: name, variation: name };
}

function groupKey(value) {
  return stripAccents(value).toLowerCase().replace(/\s+/g, " ").trim();
}

function preferDisplayName(current, candidate) {
  if (!current) return candidate;
  const currentHasAccent = current !== stripAccents(current);
  const candidateHasAccent = candidate !== stripAccents(candidate);

  if (!currentHasAccent && candidateHasAccent) {
    return candidate;
  }

  if (current === current.toLowerCase() && candidate !== candidate.toLowerCase()) {
    return candidate;
  }

  return current;
}

function buildStudyGroups() {
  const groups = new Map();

  state.items.forEach((item) => {
    const parts = splitStudyName(item);
    const key = groupKey(parts.general);
    if (!groups.has(key)) {
      groups.set(key, {
        general: parts.general,
        variants: [],
      });
    }

    const group = groups.get(key);
    group.general = preferDisplayName(group.general, parts.general);
    group.variants.push({
      item,
      variation: parts.variation,
    });
  });

  return [...groups.values()]
    .map((group) => ({
      general: group.general,
      variants: group.variants.sort((a, b) => a.variation.localeCompare(b.variation, "pt-BR")),
    }))
    .sort((a, b) => a.general.localeCompare(b.general, "pt-BR"));
}

function showStudyItem(item, button) {
  document.querySelectorAll(".variantBtn.active").forEach((activeButton) => {
    activeButton.classList.remove("active");
  });

  button.classList.add("active");
  els.studyPreviewTitle.textContent = item.resposta;
  renderImages(els.studyPreviewImages, item.imagens);
}

function renderStudyTable() {
  const groups = buildStudyGroups();
  els.studyTable.innerHTML = "";
  let firstButton = null;

  groups.forEach((group) => {
    const row = document.createElement("section");
    row.className = "studyGroup";

    const general = document.createElement("div");
    general.className = "studyGeneral";
    general.textContent = group.general;

    const variants = document.createElement("div");
    variants.className = "studyVariants";

    group.variants.forEach(({ item, variation }) => {
      const button = document.createElement("button");
      button.className = "variantBtn";
      button.type = "button";
      button.textContent = variation;
      button.addEventListener("click", () => showStudyItem(item, button));
      if (!firstButton) {
        firstButton = button;
      }
      variants.append(button);
    });

    row.append(general, variants);
    els.studyTable.append(row);
  });

  if (firstButton) {
    firstButton.click();
  }
}

function updateChrome() {
  if (appMode === "sutures") {
    updateSutureChrome();
    return;
  }

  if (appMode === "table") {
    updateTableChrome();
    return;
  }

  const total = state.items.length;
  const percentage = total ? Math.round((state.correct.size / total) * 100) : 0;
  els.progressText.textContent = total
    ? state.index >= total
      ? "Quiz finalizado"
      : `Questão ${state.index + 1} de ${total}`
    : "Nenhum item encontrado. Gere quiz-data.js primeiro.";
  els.scoreText.textContent = `${state.correct.size} / ${total} (${percentage}%)`;
}

function clearFeedback() {
  els.feedback.className = "feedback";
  els.feedback.textContent = "";
}

function renderItem() {
  const item = currentItem();
  updateChrome();
  clearFeedback();
  els.answerInput.value = "";
  els.correctionBox.hidden = true;
  els.typedCorrection.innerHTML = "";
  els.answerCorrection.innerHTML = "";
  els.responseBox.hidden = true;
  els.responseImages.innerHTML = "";
  els.correctAnswer.textContent = "";

  if (!item) {
    renderFinish();
    els.answerInput.disabled = true;
    els.showAnswerBtn.disabled = true;
    els.nextBtn.disabled = true;
    els.addCorrectBtn.disabled = true;
    els.removeCorrectBtn.disabled = true;
    return;
  }

  els.answerInput.disabled = false;
  els.showAnswerBtn.disabled = false;
  els.nextBtn.disabled = false;
  els.addCorrectBtn.disabled = false;
  els.removeCorrectBtn.disabled = false;
  renderImages(els.photoStage, item.imagens);
  els.answerInput.focus();
}

function renderFinish() {
  const total = state.items.length;
  const percentage = total ? Math.round((state.correct.size / total) * 100) : 0;
  const isPerfect = total > 0 && state.correct.size === total;

  els.photoStage.innerHTML = "";
  const finish = document.createElement("section");
  finish.className = `finishBox enterMotion${isPerfect ? " perfectFinish" : ""}`;
  finish.innerHTML = `
    ${isPerfect ? renderCelebrationBurst() : ""}
    <h2>Quiz acabou!</h2>
    <p>Você acertou <strong>${state.correct.size}</strong> de <strong>${total}</strong> instrumentos.</p>
    <p class="finishPercent">${percentage}% de acertos</p>
    ${isPerfect ? "<p class=\"perfectMessage\">Gabaritou os instrumentais.</p>" : ""}
  `;
  els.photoStage.append(finish);
}

function renderCelebrationBurst() {
  const pieces = Array.from({ length: 34 }, (_, index) => {
    const angle = Math.round((360 / 34) * index);
    const distance = 90 + (index % 7) * 13;
    const delay = (index % 9) * 45;
    return `<span style="--angle:${angle}deg; --distance:${distance}px; --delay:${delay}ms"></span>`;
  }).join("");

  return `<div class="celebrationBurst" aria-hidden="true">${pieces}</div>`;
}

function showAnswer() {
  const item = currentItem();
  if (!item) return;

  els.correctAnswer.textContent = item.resposta;
  els.responseImages.innerHTML = "";

  if (item.respostas.length) {
    renderImages(els.responseImages, item.respostas);
  }

  els.responseBox.hidden = false;
}

function checkAnswer(event) {
  event.preventDefault();
  const item = currentItem();
  if (!item) return;

  const typed = normalizeAnswer(els.answerInput.value);
  const valid = acceptedAnswers(item).has(typed);

  if (valid) {
    state.correct.add(item.id);
    els.feedback.className = "feedback ok";
    els.feedback.textContent = "Correto.";
    showAnswer();
  } else {
    els.feedback.className = "feedback error";
    els.feedback.textContent = "Resposta corrigida. Revise os trechos destacados.";
    renderCorrection(item, els.answerInput.value);
    showAnswer();
  }

  updateChrome();
}

function nextItem() {
  if (!state.items.length) return;
  state.index += 1;
  renderItem();
}

function adjustCurrentScore(direction) {
  const item = currentItem();
  if (!item) return;

  if (direction > 0) {
    state.correct.add(item.id);
    els.feedback.className = "feedback ok";
    els.feedback.textContent = "Acerto adicionado manualmente.";
  } else {
    state.correct.delete(item.id);
    els.feedback.className = "feedback error";
    els.feedback.textContent = "Acerto retirado manualmente.";
  }

  updateChrome();
}

function shuffleItems() {
  for (let i = state.items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.items[i], state.items[j]] = [state.items[j], state.items[i]];
  }

  state.index = 0;
  renderItem();
}

function shuffleItemsSilently() {
  for (let i = state.items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.items[i], state.items[j]] = [state.items[j], state.items[i]];
  }

  state.index = 0;
}

function shuffleCopy(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function tableGroupItems(group) {
  return state.items.filter((item) => {
    const text = `${normalizeAnswer(item.resposta)} ${normalizeAnswer(item.nome_arquivo || "")}`;
    return group.match(text);
  });
}

function updateTableChrome() {
  const percentage = tableState.answered
    ? Math.round((tableState.score / tableState.answered) * 100)
    : 0;

  els.progressText.textContent = "Montagem da mesa cirúrgica";
  els.scoreText.textContent = `${tableState.score} / ${tableState.answered} (${percentage}%)`;
  els.tableScoreText.textContent = `${tableState.score} / ${tableState.answered} - ${percentage}%`;
}

function resetTableQuiz() {
  tableState.stage = "count";
  tableState.quadrantQueue = shuffleCopy(tableQuadrants);
  tableState.groupQueue = shuffleCopy(tableGroupRules);
  tableState.currentQuadrant = null;
  tableState.currentGroup = null;
  tableState.score = 0;
  tableState.answered = 0;
  tableState.locked = false;
  tableState.revealed = false;

  els.quadrantCountInput.value = "";
  els.tableBoardPanel.hidden = true;
  els.surgicalTable.innerHTML = "";
  renderTableStage();
}

function renderSurgicalTable(showLabels = false) {
  els.surgicalTable.innerHTML = "";
  tableQuadrants.forEach((quadrant) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quadrantCell";
    button.dataset.quadrant = quadrant.id;
    button.innerHTML = `
      <span class="quadrantPosition">${quadrant.posicao}</span>
      <strong>${showLabels ? quadrant.nome : "Quadrante"}</strong>
      <small>${showLabels ? quadrant.descricao : "Aguardando resposta"}</small>
    `;
    button.addEventListener("click", () => handleQuadrantClick(quadrant.id));
    els.surgicalTable.append(button);
  });
}

function revealQuadrantLabel(quadrantId) {
  const quadrant = tableQuadrants.find((item) => item.id === quadrantId);
  const cell = els.surgicalTable.querySelector(`[data-quadrant="${quadrantId}"]`);
  if (!quadrant || !cell) return;

  const title = cell.querySelector("strong");
  const description = cell.querySelector("small");
  title.textContent = quadrant.nome;
  description.textContent = quadrant.descricao;
}

function setTableFeedback(type, message) {
  els.tableFeedback.className = `tableFeedback ${type}`;
  els.tableFeedback.textContent = message;
}

function renderTableStage() {
  updateTableChrome();
  els.nextTableQuestionBtn.hidden = true;
  els.tableGroupPrompt.hidden = true;
  els.tableGroupImages.innerHTML = "";
  els.tableFeedback.className = "tableFeedback";
  els.tableFeedback.textContent = "";

  if (tableState.stage === "count") {
    els.tableStageLabel.textContent = "Etapa 1";
    els.tableQuestionTitle.textContent = "Quantidade de quadrantes";
    els.tableQuestionText.textContent = "Antes de montar a mesa, responda quantos quadrantes serão separados.";
    els.quadrantCountForm.hidden = false;
    els.quadrantCountInput.disabled = false;
    els.quadrantCountInput.focus();
    return;
  }

  els.quadrantCountForm.hidden = true;

  if (tableState.stage === "quadrants") {
    nextQuadrantQuestion();
    return;
  }

  if (tableState.stage === "groups") {
    nextGroupQuestion();
    return;
  }

  renderTableFinish();
}

function checkQuadrantCount(event) {
  event.preventDefault();
  const value = Number(els.quadrantCountInput.value);

  tableState.answered += 1;
  if (value === tableQuadrants.length) {
    tableState.score += 1;
    tableState.revealed = true;
    els.tableBoardPanel.hidden = false;
    renderSurgicalTable(false);
    setTableFeedback("ok", "Correto. A mesa será separada em 6 quadrantes.");
    tableState.stage = "quadrants";
    els.quadrantCountInput.disabled = true;
    els.quadrantCountForm.hidden = true;
    els.nextTableQuestionBtn.hidden = false;
  } else {
    tableState.revealed = true;
    els.tableBoardPanel.hidden = false;
    renderSurgicalTable(false);
    setTableFeedback("error", "Quase. O gabarito é 6 quadrantes: 3 colunas por 2 linhas.");
    tableState.stage = "quadrants";
    els.quadrantCountInput.disabled = true;
    els.quadrantCountForm.hidden = true;
    els.nextTableQuestionBtn.hidden = false;
  }

  updateTableChrome();
}

function nextQuadrantQuestion() {
  tableState.locked = false;
  els.quadrantCountForm.hidden = true;
  renderSurgicalTable(false);

  const next = tableState.quadrantQueue.shift();
  if (!next) {
    tableState.stage = "groups";
    nextGroupQuestion();
    return;
  }

  tableState.currentQuadrant = next;
  els.tableStageLabel.textContent = "Etapa 2";
  els.tableQuestionTitle.textContent = "Nome dos quadrantes";
  els.tableQuestionText.textContent = `Clique no quadrante: ${next.nome}.`;
}

function nextGroupQuestion() {
  tableState.locked = false;
  renderSurgicalTable(false);

  const next = tableState.groupQueue.shift();
  if (!next) {
    tableState.stage = "done";
    renderTableFinish();
    return;
  }

  tableState.currentGroup = next;
  const quadrant = tableQuadrants.find((item) => item.id === next.quadrantId);
  const items = tableGroupItems(next).slice(0, 4);

  els.tableStageLabel.textContent = "Etapa 3";
  els.tableQuestionTitle.textContent = "Posicionamento dos grupos";
  els.tableQuestionText.textContent = "Clique no quadrante onde este grupo deve ficar.";
  els.tableGroupPrompt.hidden = false;
  els.tableGroupTitle.textContent = next.nome;
  els.tableGroupHint.textContent = "Observe os exemplos e escolha o quadrante correto da mesa.";
  renderTableGroupImages(items, next.examples || []);

  if (!quadrant) {
    setTableFeedback("error", "Este grupo não tem quadrante configurado.");
  }
}

function renderTableGroupImages(items, examples = []) {
  els.tableGroupImages.innerHTML = "";
  items.forEach((item) => {
    const img = document.createElement("img");
    img.src = encodeURI(item.imagens[0]);
    img.alt = item.resposta;
    img.title = item.resposta;
    els.tableGroupImages.append(img);
  });

  examples.forEach((example) => {
    const chip = document.createElement("span");
    chip.className = "tableMaterialChip";
    chip.textContent = example;
    els.tableGroupImages.append(chip);
  });
}

function handleQuadrantClick(quadrantId) {
  if (appMode !== "table" || tableState.locked || tableState.stage === "count" || tableState.stage === "done") {
    return;
  }

  const expectedId = tableState.stage === "quadrants"
    ? tableState.currentQuadrant?.id
    : tableState.currentGroup?.quadrantId;

  if (!expectedId) return;

  tableState.locked = true;
  tableState.answered += 1;

  const isCorrect = quadrantId === expectedId;
  const expected = tableQuadrants.find((item) => item.id === expectedId);
  markQuadrants(quadrantId, expectedId);
  revealQuadrantLabel(expectedId);
  if (quadrantId !== expectedId) {
    revealQuadrantLabel(quadrantId);
  }

  if (isCorrect) {
    tableState.score += 1;
    setTableFeedback("ok", "Correto. Esse é o quadrante certo.");
  } else {
    setTableFeedback("error", `Resposta incorreta. Gabarito: ${expected.nome}, no quadrante ${expected.posicao}.`);
  }

  els.nextTableQuestionBtn.hidden = false;
  updateTableChrome();
}

function clearQuadrantMarks() {
  els.surgicalTable.querySelectorAll(".quadrantCell").forEach((cell) => {
    cell.classList.remove("correct", "wrong", "expected");
  });
}

function markQuadrants(clickedId, expectedId) {
  els.surgicalTable.querySelectorAll(".quadrantCell").forEach((cell) => {
    if (cell.dataset.quadrant === clickedId && clickedId === expectedId) {
      cell.classList.add("correct");
      return;
    }

    if (cell.dataset.quadrant === clickedId) {
      cell.classList.add("wrong");
    }

    if (cell.dataset.quadrant === expectedId) {
      cell.classList.add("expected");
    }
  });
}

function nextTableQuestion() {
  els.nextTableQuestionBtn.hidden = true;

  if (tableState.stage === "quadrants") {
    nextQuadrantQuestion();
    return;
  }

  if (tableState.stage === "groups") {
    nextGroupQuestion();
    return;
  }

  renderTableStage();
}

function renderTableFinish() {
  tableState.stage = "done";
  clearQuadrantMarks();
  const percentage = tableState.answered
    ? Math.round((tableState.score / tableState.answered) * 100)
    : 0;
  const isPerfect = tableState.answered > 0 && tableState.score === tableState.answered;

  els.tableStageLabel.textContent = "Final";
  els.tableQuestionTitle.textContent = "Mesa montada";
  els.tableQuestionText.textContent = `Você acertou ${tableState.score} de ${tableState.answered} perguntas (${percentage}%).`;
  els.quadrantCountForm.hidden = true;
  els.tableGroupPrompt.hidden = true;
  els.nextTableQuestionBtn.hidden = true;
  els.tableBoardPanel.hidden = false;

  if (isPerfect) {
    els.tableFeedback.className = "tableFeedback ok perfectTableFeedback";
    els.tableFeedback.innerHTML = `${renderCelebrationBurst()}<span>Gabaritou a montagem da mesa cirúrgica.</span>`;
  } else {
    setTableFeedback("ok", "Treino finalizado. Revise os quadrantes que errou e tente de novo.");
  }

  updateTableChrome();
}

function itemById(id) {
  return sutureState.items.find((item) => item.id === id);
}

function currentSuture() {
  return sutureState.items[sutureState.index];
}

function currentComparison() {
  const pair = sutureState.comparisons[sutureState.comparisonIndex];
  if (!pair) return [];
  return pair.map(itemById).filter(Boolean);
}

function sutureScoreKey() {
  if (sutureState.mode === "compare") {
    const pair = sutureState.comparisons[sutureState.comparisonIndex] || [];
    return `compare:${pair.join(":")}`;
  }

  const item = currentSuture();
  if (!item) return "";
  if (sutureState.mode === "question") {
    return `question:${item.id}:${sutureState.currentQuestion}`;
  }

  return `oral:${item.id}`;
}

function updateSutureChrome() {
  const total = sutureState.mode === "compare"
    ? sutureState.comparisons.length
    : sutureState.items.length;
  const current = sutureState.mode === "compare"
    ? sutureState.comparisonIndex + 1
    : sutureState.index + 1;
  const scored = sutureState.scores.size;
  const scoreValues = [...sutureState.scores.values()];
  const average = scoreValues.length
    ? (scoreValues.reduce((sum, value) => sum + value, 0) / scoreValues.length).toFixed(1)
    : "0.0";

  els.progressText.textContent = total
    ? `Suturas - ${current} de ${total}`
    : "Nenhuma sutura encontrada.";
  els.scoreText.textContent = `${scored} avaliadas | média ${average}/3`;
}

function setAppMode(nextMode) {
  appMode = nextMode;
  const isSuture = appMode === "sutures";
  const isTable = appMode === "table";

  els.instrumentWorkspace.hidden = isSuture || isTable;
  els.studySection.hidden = isSuture || isTable;
  els.sutureWorkspace.hidden = !isSuture;
  els.sutureStudySection.hidden = !isSuture;
  els.tableWorkspace.hidden = !isTable;
  els.instrumentModeBtn.classList.toggle("active", !isSuture && !isTable);
  els.sutureModeBtn.classList.toggle("active", isSuture);
  els.tableModeBtn.classList.toggle("active", isTable);
  els.studyBtn.hidden = isTable;
  els.studyBtn.textContent = isSuture ? "Tabela de suturas" : "Tabela de estudo";

  if (isSuture) {
    renderSutureItem();
    return;
  }

  if (isTable) {
    resetTableQuiz();
    return;
  }

  els.studyBtn.hidden = false;
  renderItem();
}

function appendTextBlock(parent, title, text) {
  const row = document.createElement("div");
  row.className = "answerLine";

  const strong = document.createElement("strong");
  strong.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  row.append(strong, paragraph);
  parent.append(row);
}

function appendBulletList(parent, title, items) {
  const row = document.createElement("div");
  row.className = "answerLine";

  const strong = document.createElement("strong");
  strong.textContent = title;

  const list = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  });

  row.append(strong, list);
  parent.append(row);
}

function renderSutureAnswerCard(item, parent) {
  const card = document.createElement("article");
  card.className = "sutureAnswerCard";

  const heading = document.createElement("h3");
  heading.textContent = item.nome;
  card.append(heading);

  appendTextBlock(card, "Categoria", item.grupo);
  appendTextBlock(card, "Tipo", item.tipo);
  appendTextBlock(card, "Como começa", item.comeca);
  appendTextBlock(card, "Trajeto da agulha", item.trajeto);
  appendTextBlock(card, "Como termina", item.termina);
  appendTextBlock(card, "Para que serve", item.servePara);
  appendBulletList(card, "Pontos que o professor pode cobrar", item.pontosChave);
  appendBulletList(card, "Erros comuns", item.errosComuns);

  parent.append(card);
}

function renderSutureStudyTable() {
  if (!els.sutureStudyTable) return;
  els.sutureStudyTable.innerHTML = "";

  const groups = new Map();
  sutureState.items.forEach((item) => {
    if (!groups.has(item.grupo)) {
      groups.set(item.grupo, []);
    }
    groups.get(item.grupo).push(item);
  });

  groups.forEach((items, groupName) => {
    const section = document.createElement("section");
    section.className = "sutureStudyGroup";

    const heading = document.createElement("h3");
    heading.textContent = groupName;
    section.append(heading);

    items.forEach((item) => {
      const details = document.createElement("details");
      details.className = "sutureStudyItem";

      const summary = document.createElement("summary");
      summary.textContent = item.nome;
      details.append(summary);

      appendTextBlock(details, "Tipo", item.tipo);
      appendTextBlock(details, "Trajeto", item.trajeto);
      appendTextBlock(details, "Serve para", item.servePara);
      appendBulletList(details, "Cobrar de si mesmo", item.pontosChave);

      section.append(details);
    });

    els.sutureStudyTable.append(section);
  });
}

function clearSutureAnswer() {
  els.sutureAnswer.value = "";
  els.sutureAnswerBox.hidden = true;
  els.sutureAnswerContent.innerHTML = "";
  els.sutureRubric.hidden = true;
  els.rubricButtons.querySelectorAll("button").forEach((button) => {
    button.classList.remove("active");
  });
}

function renderSutureItem() {
  clearSutureAnswer();
  updateSutureChrome();

  if (!sutureState.items.length) {
    els.sutureMeta.textContent = "";
    els.sutureTitle.textContent = "Nenhuma sutura cadastrada";
    els.suturePrompt.textContent = "Confira o arquivo suturas-data.js.";
    return;
  }

  if (sutureState.mode === "compare") {
    const items = currentComparison();
    els.sutureMeta.textContent = "Comparação de prova";
    els.sutureTitle.textContent = items.map((item) => item.nome).join(" vs ");
    els.suturePrompt.textContent = "Explique as diferencas: categoria, trajeto, camadas envolvidas, finalidade e como nao confundir uma com a outra.";
    els.sutureAnswer.focus();
    return;
  }

  const item = currentSuture();
  els.sutureMeta.textContent = `${item.grupo} - ${item.tipo}`;
  els.sutureTitle.textContent = item.nome;

  if (sutureState.mode === "question") {
    const questions = item.perguntas.length ? item.perguntas : [`Explique ${item.nome} como na prova.`];
    sutureState.currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    els.suturePrompt.textContent = sutureState.currentQuestion;
  } else {
    sutureState.currentQuestion = "";
    els.suturePrompt.textContent = "Explique como se estivesse diante do EVA: por onde começa, trajeto da agulha, como termina, para que serve e quais cuidados você precisa citar.";
  }

  els.sutureAnswer.focus();
}

function showSutureAnswer() {
  els.sutureAnswerContent.innerHTML = "";

  if (sutureState.mode === "compare") {
    currentComparison().forEach((item) => renderSutureAnswerCard(item, els.sutureAnswerContent));
  } else {
    const item = currentSuture();
    if (item) renderSutureAnswerCard(item, els.sutureAnswerContent);
  }

  els.sutureAnswerBox.hidden = false;
  els.sutureRubric.hidden = false;

  const key = sutureScoreKey();
  const savedScore = sutureState.scores.get(key);
  els.rubricButtons.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.score) === savedScore);
  });
}

function nextSuture() {
  if (sutureState.mode === "compare") {
    sutureState.comparisonIndex = (sutureState.comparisonIndex + 1) % sutureState.comparisons.length;
  } else {
    sutureState.index = (sutureState.index + 1) % sutureState.items.length;
  }

  renderSutureItem();
}

function setSutureMode(mode) {
  sutureState.mode = mode;
  sutureState.index = 0;
  sutureState.comparisonIndex = 0;

  els.sutureModeButtons.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });

  renderSutureItem();
}

function setSutureScore(score) {
  const key = sutureScoreKey();
  if (!key) return;

  sutureState.scores.set(key, score);
  els.rubricButtons.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.score) === score);
  });
  updateSutureChrome();
}

function shuffleSutures() {
  if (sutureState.mode === "compare") {
    for (let i = sutureState.comparisons.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [sutureState.comparisons[i], sutureState.comparisons[j]] = [sutureState.comparisons[j], sutureState.comparisons[i]];
    }
    sutureState.comparisonIndex = 0;
  } else {
    for (let i = sutureState.items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [sutureState.items[i], sutureState.items[j]] = [sutureState.items[j], sutureState.items[i]];
    }
    sutureState.index = 0;
  }

  renderSutureItem();
}

els.answerForm.addEventListener("submit", checkAnswer);
els.nextBtn.addEventListener("click", nextItem);
els.addCorrectBtn.addEventListener("click", () => adjustCurrentScore(1));
els.removeCorrectBtn.addEventListener("click", () => adjustCurrentScore(-1));
els.showAnswerBtn.addEventListener("click", showAnswer);
els.instrumentModeBtn.addEventListener("click", () => setAppMode("instrument"));
els.sutureModeBtn.addEventListener("click", () => setAppMode("sutures"));
els.tableModeBtn.addEventListener("click", () => setAppMode("table"));
els.shuffleBtn.addEventListener("click", () => {
  if (appMode === "sutures") {
    shuffleSutures();
    return;
  }

  if (appMode === "table") {
    resetTableQuiz();
    return;
  }

  shuffleItems();
});
els.studyBtn.addEventListener("click", () => {
  const section = appMode === "sutures" ? els.sutureStudySection : els.studySection;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
});
els.showSutureAnswerBtn.addEventListener("click", showSutureAnswer);
els.nextSutureBtn.addEventListener("click", nextSuture);
els.sutureModeButtons.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-mode]");
  if (!button) return;
  setSutureMode(button.dataset.mode);
});
els.rubricButtons.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-score]");
  if (!button) return;
  setSutureScore(Number(button.dataset.score));
});
els.quadrantCountForm.addEventListener("submit", checkQuadrantCount);
els.nextTableQuestionBtn.addEventListener("click", nextTableQuestion);
els.restartTableBtn.addEventListener("click", resetTableQuiz);

shuffleItemsSilently();
renderItem();
renderStudyTable();
renderSutureStudyTable();
