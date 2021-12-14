"use strict";
const quizData = [
  {
    question: "Can you pass a function as an argument to another function?",
    a: "In some cases YES",
    b: "In some cases NO",
    c: "No",
    d: "Yes",
    correct: "d",
  },
  {
    question:
      "How do you determine if a JavaScript instance object was created from a specific constructor or not?",
    a: "createdby",
    b: "instanceof",
    c: "typeof",
    d: "createdfrom",
    correct: "b",
  },
  {
    question: "What is the type of {}?",
    a: "null",
    b: "odject",
    c: "syntax error",
    d: "function",
    correct: "b",
  },
  {
    question: "What allows assigning a set of callbacks on a desired event?",
    a: "Element.prototype.onclick",
    b: "Element.onEvent",
    c: "Element.addEventListener",
    d: "Element.addEventCaller",
    correct: "c",
  },
  {
    question: "What is the way to transform an object into JSON output?",
    a: "All of above",
    b: "Boolean.prototype.toJSON()",
    c: "JSON.stringify()",
    d: "JSON.toString()",
    correct: "c",
  },
];
const questionEL = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEL.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answersEls = document.querySelectorAll(".answer");

  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
      answerEl.checked = false;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions!</h2>`;
    }
  }
});
