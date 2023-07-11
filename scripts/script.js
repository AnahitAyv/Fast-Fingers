let playButton = document.getElementById("play-button")
let container = document.getElementById("center")
let oneButton = document.getElementById("one-button")
let twoButton = document.getElementById("two-button")
let threeButton = document.getElementById("three-button")
let choose = document.getElementById("choose")
let figureJumping = document.getElementById("figure-jumping")
let keybaord = document.getElementById("keyboard")
let countDown = document.getElementById("count-down")
let startCount = document.getElementById("start-count")
let gameEl = document.getElementById("game")
playButton.addEventListener("click", startGame)
oneButton.addEventListener("click", keyboardPart);
twoButton.addEventListener("click", gamePart);
//    console.log(startCount)
//    threeButton.addEventListener("click", infomationPart);

// function startChoose(e){
//    choose.style.display = "none"
//    figureJumping.style.display = "none"

//    console.log(this)
// }

function startGame() {
   container.style.display = "none"
   choose.style.display = "block"
}


function keyboardPart() {
   let falseEl;
   choose.style.display = "none"
   figureJumping.style.display = "none"
   keybaord.style.display = "block"

   let oneLetter = randomLetter()
   let letterEl = document.getElementById(oneLetter)
   letterEl.classList.add("selected")
   document.addEventListener("keyup", function (e) {
      if (falseEl) {
         setTimeout(() => falseEl.classList.remove("hit"), 100)
      }
      if (e.code == oneLetter) {
         letterEl.classList.remove("selected")
         oneLetter = randomLetter()
         letterEl = document.getElementById(oneLetter)
         letterEl.classList.add("selected")

      } else {
         falseEl = document.getElementById(e.code)
         falseEl.classList.add("hit")
      }
   })
   console.log(letterEl)
}


function gamePart() {
   startCount.innerHTML = 3
   choose.style.display = "none"
   figureJumping.style.display = "none"
   countDown.style.display = "block"

   // let id = setInterval(function time() {
   //    console.log(startCount)
   //    if (startCount.innerHTML == 0) {
   //       clearInterval(id)
   //       countDown.style.display = "none"
   //       gameEl.style.display = "block"

   //    } else {
   //       startCount.innerHTML = startCount.innerHTML - 1
   //    }
   // }, 1000)
}
function randomLetter() {
   let oneLetters = letter[Math.floor(Math.random() * letter.length)];


   return oneLetters;

}





// elements - g1

let keyboard = document.getElementById("keyboard")
let game = document.getElementById("game")
let highScore = document.getElementById("high-score")
let infoText = document.getElementById("info-text")
let input = document.getElementById("input")
// let yourScore = document.getElementById("youre-score")
let youreScore = document.getElementById("score")
let time = document.getElementById("time")
let gameOver = document.getElementById("game-over")
let endScore = document.getElementById("endScore")
let menu = document.getElementById("menu")
let finalScore = document.getElementById("finalScore")
let info = document.getElementById("info-div")
let infoTitle = document.getElementById("info-title")
let infoTxt = document.getElementById("info-txt")
let stage1 = document.getElementById("stage1")
let stage2 = document.getElementById("stage2")

playButton.addEventListener("click", startGame)
oneButton.addEventListener("click", startChoose);
twoButton.addEventListener("click", startChoose);
threeButton.addEventListener("click", startChoose);
menu.addEventListener("click", menuBack);

function startChoose() {
   choose.style.display = "none"
   figureJumping.style.display = "none"
   if (this.id == "two-button") {
      countDown.style.display = "block"
      countDownValue();
   } else if (this.id == "one-button") {
      keyboard.style.display = "block"
   } else if (this.id == "three-button") {
      info.style.display = "block"
      infoTitle.style.display = "block"
      infoTxt.style.display = "block"
      stage1.style.display = "block"
      stage2.style.display = "block"

      figureJumping.style.display = "block"

   }
}


function countDownValue() { // poor function 
   let id = setInterval(function cdv() {
      if (startCount.innerHTML == 0) {
         clearInterval(id)
         countDown.style.display = "none";
         game.style.display = "block"
         generalGame()
      } else {
         startCount.innerHTML = startCount.innerHTML - 1
      }
   }, 1000)
}

function startGame() {
   container.style.display = "none"
   choose.style.display = "block"
}



function startCountdown() {


   const interval = setInterval(() => {

      time.innerHTML = time.innerHTML - 1

      if (time.innerHTML < 0) {
         clearInterval(interval);
         game.style.display = "none"
         gameOver.style.display = "block"
         finalScore.innerHTML = youreScore.innerHTML
         endScore.style.display = "block"
         menu.style.display = "block"
      }
   }, 1000);
}

function generalGame() {
   let time = 5;
   let score = 0;
   let oneWord;
   let hScore = localStorage.score
   startCountdown()
   if (localStorage.length == 0) {
      localStorage.score = 0;
      highScore.innerHTML = localStorage.score
   } else {
      highScore.innerHTML = localStorage.score
   }
   // localStorage.removeItem("score");
   // console.log(localstorage);
   oneWord = randomWords()
   infoText.innerHTML = oneWord

   input.onchange = function () {
      if (oneWord == input.value) {
         score++;
         youreScore.innerHTML = score
         if (hScore < score) {
            localStorage.score = score
            highScore.innerHTML = localStorage.score;
         }
      }
      input.value = ""
      oneWord = randomWords()
      infoText.innerHTML = oneWord
      console.log(input);

   }

   function randomWords() {
      let index = words[Math.floor(Math.random() * words.length)];
      //   console.log(index);
      return index

   }
}
function menuBack() {
   time.innerHTML = 5
   console.log("asd")
   choose.style.display = "block"
   figureJumping.style.display = "none"
   menu.style.display = "none"
   gameOver.style.display = "none"


}



