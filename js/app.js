const start = document.querySelector('#btn__reset');
const game = new Game;

start.addEventListener('click', function() {
  game.startGame();
  
  // once the game is started, listens to keypresses
  // matches the button pressed with the on screen button and if the button is not disabled, passes the button into the handleInteraction method
  document.addEventListener('keyup', function(e) {
    let letter = e.code[3].toLowerCase();
    let keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      if(key.innerText === letter && key.disabled === false){
        game.handleInteraction(key);
      }
    })    
  })
} )

const key = document.querySelector('#qwerty');

// listens for clicks on the keys, but does not capture clicks on the surrounding whitespace
key.addEventListener('click', function() {
  // the below code was found here: https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  game.handleInteraction(event.target);
})
