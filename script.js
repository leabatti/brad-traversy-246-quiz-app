const quizData = [
  {
    question: 'What is the smallest country in the world?',
    a: 'Monaco',
    b: 'San Marino',
    c: 'Vatican City',
    d: 'Liechtenstein',
    correct: 'c',
  },
  {
    question: 'How many colors are there in a rainbow?',
    a: '5',
    b: '7',
    c: '6',
    d: '8',
    correct: 'b',
  },
  {
    question: 'What is the fastest animal in the world?',
    a: 'Leopard',
    b: 'Peregrine Falcon',
    c: 'Cheetah',
    d: 'Antelope',
    correct: 'b',
  },
  {
    question: 'What is the largest ocean?',
    a: 'Atlantic',
    b: 'Indian',
    c: 'Pacific',
    d: 'Antarctic',
    correct: 'c',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');

const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
