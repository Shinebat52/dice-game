var activePlayer
var scores
var roundScore
var isGameOver
var diceDom = document.querySelector('.dice')

startGame()
isGameOver = false
//shoog shideh event listener
document.querySelector('.btn-hold').addEventListener('click', function () {
  if (isGameOver == false) {
    scores[activePlayer] += roundScore
    document.getElementById('score-' + activePlayer).textContent =
      scores[activePlayer]
    if (scores[activePlayer] >= 100) {
      isGameOver = true
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.add('winner')
      document.getElementById('name-' + activePlayer).textContent = 'WINNER!!!'
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.remove('active')
    } else ToglogchdiinEeljiigSolino()
  }
})
document.querySelector('.btn-roll').addEventListener('click', function () {
  if (isGameOver == false) {
    //randomoor 1-6 hurtel too gargah
    var diceNumber = Math.floor(Math.random() * 6) + 1
    diceDom.style.display = 'block'
    diceDom.src = 'dice-' + diceNumber + '.png'
    //alert('Shoo buulaa : ' + diceNumber)
    if (diceNumber != 1) {
      roundScore += diceNumber
      document.getElementById(
        'current-' + activePlayer,
      ).textContent = roundScore
    } else {
      ToglogchdiinEeljiigSolino()
    }
  }
})

function ToglogchdiinEeljiigSolino() {
  roundScore = 0
  document.getElementById('current-' + activePlayer).textContent = roundScore
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0)
  // if (activePlayer == 0) activePlayer = 1
  // else activePlayer = 0
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
  diceDom.style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', startGame)

function startGame() {
  //тоглогчийн ээлжийг хадгалах хувьсагч
  isGameOver = false
  document.getElementById('name-0').textContent = 'Player 1'
  document.getElementById('name-1').textContent = 'Player 2'
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')

  activePlayer = 0
  //тоглогчийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0]
  //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0
  //Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэг тоог энэ хувьсагчид хадгална.

  document.getElementById('score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'

  diceDom.style.display = 'none'

  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')

  document.querySelector('.player-0-panel').classList.add('active')
}
