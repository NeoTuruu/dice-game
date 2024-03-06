// Togloomiin buh gazar ashiglagdah huvisagchdiig end zarlay

// Togloom duussan esehiig hadgalah tuluviin huvisagch
var isNewGame;

// Ali toglogch shoo shideh ve gedgiig end hadgalna
var activePlayer;

// 2 toglogchiin tsugluusan onoonuud
var scores;

// Idevhtei toglogchiin eeljindee tsugluuj bga onoo
var roundScore;

//Shoonii zurgiig uzuuleh elementiig DOM-s haij olood end hadgalay
var diceDom = document.querySelector(".dice");

// Togloomiig ehluulne
initGame();

// Togloomiig shineer ehlehed beldene
function initGame() {
  // Togloom ehellee gedeg tuluvt oruulna
  isNewGame = true;

  // Toglogchiin eeljiig hadgalah huvisagch. 1-r toglogchiin 0, 2-r toglogchiig 1 gej temdegley.
  activePlayer = 0;

  //Toglogchdiin tsugluulsan onoog hadgalah huvisagch
  scores = [0, 0];

  // Toglogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
  roundScore = 0;

  // program ehlehed beldey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //   Toglogchdiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player-1";
  document.getElementById("name-1").textContent = "Player-2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
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
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 buusan tul toglogchiin eeljiig end solij ugnu
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. NEW GAME товчыг дарж шинээр эхлэнэ үү");
  }
});

// Hold tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  // toglogchiin eeljiig solino
  if (isNewGame) {
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
    if (scores[activePlayer] >= 100) {
      // Togloomiig duussan tuluvt oruulna
      isNewGame = false;
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
  } else {
    alert("Тоглоом дууссан байна. NEW GAME товчыг дарж шинээр эхлэнэ үү");
  }
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
// New game buyu shine togloom ehluuleh tovchnii event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
