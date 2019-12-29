class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = "null";
  }

  createPhrases(){
    let phrases = ['Phrase One', 'Phrase Two', 'Phrase Three', 'Phrase Four', 'Phrase Five'];
    
    return phrases;
  }

  getRandomPhrase() {
    let randomIndex = Math.floor(Math.random() * Math.floor(this.phrases.length));
    let phrase = this.phrases[randomIndex];
    return phrase;
    
  }

  startGame(){
   let overlay = document.querySelector('#overlay');
   overlay.style.display = "none";
   const randomPhrase = game.getRandomPhrase();
   const phrase = new Phrase(randomPhrase);
   this.activePhrase = phrase;
   phrase.addPhraseToDisplay();
  }

}