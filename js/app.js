/*
* App JavaScript file
*/

// Select from DOM
//   - .stars - filled stars vs empty stars
const stars = document.getElementsByClassName('star');
//   - .moves
let movesSpan = document.getElementsByClassName('moves');
//   - .restart
const restart = document.querySelector('.restart');
//   - .card  -  * Create a list that holds all of your cards
let deck = document.querySelector('.deck');
let card = deck.querySelectorAll('.card');
let cards = [...card];

// Create Counters
//    - total number of moves / tries
let totalMoves = 0;
//    - number of pairs matched
let pairs = 0;
//    - total # of pairs
const totalPairs = cards.length / 2;
//    - timer
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let m = '0';
let s = '0';
let totalSecs = 0;
let setTimer;

// Open Cards and Matched Cards lists/arrays
let openCardsList = [];
let matchedCardsList = [];

// Display the cards on the page and reset board
function reset() {
  // - shuffle the list of cards using the provided "shuffle" method below
  cards = shuffle(cards);
  // - loop through each card and remove cards from deck
  while (deck.hasChildNodes()) {
    deck.removeChild(deck.lastChild);
  }
  // - add each card to the deck
  for (var i = 0; i < cards.length; i++) {
    deck.appendChild(cards[i]);
    cards[i].className = 'card';
  }

  // create/reset timer
  resetTimer();
  // reset stars
  resetStars();
  // reset counters
  resetCounters();
}
// click event for restart icon
restart.addEventListener('click', reset);

// click event for New Game button on modal

// reset game on page load
//window.onload = reset();

// Create Timer
function timer() {
  totalSecs++;
  m = String(Math.floor(totalSecs / 60));
  s = String(totalSecs % 60);
  m = m.length < 2 ? '0' + m : m;
  s = s.length < 2 ? '0' + s : s;

  min.innerHTML = m;
  sec.innerHTML = s;
}

function startTimer() {
  // start timer
  setTimer = setInterval(timer, 1000);
}

function resetTimer() {
  min.innerHTML = '00';
  sec.innerHTML = '00';
  m = '0';
  s = '0';
  clearInterval(setTimer);
  totalSecs = 0;  
}

// Reset stars
function resetStars() {
  // change fa class using classList.toggle
  for (var i = 0; i < stars.length; i++) {
    stars[i].className = 'star fa fa-star';
  }
}

// Reset counters
function resetCounters() {
  // totalMoves
  totalMoves = 0;
  // movesSpan
  movesSpan[0].innerHTML = totalMoves.toString();
  // pairs
  pairs = 0;
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// set up the event listener for a card. If a card is clicked:
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', cardFlip);
}

// Flip Card
function cardFlip() {
  // change classes in classList to flip card - use .toggle
  // display the card's symbol
  this.classList.toggle('open');
  this.classList.toggle('show');
  
  // check card - a match - add to open card list
  // check card - not a match
  // check if all matches are met
  moves();
}

// Add to "openCards" list
function checkCard(cardChecked) {
  // add the card to a *list* of "open" cards
  openCardsList.push(cardChecked);

  // if the list already has another card, check to see if the two cards match
  if (openCardsList.length > 1) {
    // if the cards do match...
    //lock the cards in the open position (cardMatched)
    // update pairs count by 1
    pairs++;
    // if the cards do not match, remove the cards from the list and hide the card's symbol (cardNotMatched)
    // increment the move counter and display it on the page (moves)
    moves();
    // if all cards have matched, display a message with the final score (allMatched and modal)
    if ((pairs = totalPairs)) {
      // Display modal
      modal();
    }
  }
}

function cardMatched() {}

function cardNotMatched() {}

function moves() {
  totalMoves++;
  movesSpan[0].innerHTML = totalMoves.toString();
  // start timer on first move
  if(totalMoves == 1) {
    resetTimer();
    startTimer();
  }
}

function allMatched() {
  // Total pairs = 8
  //   - if pairs = 8 then stop and show modal, else continue
  // stop timer
}

function checkStars() {
  // Number of stars
  //   - 8 moves = 3 stars
  //   - 9-10 = 2 stars
  //   - 11-12 = 1 star
  //   - >12 = no stars
}

// Setup Modal and display
function modal() {
  // - Congrats message
  // - Play again?
  // - Time it took
  // - Star rating
  // - Number of moves
}

/*
 * DONE - Use shuffle to random the cards
 * Mobile first - then tablet - then desktop
 * Update Readme.md
 */
