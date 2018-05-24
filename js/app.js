/*
* App JavaScript file
*/
/*
 * Mobile first - then tablet - then desktop
 * Update Readme.md
 */

// Select from DOM
//   - .stars - filled stars vs empty stars
const star = document.getElementsByClassName('star');
//   - .moves
let movesSpan = document.getElementsByClassName('moves');
//   - .restart
const restart = document.querySelector('.restart');
//   - .card  -  * Create a list that holds all of your cards
let deck = document.querySelector('.deck');
let card = deck.querySelectorAll('.card');
let cards = [...card];

//   - .modal-body
let modalBody = document.getElementById('modalBody');
let mBody = '';

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

// Classes based on matched or not
let cardsMatch = 'card match lock no-event';
let cardsNotMatch = 'card show unmatch';

// click event for restart icon
restart.addEventListener('click', reset);

// set up the event listener for a card. If a card is clicked:
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', cardFlip);
}

// click event for New Game button on modal

// reset game on page load
window.addEventListener('load', reset);

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

// Start Timer
function startTimer() {
  setTimer = setInterval(timer, 1000);
}

// Reset Timer
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
  for (var i = 0; i < star.length; i++) {
    star[i].className = 'star fa fa-star';
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

// Flip Card
function cardFlip() {
  // change classes in classList to flip card - use .toggle
  // display the card's symbol
  this.classList.toggle('open');
  this.classList.toggle('show');
  this.classList.toggle('lock');

  // check card - add to open cards list, match/no match, all matched
  checkCard(this);

  // if all cards have matched...
  // display a message with the final score (modal)
  if (pairs === totalPairs) {
    clearInterval(setTimer);
    // Display modal
    setTimeout(() => {
      showModal();
    }, 250);
  }
}

// Add to "openCards" list
function checkCard(cardChecked) {
  // add the card to a *list* of "open" cards
  openCardsList.push(cardChecked);

  // if the list already has another card, check to see if the two cards match
  if (openCardsList.length > 1) {
    // increment the move counter and display it on the page (moves)
    moves();

    if (openCardsList[0].type === openCardsList[1].type) {
      // if the cards do match...
      cardMatched();
    } else {
      // if the cards do not match...
      cardNotMatched();
    }
  }
}

// selected cards match
function cardMatched() {
  // lock the cards in the open position (cardMatched)
  openCardsList[0].className = cardsMatch;
  openCardsList[1].className = cardsMatch;

  // add cards to matchedCardList
  matchedCardsList.push(openCardsList[0]);
  matchedCardsList.push(openCardsList[1]);

  // Clear openCardList
  openCardsList = [];

  // update pairs count by 1
  pairs++;
}

// selected cards do not match
function cardNotMatched() {
  // hide the card's symbol
  openCardsList[0].className = cardsNotMatch;
  openCardsList[1].className = cardsNotMatch;

  //remove the cards from the list
  // timeout to flip cards back over
  setTimeout(function() {
    openCardsList[0].className = 'card';
    openCardsList[1].className = 'card';
    openCardsList = [];
  }, 250);
}

// Track number of moves
function moves() {
  totalMoves++;
  movesSpan[0].innerHTML = totalMoves.toString();
  // start timer on first move
  if (totalMoves == 1) {
    resetTimer();
    startTimer();
  }

  checkStars();
}

// Track stars based on number of moves
function checkStars() {
  // Number of stars
  // Starts with all 3 stars - up to 8 moves
  if (totalMoves > 8 && totalMoves <= 10) {
    //   - 9-10 moves = 2 stars
    star[2].classList.remove('fa-star');
    star[2].classList.add('fa-star-o');
  } else if (totalMoves === 11 && totalMoves <= 12) {
    //   - 11-12 moves = 1 star
    star[1].classList.remove('fa-star');
    star[1].classList.add('fa-star-o');
  } else if (totalMoves > 12) {
    //   - >12 moves = all empty stars
    star[0].classList.remove('fa-star');
    star[0].classList.add('fa-star-o');
  }
}

// Setup Modal and display
function showModal() {
  const rating = document.getElementById('rating');
  const playAgainBtn = document.getElementById('playAgain');
  let displayRating = rating.innerHTML;

  // click event for Play Again button
  playAgainBtn.addEventListener('click', reset);

  while (modalBody.hasChildNodes()) {
    modalBody.removeChild(modalBody.lastChild);
  }

  // - Time it took  - Number of moves - Star rating
  mBody = `
    <p>It took you ${m}:${s} (mm:ss)</p>
    <p>and in ${totalMoves} moves</p>
    <p>You got a <ul id="rating" class="stars">${displayRating}<ul> Rating</p>
    
  `;

  modalBody.innerHTML = mBody;

  $('#showModal').modal();
}
