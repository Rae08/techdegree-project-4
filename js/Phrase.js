class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    
  }  
  // creates list items from the phrase and adds them to the ul, displaying them on the page as hidden
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

  // takes a single letter as an argument, and checks if the letter exists within the phrase
  // if it exists returns true;
  checkLetter(guess) {
    const arrayOfLetters = this.phrase.split('');
    let match = false;

    arrayOfLetters.forEach(letter => {
      if (letter === guess){
        match = true;
      } 
    });
    return match;
  }

  // takes a single letter as an argument
  // if the letter exists in the phrase, changes the class to show to reveal the chosen letter on the page.
  showMatchedLetter(letter) {
    let matchedLetter = `.${letter}`;
    let showLetter = document.querySelectorAll(matchedLetter);
    showLetter.forEach(letter => {
      letter.className = 'show';
    })
  }
}
