// Toglogchiin eeljiig hadgalah huvisagch. 1-r toglogchiin 0, 2-r toglogchiig 1 gej temdegley.
var activePlayer = 0;

//Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;
// Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei. 1-6 gesen utgiig sanamsarguigeer uusgej ugnuu.

// program ehlehed beldey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 dotorh sanamsargui 1 too gargaj avna
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //   shoonii zurgiig web deer gargaj irne
  diceDom.style.display = "block";

  //   buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";

  //   buusan too ni 1-ees yalgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne
  if (diceNumber !== 1) {
    // 1-s yalgaatai too buulaa. Buusan toog toglogchid nemj ugnu.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiig end solij ugnu
    switchToNextPlayer();
  }
});

// Hold tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Ug toglogchiin tsugluulsan eeljiin onoog global onoon deer ni nemj ugnu.
  //   if (activePlayer === 0) {
  //     scores[0] = scores[0] + roundScore;
  //   } else {
  //     scores[1] = scores[1] + roundScore;
  //   }
  scores[activePlayer] = scores[activePlayer] + roundScore;

  //   Delgetsen deer onoog ni uurchilnu
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Toglogch hojson esehiig shalgah (onoo ni 100-aas ih eseh)
  if (scores[activePlayer] >= 10) {
    // Yalagch gesen textiig nerniih orond gargana
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("actives");
  } else {
    switchToNextPlayer();
  }

  // toglogchiin eeljiig solino
});

// Ene function ni togloh eeljiig daraachiin toglogchruu shiljuuldeg
function switchToNextPlayer() {
  //   Eeljiin onoog ni 0 bolgono
  roundScore = 0;
  //   delgetsen deer haruulna
  document.getElementById("current-" + activePlayer).textContent = 0;

  // toglogchiin eeljiig nuguu toglogchruu shiljuulne
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Shoog tur alga bolgono
  diceDom.style.display = "none";
}
// shine togloom ehluuleh tovchnii event listener
document.querySelector(".btn-new").addEventListener("click", function () {
  alert("clicked");
});
