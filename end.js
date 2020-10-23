const resultScore = document.getElementById("resultScore");
const recentScore = localStorage.getItem("recentScore");
function bgm3() {
    var bgm3 = document.getElementById("bgm3").autoplay;
  }
resultScore.innerText = recentScore;