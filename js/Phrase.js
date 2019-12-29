class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    
  }  
  
  addPhraseToDisplay() {
    let arrayOfLetters = this.phrase.split('');
    let ul = document.querySelector('#phrase ul');
    arrayOfLetters.forEach(letter => {
      if (letter !== " ") {
        let li = document.createElement('li');
        li.className = `hide letter ${letter}`;
        li.textContent = letter;
        ul.appendChild(li);
      } else {
        let li = document.createElement('li');
        li.className = "hide space";
        li.textContent = letter;
        ul.appendChild(li);
      }
    });
  }

  checkLetters(letter) {
    
  }
}
