// Toglogchiin eeljiig hadgalah huvisagch. 1-r toglogchiin 0, 2-r toglogchiig 1 gej temdegley.
var activePlayer = 1;

//Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;
// Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei. 1-6 gesen utgiig sanamsarguigeer uusgej ugnuu.
var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>YES!</em>";

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
console.log("Шоо :" + dice);
