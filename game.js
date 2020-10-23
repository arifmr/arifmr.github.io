const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Apa nama Hero yang memiliki skill Omnislash?",
        choice1: "Lifestealer",
        choice2: "Chaos Knight",
        choice3: "Juggernaut",
        choice4: "Night Stalker",
        answer: 3
    },
    {
        question: "Skill apa yang dihasilkan oleh invoker dengan menggabungkan quas, wex dan exort?",
        choice1: "Sunstrike",
        choice2: "Deafening Blast",
        choice3: "Meteor",
        choice4: "Tornado",
        answer: 2
    },
    {
        question: "Item apakah yang harus dibeli apabila ingin mempunyai imunitas terhadap skill berbasis magic?",
        choice1: "Black King Bar",
        choice2: "Divine Rapier",
        choice3: "Gem",
        choice4: "Desolator",
        answer: 1
    },
    {
        question: "Skill ini dimiliki oleh Hero Anti Mage yang jika diaktifkan akan mengembalikan spell kepada casternya, skill apakah ini?",
        choice1: "Rage",
        choice2: "Phantasm",
        choice3: "Mana Void",
        choice4: "Counterspell",
        answer: 4
    },
    {
        question: "Item dengan bonus damage terbesar di DOTA 2 adalah",
        choice1: "Desolator",
        choice2: "Heaven's Halberd",
        choice3: "Tango",
        choice4: "Divine Rapier",
        answer: 4
    },
    {
        question: "Hero yang memiliki skill ultimate bernama Phantasm adalah?",
        choice1: "Lifestealer",
        choice2: "Chaos Knight",
        choice3: "Juggernaut",
        choice4: "Night Stalker",
        answer: 2
    },
    {
        question: "Hero yang memiliki skill ultimate yang mampu untuk memberhentikan ruang dan waktu?",
        choice1: "Faceless Void",
        choice2: "Void Spirit",
        choice3: "Phantom Assassin",
        choice4: "Night Stalker",
        answer: 1
    },
    {
        question: "Hero yang dimalam harinya menjadi lebih kuat adalah?",
        choice1: "Faceless Void",
        choice2: "Void Spirit",
        choice3: "Night Stalker",
        choice4: "Death Prophet",
        answer: 3
    }
]

const correctScore = 25;
const maxQuestion = 4;

startGame = () => {
    questionCounter;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestion) {
        localStorage.setItem("recentScore", score);
        return window.location.assign("/end.html");
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${maxQuestion}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptAnswer = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptAnswer) return;

        acceptAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            resultScore(correctScore);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 300);
    })
})

resultScore = num => {
    score += num;
    scoreText.innerText = score;
} 

startGame();