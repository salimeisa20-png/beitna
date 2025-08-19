let team1 = '';
let team2 = '';
let score1 = 0;
let score2 = 0;
let turn = 1;
let questions = [
  "ما هو أكثر شيء تحبه في بيتكم؟",
  "لو تقدر تغير غرفة في البيت، أي غرفة تختار؟",
  "اذكر موقف مضحك صار لكم في البيت",
  "من أكثر واحد يسبب فوضى في البيت؟",
  "ما أول شيء تسويه إذا رجعت للبيت؟",
  "اذكر عادة يومية في البيت ما تقدرون تستغنون عنها"
];
let currentIndex = 0;

function startGame() {
  team1 = document.getElementById('team1').value || 'الفريق الأول';
  team2 = document.getElementById('team2').value || 'الفريق الثاني';
  document.getElementById('setup').classList.add('hidden');
  document.getElementById('game').classList.remove('hidden');
  updateScore();
  showQuestion();
}

function showQuestion() {
  document.getElementById('turn').innerText = 'دور: ' + (turn === 1 ? team1 : team2);
  document.getElementById('question').innerText = questions[currentIndex];
}

function nextQuestion() {
  currentIndex = (currentIndex + 1) % questions.length;
  turn = turn === 1 ? 2 : 1;
  showQuestion();
}

function addPoint() {
  if (turn === 1) {
    score1++;
  } else {
    score2++;
  }
  updateScore();
}

function updateScore() {
  document.getElementById('score1').innerText = team1 + ': ' + score1;
  document.getElementById('score2').innerText = team2 + ': ' + score2;
}
