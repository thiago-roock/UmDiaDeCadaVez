/* ================================
   CONFIG
================================ */
const FRASE_KEY = "frases_state";
const INTERVALO_MS = 60000;

/* ================================
   DATA
================================ */
const frases = [
  "Continue, mesmo quando não parecer suficiente. — O Alquimista",
  "Só hoje, faça o que precisa ser feito. — O Vendedor de Sonhos",
  "Você já chegou até aqui, não foi por acaso. — A Sutil Arte de Ligar o F*da-se",
  "Sem pressa, até as grandes jornadas começam devagar. — O Alquimista",
  "Um passo basta para mudar o rumo. — O Hobbit",
  "Respira e vai, coragem também é silenciosa. — A Batalha do Apocalipse",
  "Constância vence o caos. — Mais Esperto que o Diabo",
  "Disciplina é o que sustenta o impossível. — O Poder do Hábito",
  "Feito é melhor que perfeito. — Essencialismo",
  "A dor passa, mas o que você constrói fica. — O Nome do Vento",
  "Você não precisa vencer tudo hoje. — Ansiedade: Como Enfrentar o Mal do Século",
  "O processo é o que molda quem você se torna. — Mindset",
  "Persistir é ganhar em silêncio. — A Revolução dos Bichos",
  "Pequenos passos mudam destinos. — Hábitos Atômicos",
  "O difícil constrói aquilo que o fácil jamais fará. — A Batalha do Apocalipse",
  "Sem atalhos, só caminho. — O Senhor dos Anéis",
  "Hoje melhor que ontem já é vitória. — O Milagre da Manhã",
  "Calma também é progresso. — O Pequeno Príncipe",
  "Você aguenta mais do que pensa. — O Código da Inteligência",
  "Nada muda se nada muda. — Quem Pensa Enriquece",
  "A constância supera o talento distraído. — Hábitos Atômicos",
  "Foco no que depende de você. — Meditações",
  "Um dia de cada vez. — O Vendedor de Sonhos",
  "Siga mesmo sem vontade, ela vem depois. — O Poder do Hábito",
  "Resultados vêm depois do esforço invisível. — Mindset",
  "Não pare no meio do caminho. — O Senhor dos Anéis",
  "Você prometeu não desistir. — A Batalha do Apocalipse",
  "Volte ao básico sempre que se perder. — Essencialismo",
  "Menos desculpa, mais ação. — Quem Pensa Enriquece",
  "Só não pare. — O Nome do Vento",

  "O caminho aparece para quem continua andando. — O Alquimista",
  "Você é mais forte do que sua dúvida. — O Código da Inteligência",
  "A rotina constrói o extraordinário. — Hábitos Atômicos",
  "Grandes mudanças começam invisíveis. — Mindset",
  "A coragem vem depois do primeiro passo. — O Hobbit",
  "Persistência é fé em ação. — O Vendedor de Sonhos",
  "Nada grande nasce do conforto. — A Batalha do Apocalipse",
  "Você não precisa sentir vontade para agir. — O Poder do Hábito",
  "O tempo recompensa quem não para. — Quem Pensa Enriquece",
  "Toda disciplina começa pequena. — Hábitos Atômicos",
  "Continue, mesmo cansado. — O Nome do Vento",
  "Foque no próximo passo, não no final. — Essencialismo",
  "O simples bem feito já é avanço. — O Milagre da Manhã",
  "Você não está atrasado, está em construção. — Mindset",
  "O esforço de hoje é a liberdade de amanhã. — Mais Esperto que o Diabo",
  "Não negocie com a preguiça. — Disciplina é Destino",
  "A mente forte sustenta o caminho difícil. — Meditações",
  "Toda jornada exige repetição. — Hábitos Atômicos",
  "A dor ensina, mas só se você continuar. — O Nome do Vento",
  "Seja constante, não perfeito. — Essencialismo",
  "A mudança acontece no invisível. — Mindset",
  "Você constrói o que repete. — O Poder do Hábito",
  "O desconforto é parte do crescimento. — A Batalha do Apocalipse",
  "O progresso é silencioso. — Hábitos Atômicos",
  "Nada muda sem ação consistente. — Quem Pensa Enriquece",
  "O começo sempre é o mais difícil. — O Hobbit",
  "A vitória é acumulada em dias comuns. — O Milagre da Manhã",
  "Disciplina é fazer mesmo sem vontade. — O Poder do Hábito",
  "Você já sobreviveu a dias piores. — O Código da Inteligência",
  "O esforço de hoje constrói o amanhã. — Mindset",
  "O hábito define quem você se torna. — Hábitos Atômicos",
  "A persistência vence o talento preguiçoso. — Quem Pensa Enriquece",
  "O foco elimina o ruído. — Essencialismo",
  "Continue, mesmo sem aplausos. — A Revolução dos Bichos",
  "A consistência cria resultados inevitáveis. — Hábitos Atômicos",
  "Cada dia conta, mesmo os ruins. — O Milagre da Manhã",
  "Você não precisa acelerar, só não parar. — O Alquimista",
  "A força nasce na dificuldade. — O Senhor dos Anéis",
  "Faça o básico bem feito todos os dias. — Essencialismo",
  "O tempo valida quem persiste. — Quem Pensa Enriquece",
  "A jornada é construída em silêncio. — O Nome do Vento",
  "Pequenos esforços, grandes resultados. — Hábitos Atômicos",
  "A disciplina protege seus objetivos. — Disciplina é Destino",
  "Você é responsável pelo próximo passo. — Meditações",
  "Continue até se tornar inevitável. — Mindset",
  "A prática vence a teoria. — O Poder do Hábito",
  "O difícil prepara o forte. — A Batalha do Apocalipse",
  "Nada substitui a consistência. — Hábitos Atômicos",
  "Você está mais perto do que imagina. — O Alquimista",
  "A repetição constrói excelência. — Essencialismo",
  "O progresso é uma soma diária. — O Milagre da Manhã",
  "A ação elimina a dúvida. — Quem Pensa Enriquece",
  "Continue, mesmo em silêncio. — O Nome do Vento",
  "O hábito certo muda tudo. — Hábitos Atômicos",
  "A mente disciplina o corpo. — Meditações",
  "O foco é dizer não ao resto. — Essencialismo",
  "A constância cria identidade. — Hábitos Atômicos",
  "O esforço invisível é o que mais importa. — Mindset",
  "A persistência constrói o improvável. — O Alquimista",
  "Você evolui quando insiste. — O Poder do Hábito",
  "A jornada exige paciência. — O Hobbit",
  "O resultado é consequência. — Essencialismo",
  "A prática diária vence o talento. — Quem Pensa Enriquece",
  "Você está no caminho certo, continue. — O Alquimista",
  "A disciplina simplifica decisões. — O Poder do Hábito",
  "O progresso exige repetição. — Hábitos Atômicos",
  "A coragem cresce com a ação. — A Batalha do Apocalipse",
  "O foco constrói clareza. — Essencialismo",
  "A constância transforma. — Hábitos Atômicos",
  "Nada resiste à persistência. — Quem Pensa Enriquece",
  "Você não precisa ser perfeito. — Mindset",
  "A ação cria motivação. — O Poder do Hábito",
  "O esforço contínuo vence. — O Nome do Vento"
];

/* ================================
   STATE
================================ */
let fila = [];
let intervalId = null;

/* ================================
   STORAGE
================================ */
function salvarEstado() {
  localStorage.setItem(
    FRASE_KEY,
    JSON.stringify({ fila })
  );
}

function carregarEstado() {
  const data = JSON.parse(localStorage.getItem(FRASE_KEY));

  if (data && Array.isArray(data.fila) && data.fila.length > 0) {
    fila = data.fila;
  }
}

/* ================================
   UTILS
================================ */
function embaralhar(array) {
  // Fisher-Yates (mais correto que sort com random)
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function garantirFila() {
  if (fila.length === 0) {
    fila = embaralhar(frases);
  }
}

function proximaFrase() {
  garantirFila();
  const frase = fila.pop();
  salvarEstado();
  return frase;
}

/* ================================
   UI
================================ */
function atualizarFrase(texto) {
  const el = document.getElementById("frase");
  if (!el) return;

  el.classList.remove("fade-in");

  setTimeout(() => {
    el.innerText = texto;
    el.classList.add("fade-in");
  }, 200);
}

/* ================================
   FLOW
================================ */
function trocarFrase() {
  const frase = proximaFrase();
  atualizarFrase(frase);
}

/* ================================
   PUBLIC API
================================ */
window.renderFrase = function () {
  carregarEstado();

  // primeira renderização
  atualizarFrase(proximaFrase());

  // evita múltiplos intervals
  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(trocarFrase, INTERVALO_MS);
};