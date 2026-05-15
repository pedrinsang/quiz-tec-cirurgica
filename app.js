const state = {
  items: Array.isArray(window.QUIZ_ITEMS) ? [...window.QUIZ_ITEMS] : [],
  index: 0,
  correct: new Set(),
};

const els = {
  progressText: document.querySelector("#progressText"),
  scoreText: document.querySelector("#scoreText"),
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
  grid.className = "photoGrid";

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
  const total = state.items.length;
  const percentage = total ? Math.round((state.correct.size / total) * 100) : 0;
  els.progressText.textContent = total
    ? state.index >= total
      ? "Quiz finalizado"
      : `Questao ${state.index + 1} de ${total}`
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

  els.photoStage.innerHTML = "";
  const finish = document.createElement("section");
  finish.className = "finishBox";
  finish.innerHTML = `
    <h2>Quiz acabou!</h2>
    <p>Voce acertou <strong>${state.correct.size}</strong> de <strong>${total}</strong> instrumentos.</p>
    <p class="finishPercent">${percentage}% de acertos</p>
  `;
  els.photoStage.append(finish);
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

els.answerForm.addEventListener("submit", checkAnswer);
els.nextBtn.addEventListener("click", nextItem);
els.addCorrectBtn.addEventListener("click", () => adjustCurrentScore(1));
els.removeCorrectBtn.addEventListener("click", () => adjustCurrentScore(-1));
els.showAnswerBtn.addEventListener("click", showAnswer);
els.shuffleBtn.addEventListener("click", shuffleItems);
els.studyBtn.addEventListener("click", () => {
  els.studySection.scrollIntoView({ behavior: "smooth", block: "start" });
});

shuffleItemsSilently();
renderItem();
renderStudyTable();
