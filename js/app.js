/*
 * Create a list that holds all of your cards
 */
const restart = document.querySelector('.restart');
let list = document.querySelectorAll('.card');
let cardList = Array.prototype.slice.call(document.querySelectorAll('.card'));

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function reset() {
  cardList = shuffle(cardList);
  for (var i = 0; i < list.length; i++) {
    list[i].outerHTML = cardList[i].outerHTML;
  }
  console.log(list);
  
}

restart.addEventListener('click', reset);


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

/*
 * set up the event listener for a card. If a card is clicked:

 // Flip Card
 *  - display the card's symbol (put this functionality in another function that you call from this one)

 // Add to "openCards" list
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
        * Setup Modal and display:
        *   - Congrats message
        *   - Play again?
        *   - Time it took
        *   - Star rating
        *   - Number of moves
 */





 /*
 * DONE - Use shuffle to random the cards
 * Mobile first - then tablet - then desktop
 * Update Readme.md
 * Restart button:
 *   - Resets:
 *     - board
 *     - timer
 *     - stars
 *     - counters
 * Create:
 *   - Timer
 *     - start timer
 *     - stop timer
 *     - total time
 *   - Counter
 *     - total number of moves/tries
 *     - number of pairs matched
 * Total pairs = 8
 *   - if pairs = 8 then stop and show modal, else continue
 * Number of stars
 *   - 8 moves = 3 stars
 *   - 9-10 = 2 stars
 *   - 11-12 = 1 star
 *   - >12 = no stars
 * Select deck = .deck
 *   - put li's (.card) into an array
 * Select from DOM
 *   - .stars - filled stars vs empty stars
 *   - .moves
 *   - .restart
 *   - .card
 */
