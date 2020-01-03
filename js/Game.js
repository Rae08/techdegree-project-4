class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = "null";
  }

  createPhrases(){
    let phrases = ['A Cat Nap', 'Curiousity Killed The Cat', 'Fat Cat', 'Has the cat got your tongue', 'Let the cat out of the bag', 'Like herding cats', 'Look what the cat dragged in'];
    
    return phrases;
  }

  getRandomPhrase() {
    let randomIndex = Math.floor(Math.random() * Math.floor(this.phrases.length));
    let phrase = this.phrases[randomIndex];
    return phrase;
    
  }

  startGame(){
   let prevPhraseUl = document.querySelector('ul');
   let keys = document.querySelectorAll('.key');
   let lives = document.querySelectorAll('.tries img');

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
   
   
   let overlay = document.querySelector('#overlay');
   overlay.style.display = "none";
   const randomPhrase = game.getRandomPhrase();
   const phrase = new Phrase(randomPhrase);
   this.activePhrase = phrase;
   phrase.addPhraseToDisplay();
  }

  checkForWin() {
    let matchedLetters = document.querySelectorAll('.hide.letter');
    if (matchedLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  removeLife() {
    let lives = document.querySelectorAll('.tries img');
    lives[this.missed].src = 'images/lostHeart.png'
    this.missed += 1;
    if (this.missed >=5) {
      this.gameOver();
    }
  };

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

