const onePlayerButton = document.getElementById("one-player")
const twoPlayersButton = document.getElementById("two-players")
const onePlayerRulesPage = document.getElementById("oneplayer-rules")
const twoPlayersRulesPage = document.getElementById("twoplayer-rules")
const welcomePage = document.getElementById("welcome-message")
const onePlayerGame = document.getElementById("oneplayer-gamescreen")
const twoPlayerGame = document.getElementById("twoplayer-gamescreen")
const nameScreen = document.getElementById("twoplayer-namescreen")
const playerOneNameScreen = document.getElementById("player1-name")
const playerTwoNameScreen = document.getElementById("player2-name")
const playerOneName = document.getElementById("playerOneName")
const playersTwoName = document.getElementById("playerTwoName")
const playerOneSide = document.getElementById("player1-screen")
const playerTwoSide = document.getElementById("player2-screen")

const losePage = document.getElementById("lose-screen")
const twoPlayerLosePage = document.getElementById("twoplayer-lose-screen")
const winPage = document.getElementById("win-screen")
const score = document.getElementById("score-text")
const playerOneScore = document.getElementById("player1-score")
const playerTwoScore = document.getElementById("player2-score")
const finalScore = document.getElementById("finalScore")
const winScore = document.getElementById("winScore")
const winText = document.getElementById("win-text")
const loseText = document.getElementById("twoplayer-lose-text")

const buttonSelectAudio = new Audio()
const diceRollAudio = new Audio()
buttonSelectAudio.src = "/sounds/player-select.mp3"
diceRollAudio.src = "/sounds/dice-roll.wav"

onePlayerRulesPage.style.display = "none"
twoPlayersRulesPage.style.display = "none"
onePlayerGame.style.display = "none"
twoPlayerGame.style.display = "none"
nameScreen.style.display = "none"
playerOneNameScreen.style.display = "none"
playerTwoNameScreen.style.display = "none"
losePage.style.display = "none"
twoPlayerLosePage.style.display = "none"
winPage.style.display = "none"

let diceImages = ["/images/dice1.png", "/images/dice2.png", "/images/dice3.png", "/images/dice4.png", "/images/dice5.png", "/images/dice6.png"]
let dice = document.getElementById("dice").querySelectorAll("img")
let twoPlayerDice = document.getElementById("dice-2").querySelectorAll("img")
let totalScore

function onePlayerSelect(){
    buttonSelectAudio.play()
    welcomePage.style.display = "none"
    onePlayerRulesPage.style.display = "initial"
}

function twoPlayerSelect(){
    buttonSelectAudio.play()
    welcomePage.style.display = "none"
    twoPlayersRulesPage.style.display = "initial"
}

function startOnePlayerGame(){
    buttonSelectAudio.play()
    onePlayerRulesPage.style.display = "none"
    losePage.style.display = "none"
    winPage.style.display = "none"
    onePlayerGame.style.display = "initial"
    score.innerText = ""
    totalScore = 0
}

function startNameScreen(){
    buttonSelectAudio.play()
    twoPlayersRulesPage.style.display = "none"
    playerTwoNameScreen.style.display = "none"
    nameScreen.style.display = "initial"
    playerOneNameScreen.style.display = "initial"
}
let playerOne
let playerTwo

function playerTwoName(){
    buttonSelectAudio.play()
    playerOneNameScreen.style.display = "none"
    playerTwoNameScreen.style.display = "initial"
    playerOne = playerOneName.value

}

function startTwoPlayerGame(){
    totalScore = 0
    playerOneScore.innerText = ""
    playerTwoScore.innerText = ""
    buttonSelectAudio.play()
    playerTwo = playersTwoName.value
    playerTwoNameScreen.style.display = "none"
    twoPlayerGame.style.display = "initial"
    document.getElementById("player1-text").textContent = playerOne
    document.getElementById("player2-text").textContent = playerTwo
    playerTwoSide.style.opacity = 0.5
    playerOneSide.style.opacity = 1
}

function playerOneRoll(){
    diceRollAudio.play()
    twoPlayerDice.forEach(function(die){
        die.classList.add("shake")
    })
    setTimeout(function(){
        twoPlayerDice.forEach(function(die){
            die.classList.remove("shake")
        })
        let diceValue = Math.floor((Math.random() * 6) + 1)
        let imageSelector = diceValue - 1
        document.getElementById("dice-img2").setAttribute("src", diceImages[imageSelector])
        totalScore += diceValue
        playerOneScore.innerText = totalScore

        if(diceValue === 1){
           playerOneSide.style.opacity = 0.5
           playerTwoSide.style.opacity = 1
           totalScore = 0
        } else if(totalScore >= 20){
            twoPlayerGame.style.display = "none"
            twoPlayerLosePage.style.display = "initial"
            winText.textContent = playerOne + " wins!!"
            loseText.textContent = "Better luck next time " + playerTwo
        }
    }, 2000)
}

function playerTwoRoll(){
    diceRollAudio.play()
    twoPlayerDice.forEach(function(die){
        die.classList.add("shake")
    })
    setTimeout(function(){
        twoPlayerDice.forEach(function(die){
            die.classList.remove("shake")
        })
        let diceValue = Math.floor((Math.random() * 6) + 1)
        let imageSelector = diceValue - 1
        document.getElementById("dice-img2").setAttribute("src", diceImages[imageSelector])
        totalScore += diceValue
        playerTwoScore.innerText = totalScore

        if(diceValue === 1){
           playerOneSide.style.opacity = 1
           playerTwoSide.style.opacity = 0.5
        } else if(totalScore >= 20){
            twoPlayerGame.style.display = "none"
            twoPlayerLosePage.style.display = "initial"
            winText.textContent = playerTwo + " wins!!"
            loseText.textContent = "Better luck next time " + playerOne
        }
    }, 2000)
}


function onePlayerRoll(){
    diceRollAudio.play()
    dice.forEach(function(die){
        die.classList.add("shake")
    })
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake")
        })
        let diceValue = Math.floor((Math.random() * 6) + 1)
        let imageSelector = diceValue - 1
        document.getElementById("dice-img").setAttribute("src", diceImages[imageSelector])
        totalScore += diceValue
        score.innerText = totalScore

        if(diceValue === 1){
            onePlayerGame.style.display = "none"
            losePage.style.display = "initial"
            finalScore.innerText = totalScore
        } else if(totalScore >= 20){
            onePlayerGame.style.display = "none"
            winPage.style.display = "initial"
            winScore.innerText = totalScore           
        }
    }, 2000)
}

function titleScreen(){
    losePage.style.display = "none"
    winPage.style.display = "none"
    twoPlayerLosePage.style.display = "none"
    welcomePage.style.display = "initial"
}