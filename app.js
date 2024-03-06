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
    // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgonoo.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // toglogchiin eeljiig nuguu toglogchruu shiljuulne
    // Herev idevhtei toglogch ni 0 baival 1 bolgo.
    // Ugui bol idevhtei toglogchiig 0 bolgoj huvirga
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Shoog tur alga bolgono
    diceDom.style.display = "none";
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
