const resultScore = document.getElementById("resultScore");
const recentScore = localStorage.getItem("recentScore");

resultScore.innerText = recentScore;