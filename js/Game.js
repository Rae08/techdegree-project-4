class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = "null";
  }

  // creates a list of phrases
  createPhrases(){
    let phrases = ['A Cat Nap', 'Curiousity Killed The Cat', 'Fat Cat', 'Has the cat got your tongue', 'Let the cat out of the bag', 'Like herding cats', 'Look what the cat dragged in'];
    
    return phrases;
  }

  // creates a random number up to the length of the phrases array
  // uses the random number to select the phrase at that index in the array, selecting a random phrase.
  // returns the phrase
  getRandomPhrase() {
    let randomIndex = Math.floor(Math.random() * Math.floor(this.phrases.length));
    let phrase = this.phrases[randomIndex];
    return phrase;
    
  }

  // starts the games
  // clears the previous game if an active phrase was set previously
  startGame(){
   let prevPhraseUl = document.querySelector('ul');
   let keys = document.querySelectorAll('.key');
   let lives = document.querySelectorAll('.tries img');

  // resets the board if a previous game has been played
   if (this.activePhrase !== 'null') {     
    prevPhraseUl.innerHTML = '';
    this.missed = 0;

    keys.forEach(key => {
        key.className = 'key';
        key.disabled = false;
    })
    
    lives.forEach(life =>{
      life.src = 'images/liveHeart.png'
    })
   }

// removes overlay, selects a random phrase, creates a Phrase object, and adds the phrase to the display
   let overlay = document.querySelector('#overlay');
   overlay.style.display = "none";
   const randomPhrase = game.getRandomPhrase();
   const phrase = new Phrase(randomPhrase);
   this.activePhrase = phrase;
   phrase.addPhraseToDisplay();
  }

  // checks if all letters have been shown, if so the game has been won!
  checkForWin() {
    let matchedLetters = document.querySelectorAll('.hide.letter');
    if (matchedLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  // changes the live heart picture to lost heart and increments the missed marker
  // if the missed marker is greater than or equal to 5, the game is lost
  removeLife() {
    let lives = document.querySelectorAll('.tries img');
    lives[this.missed].src = 'images/lostHeart.png'
    this.missed += 1;
    if (this.missed >=5) {
      this.gameOver();
    }
  };

  // ends the game and displays the overlay
  // displays win or lose message depending on the result of the game
  gameOver() {
    let result = 'unknown';
    let overlay = document.querySelector('#overlay');
    if (this.checkForWin() === true) {
      result = "Great job!";
      overlay.className = "win";
    } else {
      result = "Sorry, better luck next time!"
      overlay.className = "lose";
    }
   overlay.style.display = "";
   let h1 = document.querySelector('#game-over-message');
   h1.textContent = result;
  }


// when a key is selected, disables the key so it cannot be selected again
// checks if it is in the phrase, if so calls the showMatchedLetter method and checks if the game is won
// if the letter is not in the phrase, calls the removeLife method
// if the game is won, ends the game
  handleInteraction(letter) {        
    let phrase = new Phrase(this.activePhrase.phrase);
    let allKeys = document.querySelectorAll('.key');

    allKeys.forEach(key => {
      if (key.innerText === letter.innerText) {
        key.disabled = true;
      }
    })
    
    if (phrase.checkLetter(letter.innerText) !== true) {      
      letter.className = 'key wrong';
      this.removeLife();
    } else {
      letter.className = 'key chosen';
      phrase.showMatchedLetter(letter.innerText);
      this.checkForWin();
      if (this.checkForWin() === true){
        this.gameOver();
      }
    }
  }

}

