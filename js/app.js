/*
 * Create a list that holds all of your cards
 */
const restart = document.querySelector('.restart');
let deck = document.querySelector('.deck');
let card = deck.querySelectorAll('.card');
let cards = [...card];

// Select from DOM
//   - .stars - filled stars vs empty stars
//   - .moves
//   - .restart
//   - .card

// Create:
//  - Timer
//    - start timer
//    - stop timer
//    - total time
//  - Counter
//    - total number of moves / tries
//    - number of pairs matched

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
*/

function reset() {
  // reset board
  let cardList = shuffle(cards);
  while (deck.hasChildNodes()) {
    deck.removeChild(deck.lastChild);
  }
  for (var i = 0; i < cardList.length; i++) {
    deck.appendChild(cardList[i]);
  }

  // reset timer
  // reset stars
  // reset counters

}
// click event for restart icon
restart.addEventListener('click', reset);

// click event for New Game button on modal

// reset game on page load


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
  cards[i].addEventListener('click', function () {
    // flip card
    // check card - a match - add to open card list
    // check card - not a match
    // check if all matches are met
  });
}

// Flip Card
function cardFlip() {
  // change classes in classList to flip card - use .toggle
  // display the card's symbol
}

// Add to "openCards" list
function checkCard() {
  // add the card to a *list* of "open" cards
  // if the list already has another card, check to see if the two cards match
  // if the cards do match, lock the cards in the open position (cardMatched)
  // if the cards do not match, remove the cards from the list and hide the card's symbol (cardNotMatched)
  // increment the move counter and display it on the page (moves)
  // if all cards have matched, display a message with the final score (allMatched and modal)

}

function cardMatched() {

}

function cardNotMatched() {

}

function moves() {

}

function allMatched() {
  // Total pairs = 8
  //   - if pairs = 8 then stop and show modal, else continue

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
